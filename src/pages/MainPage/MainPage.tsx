import React, { useEffect, useState } from 'react'
import type { Department, User } from '../../types/user'
import { getUsers } from '../../api/users'
// import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
import ErrorScreen from '../../components/ErrorScreen/ErrorScreen'
import { useDebounce } from '../../hooks/useDebounce'
import { NavigationBar } from '../../components/NavigationBar/NavigationBar'
import { UserList } from '../../components/UserList/UserList'
import { SortModal } from '../../components/SortModal/SortModal'
import { SkeletonList } from '../../components/UI/Skeleton/Skeleton'
import { useNetworkStatus } from '../../hooks/useNetworkStatus.ts'
import useLocalStorageState from 'use-local-storage-state'

type SortType = "alphabet" | "birthday"

const MainPage = () => {
  const [users, setUsers] = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const [selectedDepartment, setSelectedDepartment] = useLocalStorageState<Department>('department', {
    defaultValue: 'all'
  });

  const [searchQuery, setSearchQuery] = useLocalStorageState<string>('search', {
    defaultValue: ''
  });

  const [sortType, setSortType] = useLocalStorageState<SortType>('sort', {
    defaultValue: 'alphabet'
  });
  
  const debouncedSearch = useDebounce(searchQuery, 500)

  const [isSortModalOpen, setIsSortModalOpen] = useState(false)
  const isOffline = useNetworkStatus()
  const [isReconnecting, setIsReconnecting] = useState(false);

  useEffect(() => {
    if (!isOffline) {
      setIsReconnecting(true);
      loadUsers(selectedDepartment).finally(() => {
        setIsReconnecting(false);
      });
    }
  }, [isOffline]);

  const tabs: { value: Department; label: string }[] = [
    { value: 'all', label: 'Все' },
    { value: 'android', label: 'Android' },
    { value: 'ios', label: 'iOS' },
    { value: 'design', label: 'Дизайн' },
    { value: 'management', label: 'Менеджмент' },
    { value: 'qa', label: 'QA' },
    { value: 'back_office', label: 'Бэк-офис' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'hr', label: 'HR' },
    { value: 'pr', label: 'PR' },
    { value: 'backend', label: 'Backend' },
    { value: 'support', label: 'Техподдержка' },
    { value: 'analytics', label: 'Аналитика' },
  ]
  
  const loadUsers = async (department: Department) => {
    setLoading(true)
    setError(null)

    try {
      const data = await getUsers(department)
      setUsers(data)
    } catch (err) {
      setError('NOT')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadUsers(selectedDepartment)
  }, [selectedDepartment])

  const getDepartmentName = (dept: string): string => {
    const departamentMap: Record<string, string> = {
      android: 'Android',
      ios: 'iOS',
      design: 'Design',
      management: 'Management',
      qa: 'QA',
      back_office: 'Back-office',
      frontend: 'Frontend',
      hr: 'HR',
      pr: 'PR',
      backend: 'Backend',
      support: 'Support',
      analytics: 'Analitics',
    }
    return departamentMap[dept] || dept
  }

  const sortAlphabetically = (usersToSort: User[]): User[] => {
    return [...usersToSort].sort((a, b) => {
      const nameA = `${a.firstName} ${a.lastName}`.toLowerCase()
      const nameB = `${b.firstName} ${b.lastName}`.toLowerCase()
      return nameA.localeCompare(nameB)
    })
  }

  const sortByBirthday = (usersToSort: User[]): User[] => {
    const today = new Date()
    const currentYear = today.getFullYear()

    return [...usersToSort].sort((a, b) => {
      const dateA = new Date(a.birthday)
      const dateB = new Date(b.birthday)

      const birthdayThisYearA = new Date(currentYear, dateA.getMonth(), dateA.getDate())
      const birthdayThisYearB = new Date(currentYear, dateB.getMonth(), dateB.getDate())

      if (birthdayThisYearA < today) {
        birthdayThisYearA.setFullYear(currentYear + 1)
      }
      if (birthdayThisYearB < today) {
        birthdayThisYearB.setFullYear(currentYear + 1)
      }

      return birthdayThisYearA.getTime() - birthdayThisYearB.getTime()
    })
  }

  const groupUsersByYear = (users: User[]): {year: number; users: User[]}[] => {
    const groups: {year: number; users: User[]}[] = []
    users.forEach(user => {
      const year = new Date(user.birthday).getFullYear()
      const existingGroup = groups.find(g => g.year === year)
      if (existingGroup){
        existingGroup.users.push(user)
      } else {
        groups.push({year, users: [user]})
      }
    })
    return groups
  }

  const filterBySearch = (usersToFilter: User[], query: string): User[] => {
    if (!query.trim()) return usersToFilter

    const lowerQuery = query.toLowerCase()
    return usersToFilter.filter(user => 
      user.firstName.toLowerCase().includes(lowerQuery) ||
      user.lastName.toLowerCase().includes(lowerQuery) ||
      user.userTag.toLowerCase().includes(lowerQuery) ||
      user.phone.toLowerCase().includes(lowerQuery)
    )
  }

  useEffect(() => {
    if (!users.length) return

    let result = filterBySearch(users, searchQuery)

    if (sortType === 'alphabet'){
      result = sortAlphabetically(result)
    } else {
      result = sortByBirthday(result)
    }

    setFilteredUsers(result)
  }, [users, debouncedSearch, sortType])

  const handleDepartmentChange = (department: Department) => {
    setSelectedDepartment(department)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSortChange = (type: SortType) => {
    setSortType(type)
    setIsSortModalOpen(false)
  }

  const handleRetry = () => {
    loadUsers(selectedDepartment)
  }

  if (error) {
    return (
      <>
        <NavigationBar 
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          selectedDepartment={selectedDepartment}
          onDepartmentChange={handleDepartmentChange}
          onSortClick={() => setIsSortModalOpen(true)}
          tabs={tabs}
          isOffline={isOffline}
          isReconnecting={isReconnecting}
        />
        <div style={{ height: 'calc(100vh - 106px)' }}>
        <ErrorScreen onRetry={handleRetry}/>

        </div>
      </>
    )
  }

  return (
    <div>
      <NavigationBar 
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        selectedDepartment={selectedDepartment}
        onDepartmentChange={handleDepartmentChange}
        onSortClick={() => setIsSortModalOpen(true)}
        tabs={tabs}
        isOffline={isOffline}
        isReconnecting={isReconnecting}
      />

      {loading ? (
        <SkeletonList />
      ) : (
        <UserList
          users={filteredUsers}
          sortType={sortType}
          searchQuery={searchQuery}
          getDepartmentName={getDepartmentName}
          groupUsersByYear={groupUsersByYear}
          isOffline={isOffline}     
          isReconnecting={isReconnecting} 
        />
      )}


      {isSortModalOpen && (
        <SortModal
          onClose={() => setIsSortModalOpen(false)}
          onSortChange={handleSortChange}
          currentSort={sortType}
        />)}
    </div>
  )
}

export default MainPage

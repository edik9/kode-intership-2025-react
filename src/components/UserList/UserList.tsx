import { useTranslation } from "react-i18next"
import type { User } from "../../types/user"
import NotFound from "../NotFound/NotFound"
import UserCard from "../UserCard/UserCard"
import { YearHeader } from "../YearHeader/YearHeader"

interface UserListProps {
  users: User[]
  sortType: "alphabet" | "birthday"
  searchQuery: string
  getDepartmentName: (dept: string) => string
  groupUsersByYear: (users: User[]) => { year: number; users: User[] }[]
  isOffline?: boolean      
  isReconnecting?: boolean
}

export const UserList: React.FC<UserListProps> = ({
  users,
  sortType,
  searchQuery,
  getDepartmentName,
  groupUsersByYear,
  isOffline,
  isReconnecting
}) => {
  const { t } = useTranslation()

  if (users.length === 0) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '40px 16px',
        color: '#97979B',
        fontSize: '16px', 
      }}>
        {searchQuery ? <NotFound /> : t('noUsers')}
      </div>
    )
  }

  return (
    <div>
      {sortType === "alphabet" ? (
        users.map(user => (
          <UserCard 
            key={user.id}
            user={user}
            getDepartmentName={getDepartmentName}
            variant="list"
            isOffline={isOffline}
            isReconnecting={isReconnecting}
          />
        ))
      ) : (
        groupUsersByYear(users).map(group => (
          <div key={group.year}>
            <YearHeader year={group.year}/>
            <div>
              {group.users.map(user => (
                <UserCard 
                  key={user.id}
                  user={user}
                  getDepartmentName={getDepartmentName}
                  showBirthday={true}
                  variant="list"
                  isOffline={isOffline}
                  isReconnecting={isReconnecting}
                />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  )
}
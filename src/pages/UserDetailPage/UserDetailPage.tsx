import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getUsers } from '../../api/users'
import type { User } from '../../types/user'
// import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
import { NavigationBar } from '../../components/NavigationBar/NavigationBar'
import UserCard from '../../components/UserCard/UserCard'
import * as Styles from './UserDetailPage.styles'
import { SkeletonList } from '../../components/UI/Skeleton/Skeleton'
import { PhoneIcon, StarIcon } from '../../assets/icons'

const formatBirthday = (dateString: string): string => {
  const date = new Date(dateString)
  
  const day = date.getDate()
  const month = date.toLocaleDateString('ru-RU', { month: 'long' })
  const year = date.getFullYear()
  
  return `${day} ${month} ${year}`
}

const calculateAge = (birthday: string): number => {
  const today = new Date()
  const birthDate = new Date(birthday)

  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())){
    age --
  }
  return age
}

const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/)
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`
  }
  return phone
}

interface UserDetailPageProps {
  getDepartmentName?: (dept: string) => string
}

const UserDetailPage: React.FC<UserDetailPageProps> = ({getDepartmentName = (dept) => dept}) => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

useEffect(() => {
  const loadUser = async () => {
    setLoading(true)
    try {
      const users = await getUsers("all")
      const foundUser = users.find(u => u.id === id)
      setUser(foundUser || null)
    } catch (error) {
      console.error("NO", error)
    } finally {
      setLoading(false)
    }
  }

  if (id) {
    loadUser()
  }
}, [id])

const handleBack = () => {
  navigate(-1)
}



return(
  <>
    <NavigationBar 
      showBackButton={true}
      onBackClick={handleBack}
    />

    {loading ? (
      <SkeletonList variant="detail"/>
      ) : ( 
        user && (
          <>
            <UserCard 
              user={user}
              key={user.id}
              getDepartmentName={getDepartmentName}
              showBirthday={false}
              variant="detail"
            />

            <Styles.InfoSection>
              <Styles.InfoRow>
                <Styles.Icon>
                  <StarIcon />
                </Styles.Icon>
                  <Styles.InfoContent>
                    <Styles.InfoText>{formatBirthday(user.birthday)}</Styles.InfoText>
                    <Styles.AgeText>{calculateAge(user.birthday)} лет</Styles.AgeText>
                  </Styles.InfoContent>
              </Styles.InfoRow>
              <Styles.InfoRow>
                <Styles.Icon>
                  <PhoneIcon />
                </Styles.Icon>
                  <Styles.InfoContent>
                    <Styles.InfoText>{formatPhone(user.phone)}</Styles.InfoText>
                  </Styles.InfoContent>
              </Styles.InfoRow>
            </Styles.InfoSection>
          </>
        )

      )}
  </>
)

}
export default UserDetailPage

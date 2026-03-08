import React from 'react'
import { useNavigate } from 'react-router-dom'
import type { User } from '../../types/user'
import * as Styles from './UserCard.styles'
import { GooseIcon } from '../../assets/icons'
import i18n from '../../i18n'

interface UserCardProps {
  user: User
  getDepartmentName: (dept: string) => string
  showBirthday?: boolean
  variant?: "list" | "detail"
  isOffline?: boolean          
  isReconnecting?: boolean
}

const UserCard: React.FC<UserCardProps> = ({user, showBirthday, variant = "list", isOffline, isReconnecting}) => {
  const navigate = useNavigate()

  const isDisabled = isOffline || isReconnecting;

  const handleClick = () => {
    if (isDisabled) return;
    if (variant === 'list') {  
      navigate(`/user/${user.id}`)
    }
  }

  const formatBirthdayShort = (dateString: string) =>{
    const date = new Date(dateString)
    const day = date.getDate()
    const month = date.toLocaleDateString(i18n.language === 'ru' ? 'ru-RU' : 'en-US', { month: 'long' })
    return `${day} ${month.slice(0, 3)}`
  }

  return (
    <Styles.Card 
      onClick={handleClick} 
      variant={variant}
    >
      {!user.avatarUrl ? (
        <GooseIcon />
      ) : (
        <Styles.Avatar 
          src={`https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&size=120&background=6534FF&color=fff&bold=true`} 
          alt={`${user.firstName} ${user.lastName}`}
          variant={variant}
        />
      )}
      <Styles.InfoContainer variant={variant}>
        <Styles.NameContainer variant={variant}>
          <Styles.Name variant={variant}>{user.firstName} {user.lastName}</Styles.Name>
          <Styles.UserTag variant={variant}>{user.userTag}</Styles.UserTag>
        </Styles.NameContainer>
        <Styles.Position variant={variant}>{user.position}</Styles.Position>
      </Styles.InfoContainer>

      {showBirthday && (
        <Styles.BirthdayContainer>
          {formatBirthdayShort(user.birthday)}
        </Styles.BirthdayContainer>
      )}
    </Styles.Card>
  )
}

export default UserCard
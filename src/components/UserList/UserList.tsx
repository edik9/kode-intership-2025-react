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
}

export const UserList: React.FC<UserListProps> = ({
  users,
  sortType,
  searchQuery,
  getDepartmentName,
  groupUsersByYear
}) => {
  if (users.length === 0) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '40px 16px',
        color: '#97979B',
        fontSize: '16px',
        // height: 'calc(100vh - 140px)' 
      }}>
        {searchQuery ? <NotFound /> : "Нет пользователей"}
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
                />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  )
}
import { BackIcon, SearchIcon, SortIcon } from "../../assets/icons"
import type { Department } from "../../types/user"
import * as Styles from './NavigationBar.styles'

interface NavigationBarProps {
  searchQuery?: string
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  selectedDepartment?: Department
  onDepartmentChange?: (department: Department) => void
  onSortClick?: () => void
  tabs?: { value: Department; label: string }[]
  showBackButton?: boolean
  onBackClick?: () => void
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  searchQuery = "",
  onSearchChange,
  selectedDepartment,
  onDepartmentChange,
  onSortClick,
  tabs = [],
  showBackButton = false,
  onBackClick
}) => {
  return (
    <Styles.Header $isDetailPage={showBackButton}>
      <Styles.Container>
        {showBackButton ? (
          <Styles.DetailHeader>
              <Styles.BackButton onClick={onBackClick}>
                <BackIcon />
              </Styles.BackButton>
              <Styles.Placeholder />
          </Styles.DetailHeader>
        ) : (
          <Styles.MainHeader>
            <Styles.SearchSection>
              <Styles.SearchLabel>Поиск</Styles.SearchLabel>
              <Styles.SearchWrapper>
                {/* ПОИСКОВАЯ СТРОКА */}
                <Styles.SearchContainer>
                  <Styles.SearchIcon>
                    <SearchIcon />
                  </Styles.SearchIcon>
                  <Styles.SearchInput 
                    type="text" 
                    placeholder="Введи имя, тег, почту..."
                    value={searchQuery}
                    onChange={onSearchChange}
                  />
                  <Styles.SortButton onClick={onSortClick}>
                    <SortIcon />
                  </Styles.SortButton>
                </Styles.SearchContainer>
              </Styles.SearchWrapper>
            </Styles.SearchSection>

            {/* ВКЛАДКИ */}
            <Styles.TabsContainer>
              {tabs.map(tab => (
                <Styles.Tab
                  key={tab.value}
                  $active={selectedDepartment === tab.value}
                  onClick={() => onDepartmentChange?.(tab.value)}
                >
                  {tab.label}
                </Styles.Tab>
              ))}
            </Styles.TabsContainer>
          </Styles.MainHeader>
        )}
      </Styles.Container>
    </Styles.Header>
  )
}
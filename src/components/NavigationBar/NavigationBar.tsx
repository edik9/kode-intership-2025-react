import { BackIcon, SearchIcon, SortIcon } from "../../assets/icons"
import { useTheme } from "../../hooks/useTheme"
import type { Department } from "../../types/user"
import OfflineBanner from "../OfflineBanner/OfflineBanner"
import ReconnectedBanner from "../ReconnectedBanner/ReconnectedBanner"
import * as Styles from './NavigationBar.styles'
import LangSwitcher from "../LangSwitcher/LangSwitcher"
import { useTranslation } from "react-i18next"

interface NavigationBarProps {
  searchQuery?: string
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  selectedDepartment?: Department
  onDepartmentChange?: (department: Department) => void
  onSortClick?: () => void
  tabs?: { value: Department; label: string }[]
  showBackButton?: boolean
  onBackClick?: () => void
  isOffline?: boolean,
  isReconnecting?: boolean
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  searchQuery = "",
  onSearchChange,
  selectedDepartment,
  onDepartmentChange,
  onSortClick,
  tabs = [],
  showBackButton = false,
  onBackClick,
  isOffline,
  isReconnecting
}) => {
  const {theme, toggleTheme} = useTheme()
  const {t} = useTranslation()
  return (
    <>
      {isOffline ? (
        <>
          <OfflineBanner />
        </>
      ) : isReconnecting ? (
        <>
          <ReconnectedBanner />
          <Styles.Container>
            <Styles.Header $isDetailPage={showBackButton}>
                {showBackButton ? (
                  <Styles.DetailHeader>
                      <Styles.BackButton onClick={onBackClick}>
                        <BackIcon />
                      </Styles.BackButton>
                      <Styles.Placeholder />
                  </Styles.DetailHeader>
                ) : (
                  <Styles.MainHeader>
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
            </Styles.Header>
          </Styles.Container>
        </>
      ):(
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
                  <Styles.OptButtons>
                    <Styles.SearchLabel>
                      {t('search')}
                    </Styles.SearchLabel>
                    <Styles.ThemeToggle onClick={toggleTheme}>
                      {theme === 'light' ? '🌙' : '☀️'}
                    </Styles.ThemeToggle>
                    <LangSwitcher />
                  </Styles.OptButtons>
                  <Styles.SearchWrapper>
                    {/* ПОИСКОВАЯ СТРОКА */}
                    <Styles.SearchContainer>
                      <Styles.SearchIcon>
                        <SearchIcon />
                      </Styles.SearchIcon>
                      <Styles.SearchInput 
                        type="text" 
                        placeholder={t('searchPlaceholder')}
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
      )}
    </>
  )
}
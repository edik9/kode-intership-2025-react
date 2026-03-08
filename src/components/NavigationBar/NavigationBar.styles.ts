import styled from "styled-components";
import { typography } from "../../styles/variables";

interface HeaderProps {
  $isDetailPage?: boolean;
}

export const Header = styled.header<HeaderProps>`
  position: sticky;       
  top: 0;
  width: 100%;
  background: ${props => props.$isDetailPage ? props.theme.colors.bgSecondary : props.theme.colors.bgPrimary}; 
  border-bottom: ${props => props.$isDetailPage ? 'none' : `1px solid ${props.theme.colors.contentDefaultSecondary}`}
  z-index: 1000;
`


export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
`

// шапка для страницы деталей
export const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  position: relative;
`

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    filter: ${({ theme }) => 
      theme.colors.textPrimary === '#ffffff'
        ? 'brightness(0) invert(1)' 
        : 'none'}
  }

  &:hover {
    opacity: 0.7;
  }
`

export const PageTitle = styled.h1`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.bold};
  font-size: ${typography.fontSize.xxxl}px;
  line-height: ${typography.lineHeight.xxl};
  color: ${({theme}) => theme.colors.textPrimary};
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
`

export const Placeholder = styled.div`
  width: 44px;
  height: 44px;
`

// Шапка для главной страницы
export const MainHeader = styled.div`
  padding: 8px 0 0 0;
`

export const SearchSection = styled.div`
  margin-bottom: 16px;
`

export const SearchLabel = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.bold};
  font-size: ${typography.fontSize.xxxl}px;
  line-height: ${typography.lineHeight.xxl};
  color: ${({theme}) => theme.colors.textPrimary};
  margin: 0 0 24px 0;
`

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const SearchIcon = styled.div`
  position: absolute;
  left: 13px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: ${({theme}) => theme.colors.textTertiary};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
    transition: filter 0.2s ease-in-out;
  }
`

export const SearchContainer = styled.div`
  flex: 1;
  position: relative;
  height: 40px;

  &:focus-within {
    ${SearchIcon} img {
      filter: invert(84%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(97%) contrast(90%);
    }
  }
  input {
    caret-color: ${({theme}) => theme.colors.active};
  }
`

export const OptButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px 44px 8px 44px;
  background: ${({theme}) => theme.colors.bgSecondary};
  border: none;
  border-radius: 16px;
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.fontSize.md}px;
  color: ${({theme}) => theme.colors.textPrimary};
  
  &::placeholder {
    color: ${({theme}) => theme.colors.textTertiary};
  }
`

export const SortButton = styled.button`
  position: absolute;
  right: 13px;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.colors.textPrimary};
  z-index: 2;
  padding: 0;

  &:hover img {
    filter: brightness(0) saturate(100%) invert(29%) sepia(97%) saturate(2843%) hue-rotate(248deg) brightness(96%) contrast(113%);
`
export const TabsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 0px;
  
  &::-webkit-scrollbar {
    display: none;
  }

  button {
    padding-left: 12px;
    padding-right: 12px;
  }
`

interface TabProps {
  $active: boolean
}

export const Tab = styled.button<TabProps>`
  background: none;
  border: none;
  padding: 8px 0;
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.fontSize.md}px;
  font-weight: ${props => props.$active ? typography.fontWeight.semibold : typography.fontWeight.regular};
  color: ${props => props.$active ? props.theme.colors.textPrimary : props.theme.colors.textTertiary};
  border-bottom: 2px solid ${props => props.$active ? props.theme.colors.active : 'transparent'};
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: ${({theme}) => theme.colors.textPrimary};
  }
`
export const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 4px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.textPrimary};
  
  &:hover {
    opacity: 0.8;
  }
`;


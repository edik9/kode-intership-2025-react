import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
`
export const SkeletonWrapper = styled.div`
  overflow: hidden;
  padding: 12px 16px;
  border-bottom: 1px solid ${({theme}) => theme.colors.bgPrimary};
  display: flex;
  align-items: center;
  gap: 12px;
  animation: ${pulse} 1.5s ease-in-out infinite;
`
export const SkeletonAvatar = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: ${({theme}) => theme.colors.gradientSkeleton};
`
export const SkeletonContent = styled.div`
  flex: 1;
`
export const SkeletonLine = styled.div<{ width: string; height: string }>`
  height: ${props => props.height};
  width: ${props => props.width};
  background: ${({theme}) => theme.colors.gradientSkeleton};
  border-radius: 50px;
  margin-bottom: 6px;
  
  &:last-child {
    margin-bottom: 0;
  }
`


// страница с деталями

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: center;
  max-width: 1280px;
  margin: 0 auto;
  background-color: ${({theme}) => theme.colors.bgSecondary};
  animation: ${pulse} 1.5s ease-in-out infinite;
`

export const DetailAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${({theme}) => theme.colors.gradientDetailsSkeleton};
  margin: 0 auto 24px;
`

export const DetailNameRow = styled.div`
  width: 180px;  
  height: 30px;
  background: ${({theme}) => theme.colors.gradientDetailsSkeleton};
  border-radius: 15px;
  margin: 0 auto 10px;
`

export const DetailPosition = styled.div`
  width: 120px;
  height: 18px;
  background: ${({theme}) => theme.colors.gradientDetailsSkeleton};
  border-radius: 10px;
  margin: 0 auto;
`


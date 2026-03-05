import * as Styles from "./Skeleton.styles"

interface SkeletonProps {
  variant?: "list" | "detail"
}

export const SkeletonCard: React.FC<SkeletonProps> = ({ variant = 'list' }) => {

  if (variant === "detail") {
    return (
      <Styles.DetailContainer>
        <Styles.DetailAvatar />
        <Styles.DetailNameRow />
        <Styles.DetailPosition />
      </Styles.DetailContainer>
    )
  }

  return (
    <Styles.SkeletonWrapper>
      <Styles.SkeletonAvatar />
      <Styles.SkeletonContent>
        <Styles.SkeletonLine width="144px" height="16px"/>
        <Styles.SkeletonLine width="80px" height="12px"/>
      </Styles.SkeletonContent>
    </Styles.SkeletonWrapper>
  )
}



export const SkeletonList: React.FC<SkeletonProps> = ({variant = 'list'}) => {
  if (variant === 'detail') {
    return <SkeletonCard variant="detail" />
  }
  return (
    <div style={{ overflow: 'hidden' }}>
      {Array.from({length: 5}).map((_, index) => (
        <SkeletonCard key={index} variant="list"/>
      ))}
    </div>
  )
}

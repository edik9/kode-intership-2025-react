import React from 'react'
import * as Styles from './YearHeader.styles'

interface YearHeaderProps {
  year: number
}

export const YearHeader: React.FC<YearHeaderProps> = ({ year }) => {
  return (
    <Styles.Container>
      <Styles.Line />
      <Styles.Year>{year}</Styles.Year>
      <Styles.Line />
    </Styles.Container>
  )
}
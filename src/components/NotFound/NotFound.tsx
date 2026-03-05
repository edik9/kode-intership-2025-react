import React from 'react'
import { GlassIcon } from '../../assets/icons'
import * as Styles from './NotFound.styles'

const NotFound: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.IconWrapper>
        <GlassIcon />
      </Styles.IconWrapper>
      <Styles.Title>Мы никого не нашли</Styles.Title>
      <Styles.Description>Попробуй скорректировать запрос</Styles.Description>
    </Styles.Container>
  )
}

export default NotFound
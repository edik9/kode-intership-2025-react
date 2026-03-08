import React from 'react'
import { GlassIcon } from '../../assets/icons'
import * as Styles from './NotFound.styles'
import { useTranslation } from 'react-i18next'

const NotFound: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Styles.Container>
      <Styles.IconWrapper>
        <GlassIcon />
      </Styles.IconWrapper>
      <Styles.Title>{t('noResults')}</Styles.Title>
      <Styles.Description>{t('noResultsDesc')}</Styles.Description>
    </Styles.Container>
  )
}

export default NotFound
import React from 'react'
import { NLOIcon } from '../../assets/icons';
import * as Styles from './ErrorScreen.styles'
import { useTranslation } from 'react-i18next';

interface ErrorScreenProps {
  onRetry: () => void;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({onRetry}) => {
  const {t} = useTranslation()
  return (
    <Styles.Container>
      <Styles.IconWrapper>
        <NLOIcon />
      </Styles.IconWrapper>
      <Styles.Title>{t('error')}</Styles.Title>
      <Styles.Description>{t('errorDesc')}</Styles.Description>
      <Styles.RetryButton onClick={onRetry}>{t('retry')}</Styles.RetryButton>
    </Styles.Container>
  )
}

export default ErrorScreen
import React from 'react'
import { NLOIcon } from '../../assets/icons';
import * as Styles from './ErrorScreen.styles'

interface ErrorScreenProps {
  onRetry: () => void;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({onRetry}) => {
  return (
    <Styles.Container>
      <Styles.IconWrapper>
        <NLOIcon />
      </Styles.IconWrapper>
      <Styles.Title>Какой-то сверхразум все сломал</Styles.Title>
      <Styles.Description>Постараемся быстро починить</Styles.Description>
      <Styles.RetryButton onClick={onRetry}>Попробовать снова</Styles.RetryButton>
    </Styles.Container>
  )
}

export default ErrorScreen
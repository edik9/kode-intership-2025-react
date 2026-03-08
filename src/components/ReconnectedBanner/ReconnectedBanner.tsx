import React from 'react';
import * as Styles from './ReconnectedBanner.style';
import { useTranslation } from 'react-i18next';

const OfflineBanner: React.FC = () => {
  const {t} = useTranslation()
  return (
    <Styles.Container>
      <Styles.Label>{t('search')}</Styles.Label>
      <Styles.Text>
        {t('reconnecting')}
      </Styles.Text>
    </Styles.Container>
  );
};

export default OfflineBanner;
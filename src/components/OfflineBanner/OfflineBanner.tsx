import React from 'react';
import * as Styles from './OfflineBanner.styles';
import { useTranslation } from 'react-i18next';

const OfflineBanner: React.FC = () => {
  const {t} = useTranslation()
  return (
    <Styles.Container>
      <Styles.Label>{t('search')}</Styles.Label>
      <Styles.Text>
        {t('offline')}
      </Styles.Text>
    </Styles.Container>
  );
};

export default OfflineBanner;
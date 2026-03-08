import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Styles from './LangSwitcher.styles';

const LangSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <Styles.Container>
      <Styles.LangButton 
        $active={i18n.language === 'ru'} 
        onClick={() => i18n.changeLanguage('ru')}
      >
        RU
      </Styles.LangButton>
      <Styles.LangButton 
        $active={i18n.language === 'en'} 
        onClick={() => i18n.changeLanguage('en')}
      >
        EN
      </Styles.LangButton>
    </Styles.Container>
  );
};

export default LangSwitcher;
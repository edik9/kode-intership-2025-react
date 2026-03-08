import React from 'react';
import * as Styles from './OfflineBanner.styles';

const OfflineBanner: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.Label>Поиск</Styles.Label>
      <Styles.Text>
        Не могу обновить данные. Проверь соединение с интернетом.
      </Styles.Text>
    </Styles.Container>
  );
};

export default OfflineBanner;
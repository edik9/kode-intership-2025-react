import React from 'react';
import * as Styles from './ReconnectedBanner.style';

const OfflineBanner: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.Label>Поиск</Styles.Label>
      <Styles.Text>
        Секундочку, гружусь...
      </Styles.Text>
    </Styles.Container>
  );
};

export default OfflineBanner;
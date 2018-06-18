import React from 'react';
import { Icon, Button } from 'antd';

import styles from './index.scss';

const PageTitle = props => {
  const { text, showButton, showIcon } = props;
  return (
    <div className={styles.conversation}>
      <div className={styles.alignItems}>
        {showIcon && (
          <div>
            <Icon type="profile" style={{ fontSize: 19, color: 'grey' }} />
          </div>
        )}

        <div style={{ color: 'rgb(139, 138, 138)', marginLeft: '10px' }}>{text}</div>
      </div>

      {showButton && (
        <div>
          <Button type="primary">Start Conversation</Button>
        </div>
      )}
    </div>
  );
};

PageTitle.defaultProps = {
  showIcon: false,
  showButton: false
};

export default PageTitle;

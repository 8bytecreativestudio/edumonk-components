import React from 'react';
import { Card, Avatar, Icon } from 'antd';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './index.scss';
import CardHeading from '../../atoms/CardHeading';
import P from '../../atoms/P';

const ChatHead = props => {
  const { name, message, className, onOptionsButtonClick, showOptionsButton, showAvatar } = props;

  return (
    <Card className={classnames(styles.card, className)}>
      <div className={styles.body}>
        {showAvatar && (
          <div>
            <Avatar icon="user" />
          </div>
        )}
        <div className={styles.midContent}>
          <CardHeading>{name}</CardHeading>
          <P>{message}</P>
        </div>
        {showOptionsButton && (
          <div className={styles.rightContent}>
            <Icon type="ellipsis" onClick={onOptionsButtonClick} />
          </div>
        )}
      </div>
    </Card>
  );
};

ChatHead.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string.isRequired,
  showAvatar: PropTypes.bool
};

ChatHead.defaultProps = {
  showOptionsButton: true,
  showAvatar: true
};

export default ChatHead;

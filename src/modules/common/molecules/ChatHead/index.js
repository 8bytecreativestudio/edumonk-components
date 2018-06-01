import React from 'react';
import { Avatar, Icon } from 'antd';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import CardUni from '../../../common/atoms/CardUni';

import styles from './index.scss';
import CardHeading from '../../atoms/CardHeading';
import P from '../../atoms/P';

const ChatHead = props => {
  const {
    name,
    message,
    userCard,
    cardWidth,
    onOptionsButtonClick,
    showOptionsButton,
    yesButton,
    noButton,
    showAvatar
  } = props;
  return (
    <CardUni card={styles.card} userCard={userCard} cardWidth={cardWidth}>
      <div className={styles.body}>
        {showAvatar && (
          <div>
            <Avatar icon="user" />
          </div>
        )}
        <div className={styles.midContent}>
          <CardHeading>{name}</CardHeading>
          <P>{message}</P>
          {yesButton && (
            <div style={{ color: 'red' }}>
              <button>yes</button>
            </div>
          )}
          {noButton && (
            <div>
              <button>No</button>
            </div>
          )}
        </div>
        {showOptionsButton && (
          <div className={styles.rightContent}>
            <Icon type="ellipsis" onClick={onOptionsButtonClick} />
          </div>
        )}
      </div>
    </CardUni>
  );
};

ChatHead.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string.isRequired,
  showAvatar: PropTypes.bool
};

ChatHead.defaultProps = {
  showOptionsButton: true,
  showAvatar: true,
  yesButton: false,
  noButton: false
};

export default ChatHead;

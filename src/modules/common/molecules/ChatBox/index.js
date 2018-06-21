import React from 'react';
import { Avatar, Icon } from 'antd';
import PropTypes from 'prop-types';
import CardUni from '../../atoms/CardUni';
import styles from './index.scss';
import CardHeading from '../../atoms/CardHeading';
import P from '../../atoms/P';

const ChatBox = ({ name, message, showEllipsis, onClick, userCard, customCardHeading, cardWidth, showAvatar }) => {
  return (
    <CardUni card={styles.card} userCard={userCard} cardWidth={cardWidth}>
      <div className={styles.body}>
        {showAvatar && (
          <div>
            <Avatar icon="user" />
          </div>
        )}
        <div className={styles.midContent}>
          <CardHeading className={customCardHeading}>{name}</CardHeading>
          <P>{message}</P>
        </div>
        {showEllipsis && (
          <div className={styles.rightContent}>
            <Icon type="ellipsis" onClick={onClick} />
          </div>
        )}
      </div>
    </CardUni>
  );
};

ChatBox.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string.isRequired,
  showAvatar: PropTypes.bool,
  showEllipsis: PropTypes.bool,
  onClick: PropTypes.bool,
  cardWidth: PropTypes.string,
  customCardHeading: PropTypes.string,
  userCard: PropTypes.string
};

ChatBox.defaultProps = {
  showOptionsButton: true,
  showAvatar: true,
  showEllipsis: false
};

export default ChatBox;

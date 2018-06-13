import React from 'react';
import 'antd/dist/antd.css';
import { Avatar, Button } from 'antd';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CardUni from '../../../common/atoms/CardUni';

import styles from './index.scss';
import CardHeading from '../../atoms/CardHeading';
import ProfileInfo from '../ProfileInfo';
import P from '../../atoms/P';
import Tag from '../../atoms/Tag';

const ChatHead = ({
  children,
  name,
  message,
  userCard,
  customCardHeading,
  cardWidth,
  displayTag,
  status,
  styleTag,
  displayClock,
  timeFont,
  YesNoButton,
  infoFooter,
  showAvatar,
  info
}) => {
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
          {displayTag && (
            <span>
              <Tag text={status} styleTag={styleTag} />
            </span>
          )}
          <P className={classnames(styles.greyP, timeFont)} displayClock={displayClock}>
            {message}
          </P>
          {YesNoButton && (
            <div style={{ marginTop: '0.60625rem' }}>
              <Button style={{ width: '7.5rem', marginRight: '0.6875rem' }} type="primary">
                YES
              </Button>
              <Button style={{ backgroundColor: 'red', width: '7.5rem', borderColor: 'red', color: 'white' }}>
                NO
              </Button>
            </div>
          )}
        </div>
        <div className={styles.rightContent}>{children}</div>
      </div>
      {infoFooter && (
        <div>
          <ProfileInfo name="Activities Details" info={info} />
        </div>
      )}
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
  YesNoButton: false,
  infoFooter: false,
  displayTag: false
};

export default ChatHead;

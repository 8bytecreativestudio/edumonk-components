import React from 'react';
import { Avatar, Button } from 'antd';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CardUni from '../../atoms/CardUni';
import ProfileInfo from '../../molecules/ProfileInfo';
import styles from './index.scss';
import CardHeading from '../../atoms/CardHeading';
import P from '../../atoms/P';
import Tag from '../../atoms/Tag';

const ActivityCard = ({
  children,
  name,
  message,
  userCard,
  customCardHeading,
  cardWidth,
  displayTag,
  status,
  styleTag,
  color,
  displayClock,
  timeFont,
  YesNoButton,
  infoFooter,
  info
}) => {
  return (
    <CardUni card={styles.card} userCard={userCard} cardWidth={cardWidth}>
      <div className={styles.body}>
        <div>
          <Avatar icon="user" />
        </div>
        <div className={styles.midContent}>
          <CardHeading className={customCardHeading}>{name}</CardHeading>
          {displayTag && (
            <span>
              <Tag color={color} text={status} styleTag={styleTag} />
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

ActivityCard.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string.isRequired
};

ActivityCard.defaultProps = {
  showOptionsButton: true,
  YesNoButton: false,
  infoFooter: false,
  displayTag: false
};

export default ActivityCard;

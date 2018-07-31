import React from 'react';
import { Avatar, Button } from 'antd';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Card from '../../atoms/Card';
import ProfileInfo from '../../molecules/ProfileInfo';
import GeneralInfo from '../../molecules/GeneralInfo';
import styles from './index.scss';
import CardHeading from '../../atoms/CardHeading';
import P from '../../atoms/P';
import Tag from '../../atoms/Tag';

const ActivityCard = ({
  children,
  showAvatar,
  name,
  message,
  userCard,
  customCardHeading,
  cardWidth,
  displayTag,
  className,
  status,
  color,
  displayClock,
  timeFont,
  YesNoButton,
  infoFooter,
  infoPara,
  footerTopic,
  infoParaContent,
  info
}) => {
  return (
    <Card card={styles.card} userCard={userCard} cardWidth={cardWidth}>
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
              <Tag color={color} text={status} className={className} />
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
        <div className={styles.infoFooter}>
          <ProfileInfo name={footerTopic} info={info} />
        </div>
      )}
      {infoPara && (
        <div className={styles.infoFooter}>
          <GeneralInfo footerTopic={footerTopic} infoParaContent={infoParaContent} />
        </div>
      )}
    </Card>
  );
};

ActivityCard.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string.isRequired
};

ActivityCard.defaultProps = {
  showOptionsButton: true,
  showAvatar: true,
  YesNoButton: false,
  infoFooter: false,
  displayTag: false
};

export default ActivityCard;

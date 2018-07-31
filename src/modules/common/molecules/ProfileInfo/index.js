import React from 'react';
import classnames from 'classnames';
import CardHeading from '../../atoms/CardHeading';
import styles from './index.scss';

const ProfileInfo = ({ name, info, className }) => {
  return (
    <div className={classnames(styles.info, className)}>
      <div className={styles.hr} />
      <CardHeading className={styles.info__name}>{name}</CardHeading>
      <div className={styles.info__content}>
        <div className={styles.info__content__left}>
          {Object.keys(info[0]).map((val, index) => <p key={index}>{val}</p>)}
        </div>
        <div className={styles.info__content__right}>
          {Object.keys(info[0]).map((val, index) => <p key={index}>{info[0][val]}</p>)}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

import React from 'react';
import classnames from 'classnames';
import CardHeading from '../../atoms/CardHeading';
import styles from './index.scss';

const GeneralInfo = ({ footerTopic, infoParaContent, className }) => {
  return (
    <div className={classnames(styles.content, className)}>
      <div className={styles.hr} />
      <div className={styles.text}>
        <CardHeading className={styles.content__name}>{footerTopic}</CardHeading>
        <div className={styles.content__notice}>{infoParaContent}</div>
      </div>
    </div>
  );
};

export default GeneralInfo;

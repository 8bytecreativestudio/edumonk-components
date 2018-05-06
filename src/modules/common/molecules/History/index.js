import React from 'react';
import { Card, Avatar, Tag, Icon } from 'antd';
// import classnames from 'classnames';

import styles from './index.scss';
import CardHeading from '../../atoms/CardHeading';
import P from '../../atoms/P';

const History = props => {
  const { name, message } = props;

  return (
    <Card className={styles.card}>
      <div className={styles.body}>
        <div>
          <Avatar size="small" icon="user" />
        </div>

        <div className={styles.midContent}>
          <div className={styles.toInline}>
            <div className={styles.name}>
              <CardHeading className={styles.name}>{name}</CardHeading>
            </div>
            <div>
              <Tag color="#f50">PARENT</Tag>
            </div>
          </div>
          <P>{message}</P>
        </div>
        <div className={styles.time}>
          <Icon type="clock-circle-o" />
          <span>20 minutes ago</span>
        </div>
      </div>
    </Card>
  );
};

export default History;

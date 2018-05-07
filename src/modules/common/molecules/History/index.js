import React from 'react';
import { Card, Avatar, Icon } from 'antd';
// import classnames from 'classnames';

import styles from './index.scss';
import CardHeading from '../../atoms/CardHeading';
import Tag from '../../atoms/Tag';
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
              <Tag text={'PARENT'} />
              {/* <Tag style={{padding:"2px",borderRadius:"25px"}} color="#ff5b6f">PARENT</Tag> */}
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

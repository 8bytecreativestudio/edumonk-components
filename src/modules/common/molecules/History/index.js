import React from 'react';
import { Avatar, Icon, Radio } from 'antd';
import Card from '../../atoms/Card';
import styles from './index.scss';
import CardHeading from '../../atoms/CardHeading';
import Tag from '../../atoms/Tag';
import P from '../../atoms/P';

const History = props => {
  const { name, time, message, showTime, showRadioButton, status } = props;

  return (
    <Card card={styles.card}>
      <div className={styles.body}>
        <div>
          <Avatar size="small" icon="user" />
        </div>

        <div className={styles.midContent}>
          <div className={styles.toInline}>
            <div className={styles.name}>
              <CardHeading className={styles.name}>{name}</CardHeading>
            </div>
            <div style={{ position: 'relative', top: '-0.125rem' }}>
              <Tag color="#ff5b6f" text={status} />
            </div>
          </div>
          <P className={styles.greyP}>{message}</P>
        </div>
        {showRadioButton && (
          <div className={styles.radioButton}>
            <Radio checked={true} />
          </div>
        )}
      </div>
      {showTime && (
        <div className={styles.time}>
          <Icon type="clock-circle-o" />
          <span style={{ marginLeft: '0.3rem' }}>{time}</span>
        </div>
      )}
    </Card>
  );
};

History.defaultProps = {
  showTime: false,
  radioButton: false
};

export default History;

import React from 'react';
import { Card, Avatar, Icon, Radio } from 'antd';
import classnames from 'classnames';

import styles from './index.scss';
import CardHeading from '../../atoms/CardHeading';
import Tag from '../../atoms/Tag';
import P from '../../atoms/P';

const History = props => {
  const { name, time, message, className, midContentClassName, completeTag, showTime, radioButton, status } = props;

  return (
    <Card className={classnames(styles.card, className, showTime, radioButton)}>
      <div className={styles.body}>
        <div>
          <Avatar size="small" icon="user" />
        </div>

        <div className={classnames(styles.midContent, midContentClassName)}>
          <div className={styles.toInline}>
            <div className={styles.name}>
              <CardHeading className={styles.name}>{name}</CardHeading>
            </div>
            <div>
              <Tag text={status} completeTag={completeTag} />
            </div>
          </div>
          <P>{message}</P>
        </div>
        {radioButton && (
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

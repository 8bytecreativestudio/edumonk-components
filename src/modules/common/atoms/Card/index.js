import React from 'react';
import classnames from 'classnames';
import { Card as AntCard } from 'antd';

const Card = ({ children, card, userCard, cardWidth }) => {
  return (
    <AntCard className={classnames(card, userCard, cardWidth)}>
      {/* <div>{header}</div> */}
      <div>{children}</div>
      {/* <div>{footer}</div> */}
    </AntCard>
  );
};

export default Card;

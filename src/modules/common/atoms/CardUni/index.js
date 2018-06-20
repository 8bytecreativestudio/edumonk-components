import React from 'react';
import classnames from 'classnames';
import { Card } from 'antd';

const CardUni = ({ children, card, userCard, cardWidth, apple }) => {
  return (
    <Card className={classnames(card, userCard, cardWidth, apple)}>
      {/* <div>{header}</div> */}
      <div>{children}</div>
      {/* <div>{footer}</div> */}
    </Card>
  );
};

export default CardUni;

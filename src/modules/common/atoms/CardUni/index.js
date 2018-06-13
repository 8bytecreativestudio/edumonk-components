import React from 'react';
import 'antd/dist/antd.css';
import classnames from 'classnames';
import { Card } from 'antd';

const CardUni = ({ children, card, userCard, cardWidth }) => {
  return (
    <Card className={classnames(card, userCard, cardWidth)}>
      {/* <div>{header}</div> */}
      <div>{children}</div>
      {/* <div>{footer}</div> */}
    </Card>
  );
};

export default CardUni;

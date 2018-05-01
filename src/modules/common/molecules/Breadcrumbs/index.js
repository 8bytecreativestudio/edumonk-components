import React from 'react';
import Breadcrumb from 'antd/lib/breadcrumb';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ style, navItems }) => (
  <Breadcrumb style={style}>
    {navItems.map(({ to, label }, counter) => (
      <Breadcrumb.Item key={counter}>{to ? <Link to={to}>{label}</Link> : label}</Breadcrumb.Item>
    ))}
  </Breadcrumb>
);

Breadcrumbs.defaultProps = {
  navItems: []
};

export default Breadcrumbs;

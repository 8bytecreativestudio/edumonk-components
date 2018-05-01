import React from 'react';
import { Layout } from 'antd';
import Link from 'react-router-dom/Link';

import styles from './index.scss';
import logo from './logo.svg';

const { Sider } = Layout;

class CustomSider extends React.PureComponent {
  render() {
    const { collapsed } = this.props;

    return (
      <Sider
        trigger={null}
        collapsible
        style={{ padding: '16px 0', width: '100%' }}
        collapsed={collapsed}
        breakpoint="md"
        onCollapse={this.onCollapse}
        width={256}
        className={styles.sider}
      >
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
            <h1>EduMonk Pro+</h1>
          </Link>
        </div>
      </Sider>
    );
  }
}

export default CustomSider;

import React from 'react';
import { Layout } from 'antd';
import Sider from '../Sider';
import Breadcrumb from '../../molecules/Breadcrumbs';

const { Content } = Layout;

class PageLayout extends React.PureComponent {
  state = {
    collapsed: false
  };

  render() {
    const { children, breadcrumbs } = this.props;
    const { collapsed } = this.state;

    return (
      <Layout>
        <Sider collapsed={collapsed} setCollapsed={this.setCollapsed} />
        <Content>
          <Breadcrumb style={{ padding: '1rem', backgroundColor: 'white' }} navItems={breadcrumbs} />
          <div>{children}</div>
        </Content>
      </Layout>
    );
  }
}

export default PageLayout;

import React from 'react';
import 'antd/dist/antd.css';
import { Icon, Button } from 'antd';
import styles from './index.scss';
import Layout from '../../../common/organisms/Layout';
import Header from '../../../common/molecules/Header';
import PageTitle from '../../../common/molecules/PageTitle';

class ConvEmptyO extends React.Component {
  state = {
    text: '',
    search: ''
  };
  updateText = text => {
    this.setState({ text });
  };
  searchText = search => {
    this.setState({ search });
  };
  render() {
    const breadcrumbs = [
      {
        label: 'Dashboard'
      },
      {
        to: '/institutions',
        label: 'ConvEmptyO'
      }
    ];
    return (
      <Layout breadcrumbs={breadcrumbs}>
        <div className={styles.one}>
          <Header />
          <PageTitle text="Conversations" />
          <div className={styles.mainBody}>
            <div className={styles.conversationPanel}>
              <div>
                <Icon type="usergroup-add" style={{ fontSize: 56, color: '#dadada' }} />
              </div>
              <div className={styles.text}>
                <span>
                  There hasnt been any <br /> conversation yet
                </span>
              </div>
              <div className={styles.button}>
                <Button type="primary">Start conversation</Button>
              </div>
              <div className={styles.icon}>
                <Icon type="plus-circle" style={{ fontSize: 56, color: '#08c' }} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ConvEmptyO;

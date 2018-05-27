import React from 'react';
import 'antd/dist/antd.css';
import { Icon } from 'antd';
import styles from './index.scss';
import Layout from '../../../common/organisms/Layout';
import Header from '../../../common/molecules/Header';
import PageTitle from '../../../common/molecules/PageTitle';

class ActivitiesEmpty extends React.Component {
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
        label: 'ActivitiesEmpty'
      }
    ];
    return (
      <Layout breadcrumbs={breadcrumbs}>
        <div className={styles.one}>
          <Header />
          <PageTitle text="Conversations" showIcon="true" />
          <div className={styles.mainBody}>
            <div>
              <Icon type="check" style={{ fontSize: '50px' }} />
            </div>
            <div>
              Great!<br />You have recorded all the <br /> activities for today!
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ActivitiesEmpty;

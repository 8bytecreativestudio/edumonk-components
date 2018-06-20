import React from 'react';
import { Icon } from 'antd';
import styles from './index.scss';
import Layout from '../../../common/organisms/Layout';
import Header from '../../../common/molecules/Header';
import PageTitle from '../../../common/molecules/PageTitle';
import History from '../../../common/molecules/History';

class ActivitiesHome extends React.Component {
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
        label: 'ActivitiesHome'
      }
    ];
    return (
      <Layout breadcrumbs={breadcrumbs}>
        <div className={styles.one}>
          <Header />
          <PageTitle text="Activities" showIcon="true" />
          <div className={styles.mainBody}>
            <History
              status="COMPLETE"
              className={styles.historyCard}
              name="Gopal Rimal"
              message="class 1"
              time="Last updated 45 minutes ago"
              showTime={true}
            />
            <History
              status="COMPLETE"
              className={styles.historyCard}
              name="Gopal Rimal"
              message="lower kindergarten"
              time="Last updated 45 minutes ago"
              showTime={true}
            />
            <History
              status="NOT STARTED"
              className={styles.historyCard}
              name="Gopal Rimal"
              message="upper kindergarten"
              time="Last updated 45 minutes ago"
              showTime={true}
              completeTag={styles.completeTag}
            />
            <div className={styles.plusIcon}>
              <Icon type="plus-circle" style={{ fontSize: 40, color: '#08c', backgroundColor: '#eed' }} />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ActivitiesHome;

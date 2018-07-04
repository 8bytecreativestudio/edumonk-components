import React from 'react';
import { Icon, Tabs } from 'antd';
import styles from './index.scss';
import Layout from '../../../common/organisms/Layout';
import Header from '../../../common/molecules/Header';
import PageTitle from '../../../common/molecules/PageTitle';
import ActivityCard from '../../../common/molecules/ActivityCard';
import CardHeading from '../../../common/atoms/CardHeading';
import Card from '../../../common/atoms/Card';

import TabGroup from '../../../common/molecules/TabGroup';
import Tag from '../../../common/atoms/Tag';

const { TabPane } = Tabs;
class ProfileDevices extends React.Component {
  state = {
    text: '',
    search: '',
    info: [
      {
        'Address:': 'Patan',
        'mob:': '9843135754',
        'Tel:': '012343543',
        'e-mail:': 'kabirpokharel12@gmail11111111111111111111111111111111111111.com'
      },
      { name: 'Hari Sharma', displayTag: true, time: 'Active 2 hours ago' }
    ]
  };
  updateText = text => {
    this.setState({ text });
  };
  searchText = search => {
    this.setState({ search });
  };

  additionalAccount = () => {
    return;
  };
  render() {
    const breadcrumbs = [
      {
        label: 'Dashboard'
      },
      {
        to: '/institutions',
        label: 'ProfileDevices'
      }
    ];
    return (
      <Layout breadcrumbs={breadcrumbs}>
        <div className={styles.one}>
          <Header />
          <PageTitle text="Dashboard" showIcon="true" />
          <div className={styles.mainBody}>
            <ActivityCard
              name={this.state.info[1].name}
              status="PARENT"
              className={styles.styleTag}
              message={this.state.info[1].time}
              displayClock={true}
              info={this.state.info}
              infoFooter={true}
              displayTag={this.state.info[1].displayTag}
              color="#ff5b6f"
            />
            <div className={styles.tabs}>
              <Tabs defaultActiveKey="3">
                <TabPane tab={<span>Children</span>} key="1">
                  <TabGroup>
                    <ActivityCard name="Bipin Bhandari" message={this.state.info[1].time} />
                  </TabGroup>
                </TabPane>
                <TabPane tab={<span>Link</span>} key="2">
                  <TabGroup>
                    <CardHeading className={styles.cardHeading}>Link</CardHeading>
                    <ActivityCard
                      name="XL4521DF"
                      message="Link Token"
                      displayTag={true}
                      status="PENDING"
                      className={styles.styleTag}
                      color="#4a90e2"
                    >
                      <Icon type="ellipsis" />
                    </ActivityCard>
                    <ActivityCard
                      name={this.state.info[1].name}
                      message="Kindergarten II"
                      displayTag={true}
                      status="ACTIVE"
                      className={styles.styleTag}
                      color="#2ecc71"
                    />
                    <Card card={styles.card}>
                      <div className={styles.linkAdditional} onClick={this.additionalAccount}>
                        + Link additional account
                      </div>
                    </Card>
                  </TabGroup>
                </TabPane>
                <TabPane tab={<span>Devices</span>} key="3">
                  <TabGroup>
                    <CardHeading className={styles.cardHeading}>Devices</CardHeading>
                    <ActivityCard
                      name="Bipin Bhandari"
                      message={this.state.info[1].time}
                      displayClock={true}
                      displayTag={true}
                      status="PENDING"
                      className={styles.styleTag}
                      color="#4a90e2"
                    >
                      <Icon type="ellipsis" />
                    </ActivityCard>
                  </TabGroup>
                </TabPane>
                <TabPane tab={<span>Activities</span>} key="4">
                  <TabGroup>
                    <CardHeading className={styles.cardHeading}>Activities</CardHeading>
                    <ActivityCard name="Bipin Bhandari" displayClock={true} message={this.state.info[1].time}>
                      <Tag text="LOGIN" color="#4a90e2" />
                    </ActivityCard>
                    <ActivityCard name="Ram Sharma" displayClock={true} message={this.state.info[1].time}>
                      <Tag text="MOMENT" color="#4a90e2" />
                    </ActivityCard>
                  </TabGroup>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ProfileDevices;

import React from 'react';
import { Tabs, Button } from 'antd';
import styles from './index.scss';
import Layout from '../../../common/organisms/Layout';
import Header from '../../../common/molecules/Header';
import PageTitle from '../../../common/molecules/PageTitle';
import ActivityCard from '../../../common/molecules/ActivityCard';
import CardHeading from '../../../common/atoms/CardHeading';

import TabGroup from '../../../common/molecules/TabGroup';
import Tag from '../../../common/atoms/Tag';

const { TabPane } = Tabs;
class ProfileActivities extends React.Component {
  state = {
    text: '',
    search: '',
    time: 'Active 2 hours ago',
    info: [
      {
        Address: 'Patan',
        'Primary Phone Number': '9843135754',
        'Landline Number': '012343543',
        'Email Address': 'kabirpokharel12@gmail.com'
      }
    ]
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
        label: 'ProfileActivities'
      }
    ];
    return (
      <Layout breadcrumbs={breadcrumbs}>
        <div className={styles.one}>
          <Header />
          <PageTitle text="Dashboard" showIcon="true" />
          <div className={styles.mainBody}>
            <ActivityCard
              cardWidth={styles.cardWidth}
              name="Bipin Bhandari"
              tag="PARENT"
              message={this.state.time}
              info={this.state.info}
              infoFooter={true}
            />

            <div className={styles.tabs}>
              <Tabs defaultActiveKey="4">
                <TabPane
                  tab={
                    <span>
                      <Button>Children</Button>
                    </span>
                  }
                  key="1"
                >
                  <TabGroup>
                    <ActivityCard cardWidth={styles.cardWidth} name="Bipin Bhandari" message={this.state.time} />
                  </TabGroup>
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <Button>Link</Button>
                    </span>
                  }
                  key="2"
                >
                  <TabGroup>
                    <ActivityCard
                      cardWidth={styles.cardWidth}
                      name="Hari Sharma"
                      message={this.state.time}
                      timeFont={styles.timeFont}
                    />
                  </TabGroup>
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <Button>Devices</Button>
                    </span>
                  }
                  key="3"
                >
                  <TabGroup>
                    <ActivityCard cardWidth={styles.cardWidth} name="Bipin Bhandari" message={this.state.time} />
                  </TabGroup>
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <Button>Activities</Button>
                    </span>
                  }
                  key="4"
                >
                  <TabGroup>
                    <CardHeading className={styles.cardHeading}>Activities</CardHeading>
                    <ActivityCard
                      cardWidth={styles.cardWidth}
                      name="Bipin Bhandari"
                      displayClock={true}
                      message={this.state.time}
                    >
                      <Tag text="LOGIN" styleTag={styles.styleTag} />
                    </ActivityCard>
                    <ActivityCard
                      cardWidth={styles.cardWidth}
                      name="Ram Sharma"
                      displayClock={true}
                      message={this.state.time}
                    >
                      <Tag text="MOMENT" styleTag={styles.styleTag} />
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

export default ProfileActivities;

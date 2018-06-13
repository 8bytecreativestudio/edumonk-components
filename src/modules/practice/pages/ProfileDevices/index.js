import React from 'react';
import 'antd/dist/antd.css';
import { Icon, Tabs } from 'antd';
import styles from './index.scss';
import Layout from '../../../common/organisms/Layout';
import Header from '../../../common/molecules/Header';
import PageTitle from '../../../common/molecules/PageTitle';
import ChatHead from '../../../common/molecules/ChatHead';
import CardHeading from '../../../common/atoms/CardHeading';
import CardUni from '../../../common/atoms/CardUni';

import TabGroup from '../../../common/molecules/TabGroup';
import Tag from '../../../common/atoms/Tag';

const { TabPane } = Tabs;
class ProfileDevices extends React.Component {
  state = {
    text: '',
    search: '',
    info: [
      {
        Address: 'Patan',
        'Primary Phone Number': '9843135754',
        'Landline Number': '012343543',
        'Email Address': 'kabirpokharel12@gmail.com'
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
  activitiesClicked = () => {
    let x = this.state.info;
    x[0].Address = 'Biratnagar';
    x[0]['Primary Phone Number'] = '12345678765432';
    x[0]['Landline Number'] = '999999999999';
    x[0]['Email Address'] = 'Haribadhur###@gmail.com';
    x[1].name = 'kabir pokharel';
    x[1].displayTag = false;
    x[1].time = 'Active 2 minutes ago';
    this.setState({ info: x });
  };
  devicesClicked = () => {
    let x = this.state.info;
    x[0].Address = 'Patan';
    x[0]['Primary Phone Number'] = '9843135754';
    x[0]['Landline Number'] = '012343543';
    x[0]['Email Address'] = 'kabirpokharel12@gmail.com';
    x[1].name = 'Hari Sharma';
    x[1].displayTag = true;
    x[1].time = 'Active 25 minutes ago';
    this.setState({ info: x });
  };
  linkClicked = () => {
    let x = this.state.info;
    x[0].Address = 'Okhaldhunga';
    x[0]['Primary Phone Number'] = '98431357***';
    x[0]['Landline Number'] = '01654323456';
    x[0]['Email Address'] = 'sdfghgfdsadfg@gmail.com';
    x[1].name = 'Ram Prasad Aryal';
    x[1].displayTag = true;
    x[1].time = 'Active 5 minutes ago';
    this.setState({ info: x });
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
            <ChatHead
              name={this.state.info[1].name}
              status="PARENT"
              message={this.state.info[1].time}
              info={this.state.info}
              infoFooter={true}
              displayTag={this.state.info[1].displayTag}
              styleTag={styles.cardHeadingtagPink}
            />

            <div className={styles.tabs}>
              <Tabs defaultActiveKey="3">
                <TabPane tab={<span>Children</span>} key="1">
                  <TabGroup>
                    <ChatHead name="Bipin Bhandari" message={this.state.info[1].time} />
                  </TabGroup>
                </TabPane>
                <TabPane tab={<span onClick={this.linkClicked}>Link</span>} key="2">
                  <TabGroup>
                    <CardHeading className={styles.cardHeading}>Link</CardHeading>
                    <ChatHead
                      name="XL4521DF"
                      message="Link Token"
                      displayTag={true}
                      status="PENDING"
                      styleTag={styles.cardHeadingtagBlue}
                    >
                      <Icon type="ellipsis" />
                    </ChatHead>
                    <ChatHead
                      name={this.state.info[1].name}
                      message="Kindergarten II"
                      displayTag={true}
                      status="ACTIVE"
                      styleTag={styles.cardHeadingtagGreen}
                    />
                    <CardUni card={styles.card}>
                      <div>+ Link additional account</div>
                    </CardUni>
                  </TabGroup>
                </TabPane>
                <TabPane tab={<span onClick={this.devicesClicked}>Devices</span>} key="3">
                  <TabGroup>
                    <CardHeading className={styles.cardHeading}>Devices</CardHeading>
                    <ChatHead
                      name="Bipin Bhandari"
                      message={this.state.info[1].time}
                      displayTag={true}
                      status="PENDING"
                      styleTag={styles.cardHeadingtagBlue}
                    >
                      <Icon type="ellipsis" />
                    </ChatHead>
                  </TabGroup>
                </TabPane>
                <TabPane tab={<span onClick={this.activitiesClicked}>Activities</span>} key="4">
                  <TabGroup>
                    <CardHeading className={styles.cardHeading}>Activities</CardHeading>
                    <ChatHead name="Bipin Bhandari" displayClock={true} message={this.state.info[1].time}>
                      <Tag text="LOGIN" styleTag={styles.styleTagBlue} />
                    </ChatHead>
                    <ChatHead name="Ram Sharma" displayClock={true} message={this.state.info[1].time}>
                      <Tag text="MOMENT" styleTag={styles.styleTagBlue} />
                    </ChatHead>
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

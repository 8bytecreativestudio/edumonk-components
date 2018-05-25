import React from 'react';
import 'antd/dist/antd.css';
import { Icon, Button } from 'antd';
import Layout from '../../../common/organisms/Layout';
import Header from '../../../common/molecules/Header';
import PageTitle from '../../../common/molecules/PageTitle';
import InputBox from '../../../common/atoms/InputBox';
import styles from './index.scss';

class ConvWebEmpty extends React.Component {
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
        label: 'second Page'
      }
    ];
    return (
      <Layout breadcrumbs={breadcrumbs}>
        <div className={styles.one}>
          <Header />
          <PageTitle showButton={true} />
          <div className={styles.mainBody}>
            <div className={styles.leftPanel}>
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
            </div>
            <div className={styles.rightPanel}>
              <div className={styles.chatBody}>
                <div className={styles.bufferZone} />
              </div>

              <div className={styles.chatInput}>
                <div className={styles.inputBox}>
                  <InputBox value={this.state.text} onChange={this.updateText} />
                </div>
                <div className={styles.button}>
                  <Button type="primary" shape="circle" icon="play-circle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ConvWebEmpty;

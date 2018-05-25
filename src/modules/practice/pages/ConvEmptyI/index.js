import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import Layout from '../../../common/organisms/Layout';
import InputBox from '../../../common/atoms/InputBox';
import Header from '../../../common/molecules/Header';
import History from '../../../common/molecules/History';
import PageTitle from '../../../common/molecules/PageTitle';
import styles from './index.scss';

class ConvEmptyI extends React.Component {
  state = {
    text: ' '
  };
  updateText = updated => {
    this.setState({ text: updated });
  };
  render() {
    const breadcrumbs = [
      {
        label: 'Dashboard'
      },
      {
        to: '/institutions',
        label: 'Chats Page'
      }
    ];
    return (
      <Layout breadcrumbs={breadcrumbs}>
        <div className={styles.one}>
          <Header />
          <PageTitle showIcon={true} text="Conversations" />
          <div className={styles.chatBody}>
            <div className={styles.conversationPanel}>
              <History
                status="PARENT"
                name="Hari Aryal"
                message="a quick brown fox jumped"
                time="45 minutes ago"
                showTime={true}
              />
            </div>
          </div>
          <div className={styles.bufferZone} />
          <div className={styles.chatInput}>
            <div className={styles.inputBox}>
              <InputBox value={this.state.text} onChange={this.updateText} />
            </div>
            <div className={styles.button}>
              <Button type="primary" shape="circle" icon="play-circle" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ConvEmptyI;

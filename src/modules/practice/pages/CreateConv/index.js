import React from 'react';
import { Button, Input } from 'antd';
import Layout from '../../../common/organisms/Layout';
import Header from '../../../common/molecules/Header';
import History from '../../../common/molecules/History';
import PageTitle from '../../../common/molecules/PageTitle';
import styles from './index.scss';

const Search = Input.Search;
class CreateConv extends React.Component {
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
              <Search
                placeholder="search conversation"
                onChange={e => this.searchText(e.target.value)}
                style={{ padding: '0.3rem', width: '100%' }}
              />
              <History status="PARENT" name="Hari Aryal" message="a quick brown fox jumped" radioButton={true} />
              <History status="PARENT" name="Ram Poudel" message="a quick brown jumped" radioButton={true} />
              <History status="PARENT" name="Hari Aryal" message="a quick brown fox jumped" radioButton={true} />
              <History status="PARENT" name="Ram Poudel" message="a quick brown jumped" radioButton={true} />
              <History status="PARENT" name="Hari Aryal" message="a quick brown fox jumped" radioButton={true} />
              <History status="PARENT" name="Ram Poudel" message="a quick brown jumped" radioButton={true} />
            </div>
          </div>
          <div className={styles.bufferZone} />
          <div className={styles.button}>
            <div>
              <Button type="primary">Start Conversation</Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default CreateConv;

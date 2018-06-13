import React from 'react';
import 'antd/dist/antd.css';
import { Button, Input, Icon } from 'antd';
import Layout from '../../../common/organisms/Layout';
import ChatHead from '../../../common/molecules/ChatHead';
import History from '../../../common/molecules/History';
import Header from '../../../common/molecules/Header';
import PageTitle from '../../../common/molecules/PageTitle';
import InputBox from '../../../common/atoms/InputBox';

import styles from './index.scss';

const Search = Input.Search;

class SecondPage extends React.Component {
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
  onclickEllipsis = () => {
    return;
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
            <div className={styles.conversationPanel}>
              <Search
                placeholder="search conversation"
                onChange={e => this.searchText(e.target.value)}
                style={{ padding: '0.3rem', width: '100%' }}
              />
              <History
                status="PARENT"
                className={styles.historyCard}
                name="Hari Aryal"
                message="a quick brown fox jumped"
                time="20 minutes ago"
                showTime={true}
              />
              <History
                status="PARENT"
                className={styles.historyCard}
                name="Ram Poudel"
                message="a quick brown jumped"
                time="10 minutes ago"
                showTime={true}
              />
              <History
                status="PARENT"
                className={styles.historyCard}
                name="Gopal Rimal"
                message="a quick brown"
                time="45 minutes ago"
                showTime={true}
              />
              <History
                status="PARENT"
                className={styles.historyCard}
                name="Dharmaraj Prasad Pandey"
                message="a quick brown fox jumped over the lazy dog"
                time="22 minutes ago"
                showTime={true}
              />
            </div>
            <div>
              <div className={styles.chatBody}>
                <ChatHead
                  cardWidth={styles.cardWidth}
                  name="Bipin Bhandari"
                  message=" Base Camp on ay 18. I twill be 10 days trek and we will return by 201233."
                >
                  <Icon type="ellipsis" onClick={this.onclickEllipsis} />
                </ChatHead>
                <ChatHead
                  cardWidth={styles.cardWidth}
                  message="sdfkajsodk sdlfjas df sf alf sf s ff sdfjsdlkf f sadf sdf sd sdjfsldfkj sdf sdf sdf sdjffdf asdfjasd"
                  showOptionsButton={false}
                  showAvatar={false}
                  userCard={styles.userCard}
                />
                <ChatHead
                  cardWidth={styles.cardWidth}
                  message="sdfkajsodk sdlfjas df sf alf sf s ff sdfjsdlkf f sadf sdf sd sdjfsldfkj sdf sdf sdf sdjffdf asdfjasd"
                  showOptionsButton={false}
                  showAvatar={false}
                  userCard={styles.userCard}
                />
                <ChatHead
                  cardWidth={styles.cardWidth}
                  name="Bipin Bhandari"
                  message=" Base Camp on ay 18. I twill be 10 days trek and we will return by 201233."
                >
                  <Icon type="ellipsis" onClick={this.onclickEllipsis} />
                </ChatHead>
                <ChatHead
                  cardWidth={styles.cardWidth}
                  name="Bipin Bhandari"
                  message=" Base Camp on ay 18. I twill be 10 days trek and we will return by 201233."
                >
                  <Icon type="ellipsis" onClick={this.onclickEllipsis} />
                </ChatHead>
                <ChatHead
                  cardWidth={styles.cardWidth}
                  message="sdfkajsodk sdlfjas df sf alf sf s ff sdfjsdlkf f sadf sdf sd sdjfsldfkj sdf sdf sdf sdjffdf asdfjasd"
                  showOptionsButton={false}
                  showAvatar={false}
                  userCard={styles.userCard}
                />
                <ChatHead
                  cardWidth={styles.cardWidth}
                  message="sdfkajsodk sdlfjas df sf alf sf s ff sdfjsdlkf f sadf sdf sd sdjfsldfkj sdf sdf sdf sdjffdf asdfjasd"
                  showOptionsButton={false}
                  showAvatar={false}
                  userCard={styles.userCard}
                />
                <ChatHead
                  cardWidth={styles.cardWidth}
                  name="Bipin Bhandari"
                  message=" Base Camp on ay 18. I twill be 10 days trek and we will return by 201233."
                >
                  <Icon type="ellipsis" onClick={this.onclickEllipsis} />
                </ChatHead>
                <ChatHead
                  cardWidth={styles.cardWidth}
                  message="sdfkajsodk sdlfjas df sf alf sf s ff sdfjsdlkf f sadf sdf sd sdjfsldfkj sdf sdf sdf sdjffdf asdfjasd"
                  showOptionsButton={false}
                  showAvatar={false}
                  userCard={styles.userCard}
                />
                <ChatHead cardWidth={styles.cardWidth} name="Bipin Bhandari" message=" Base Camp on ay 18.">
                  <Icon type="ellipsis" onClick={this.onclickEllipsis} />
                </ChatHead>
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

export default SecondPage;

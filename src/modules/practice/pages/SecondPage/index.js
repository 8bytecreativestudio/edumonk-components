import React from 'react';
import 'antd/dist/antd.css';
import { Icon, Avatar, Button } from 'antd';
// import classnames from 'classnames';
import Layout from '../../../common/organisms/Layout';
import ChatHead from '../../../common/molecules/ChatHead';
import History from '../../../common/molecules/History';
import InputBox from '../../../common/atoms/InputBox';
import styles from './index.scss';

class SecondPage extends React.Component {
  state = {
    text: ' ',
    search: ' '
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
          <div className={styles.header}>
            <div>
              <Icon type="menu-fold" style={{ fontSize: 30, color: 'green' }} />
            </div>
            <div>
              <Avatar icon="user" />
              <span className={styles.header_name}> Kabir Pokharel</span>
            </div>
          </div>
          <div className={styles.conversation}>
            <div>
              <Icon type="profile" style={{ fontSize: 30, color: 'orange' }} />
              <span style={{ fontSize: 18, color: 'rgb(139, 138, 138)' }}> Conversation</span>
            </div>
            <div>
              <Button type="primary">Start conversation</Button>
            </div>
          </div>
          <div className={styles.mainBody}>
            <div className={styles.conversationPanel}>
              <InputBox value={this.state.search} onChange={this.searchText} />
              <History className={styles.historyCard} name="Hari Aryal" message="a quick brown fox jumped" />
              <History className={styles.historyCard} name="Ram Poudel" message="a quick brown" />
              <History
                className={styles.historyCard}
                name="Dharmaraj Pandey"
                message="a quick brown fox jumped over the lazy dog"
              />
            </div>
            <div>
              <div className={styles.chatBody}>
                <ChatHead
                  name="Bipin Bhandari"
                  message=" Base Camp on ay 18. I twill be 10 days trek and we will return by 201233."
                />
                <ChatHead
                  message="sdfkajsodk sdlfjas df sf alf sf s ff sdfjsdlkf f sadf sdf sd sdjfsldfkj sdf sdf sdf sdjffdf asdfjasd"
                  showOptionsButton={false}
                  showAvatar={false}
                  className={styles.userCard}
                />
                <ChatHead
                  message="sdfkajsodk sdlfjas df sf alf sf s ff sdfjsdlkf f sadf sdf sd sdjfsldfkj sdf sdf sdf sdjffdf asdfjasd"
                  showOptionsButton={false}
                  showAvatar={false}
                  className={styles.userCard}
                />
                <ChatHead
                  name="Bipin Bhandari"
                  message=" Base Camp on ay 18. I twill be 10 days trek and we will return by 201233."
                />
                <ChatHead
                  name="Bipin Bhandari"
                  message=" Base Camp on ay 18. I twill be 10 days trek and we will return by 201233."
                />
                <ChatHead
                  message="sdfkajsodk sdlfjas df sf alf sf s ff sdfjsdlkf f sadf sdf sd sdjfsldfkj sdf sdf sdf sdjffdf asdfjasd"
                  showOptionsButton={false}
                  showAvatar={false}
                  className={styles.userCard}
                />
                <ChatHead
                  message="sdfkajsodk sdlfjas df sf alf sf s ff sdfjsdlkf f sadf sdf sd sdjfsldfkj sdf sdf sdf sdjffdf asdfjasd"
                  showOptionsButton={false}
                  showAvatar={false}
                  className={styles.userCard}
                />
                <ChatHead
                  name="Bipin Bhandari"
                  message=" Base Camp on ay 18. I twill be 10 days trek and we will return by 201233."
                />
                <ChatHead
                  message="sdfkajsodk sdlfjas df sf alf sf s ff sdfjsdlkf f sadf sdf sd sdjfsldfkj sdf sdf sdf sdjffdf asdfjasd"
                  showOptionsButton={false}
                  showAvatar={false}
                  className={styles.userCard}
                />
                <ChatHead name="Bipin Bhandari" message=" Base Camp on ay 18." />
                <div className={styles.bufferZone} />
              </div>

              <div className={styles.chatInput}>
                <div>
                  <InputBox value={this.state.text} onChange={this.updateText} />
                </div>
                <div>
                  <Icon type="caret-right" style={{ fontSize: 25, color: 'blue' }} />
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

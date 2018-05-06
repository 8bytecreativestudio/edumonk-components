import React from 'react';
import 'antd/dist/antd.css';
import { Icon } from 'antd';
// import classnames from 'classnames';
import Layout from '../../../common/organisms/Layout';
import ChatHead from '../../../common/molecules/ChatHead';
import InputBox from '../../../common/atoms/InputBox';
import styles from './index.scss';

class ChatsPage extends React.Component {
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
      </Layout>
    );
  }
}

export default ChatsPage;

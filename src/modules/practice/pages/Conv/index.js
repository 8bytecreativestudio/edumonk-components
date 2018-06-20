import React from 'react';
import { Button } from 'antd';
import Layout from '../../../common/organisms/Layout';
import ChatBox from '../../../common/molecules/ChatBox';
import InputBox from '../../../common/atoms/InputBox';
import Header from '../../../common/molecules/Header';
import PageTitle from '../../../common/molecules/PageTitle';
import styles from './index.scss';

class Conv extends React.Component {
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
          <PageTitle showIcon={true} text="Conversation with Kabir Pokharel" />
          <div className={styles.chatBody}>
            <ChatBox
              cardWidth={styles.cardWidth}
              name="Bipin Bhandari"
              message=" Base Camp on ay 18. I twill be 10 days trek and we will return by 201233."
            />
            <ChatBox
              cardWidth={styles.cardWidth}
              message="sdfkajsodk sdlfjas df sf alf sf s ff sdfjsdlkf f sadf sdf sd sdjfsldfkj sdf sdf sdf sdjffdf asdfjasd"
              showOptionsButton={false}
              showAvatar={false}
              userCard={styles.userCard}
            />
            <ChatBox
              cardWidth={styles.cardWidth}
              message="sdfkajsodk sdlfjas df sf alf sf s ff sdfjsdlkf f sadf sdf sd sdjfsldfkj sdf sdf sdf sdjffdf asdfjasd"
              showOptionsButton={false}
              showAvatar={false}
              userCard={styles.userCard}
            />
            <ChatBox
              cardWidth={styles.cardWidth}
              name="Bipin Bhandari"
              message=" Base Camp on ay 18. I twill be 10 days trek and we will return by 201233."
            />
            <ChatBox
              cardWidth={styles.cardWidth}
              name="Bipin Bhandari"
              message=" Base Camp on ay 18. I twill be 10 days trek and we will return by 201233."
            />
            <ChatBox
              cardWidth={styles.cardWidth}
              message="sdfkajsodk sdlfjas df sf alf sf s ff sdfjsdlkf f sadf sdf sd sdjfsldfkj sdf sdf sdf sdjffdf asdfjasd"
              showOptionsButton={false}
              showAvatar={false}
              userCard={styles.userCard}
            />
            <ChatBox
              cardWidth={styles.cardWidth}
              message="sdfkajsodk sdlfjas df sf alf sf s ff sdfjsdlkf f sadf sdf sd sdjfsldfkj sdf sdf sdf sdjffdf asdfjasd"
              showOptionsButton={false}
              showAvatar={false}
              userCard={styles.userCard}
            />
            <ChatBox
              cardWidth={styles.cardWidth}
              name="Bipin Bhandari"
              message=" Base Camp on ay 18. I twill be 10 days trek and we will return by 201233."
            />
            <ChatBox
              cardWidth={styles.cardWidth}
              message="sdfkajsodk sdlfjas df sf alf sf s ff sdfjsdlkf f sadf sdf sd sdjfsldfkj sdf sdf sdf sdjffdf asdfjasd"
              showOptionsButton={false}
              showAvatar={false}
              userCard={styles.userCard}
            />
            <ChatBox cardWidth={styles.cardWidth} name="Bipin Bhandari" message=" Base Camp on ay 18." />
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
      </Layout>
    );
  }
}

export default Conv;

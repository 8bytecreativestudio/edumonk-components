import React from 'react';
import { Input, Icon } from 'antd';
import Layout from '../../../common/organisms/Layout';
import ChatBox from '../../../common/molecules/ChatBox';
import History from '../../../common/molecules/History';

import styles from './index.scss';

const Search = Input.Search;

class ConvTrial extends React.Component {
  state = {
    text: '',
    search: ''
  };

  // updateText = text => {
  //   this.setState({ text });
  // };
  searchText = search => {
    this.setState({ search });
  };
  // onclickEllipsis = () => {
  //   return;
  // };

  render() {
    const breadcrumbs = [
      {
        label: 'Dashboard'
      },
      {
        to: '/institutions',
        label: 'second page dup'
      }
    ];
    return (
      <Layout breadcrumbs={breadcrumbs}>
        <div className={styles.container}>
          <div className={styles.container__userCard}>
            <div className={styles.userCard__input}>
              <Search
                placeholder="search conversation"
                onChange={e => this.searchText(e.target.value)}
                style={{ padding: '0.3rem', width: '100%' }}
              />
            </div>
            <div className={styles.userCard__card}>
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
                name="Hari Aryal"
                message="a quick brown fox jumped"
                time="20 minutes ago"
                showTime={true}
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
                name="Hari Aryal"
                message="a quick brown fox jumped"
                time="20 minutes ago"
                showTime={true}
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
                name="Hari Aryal"
                message="a quick brown fox jumped"
                time="20 minutes ago"
                showTime={true}
              />

              <History
                status="PARENT"
                className={styles.historyCard}
                name="Hari Aryal"
                message="a quick brown fox jumped"
                time="20 minutes ago"
                showTime={true}
              />
            </div>
          </div>
          <div className={styles.container__chat}>
            <div className={styles.chat__conversation}>
              <ChatBox
                cardWidth={styles.cardWidth}
                name="Bipin Bhandari"
                message=" Base Camp on ay 18, that makes them slightly radioactive. But it’s nothing you need to worry about. You’d need to eat 10,000,000 bananas at once to die of radiation poisoning."
                showEllipsis={true}
                onClick={this.onclickEllipsis}
              />
              <ChatBox
                cardWidth={styles.cardWidth}
                message="Bananas contain potassium, o eat 10,000,000 bananas at once to die of radiation poisoning. I twill be 10 days trek and we will return by 201233"
                showOptionsButton={false}
                showAvatar={false}
                userCard={styles.userCard}
              />
              <ChatBox
                cardWidth={styles.cardWidth}
                message="Bananas contain potassium"
                showOptionsButton={false}
                showAvatar={false}
                userCard={styles.userCard}
              />
              <ChatBox
                cardWidth={styles.cardWidth}
                name="Bipin Bhandari"
                message=" Base Camp on ay 18. I twill be 10 days trek and we will return by 201233."
                showEllipsis={true}
                onClick={this.onclickEllipsis}
              />
              <ChatBox
                cardWidth={styles.cardWidth}
                message="Bananas contain potassium, and since potassium decays, that makes them slightly radioactive. But it’s nothing you need to worry about. You’d need to eat 10,000,000 bananas at once to die of radiation poisoning"
                showOptionsButton={false}
                showAvatar={false}
                userCard={styles.userCard}
              />
              <ChatBox
                cardWidth={styles.cardWidth}
                name="Bipin Bhandari"
                message=" Base Camp on ay 18. I twill be 10 days trek and we will return by 201233."
                showEllipsis={true}
                onClick={this.onclickEllipsis}
              />
            </div>
            <div className={styles.chat__input}>
              <Input addonAfter={<Icon style={{ fontSize: 18, color: '#08c' }} type="caret-right" />} />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ConvTrial;

{
  /* <div>
          <ChatBox
                  cardWidth={styles.cardWidth}
                  name="Bipin Bhandari"
                  message=" Base Camp on ay 18. I twill be 10 days trek and we will return by 201233."
                  showEllipsis={true}
                  onClick={this.onclickEllipsis}
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
                  showEllipsis={true}
                  onClick={this.onclickEllipsis}
                />
                <ChatBox
                  cardWidth={styles.cardWidth}
                  name="Bipin Bhandari"
                  message=" Base Camp on ay 18. I twill be 10 days trek and we will return by 20123333333333333333333333**********."
                  showEllipsis={true}
                  onClick={this.onclickEllipsis}
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
                  showEllipsis={true}
                  onClick={this.onclickEllipsis}
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
                  message=" Base Camp on ay 18."
                  onClick={this.onclickEllipsis}
                />
               </div> */
}

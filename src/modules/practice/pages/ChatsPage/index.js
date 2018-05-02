import React from 'react';
import Layout from '../../../common/organisms/Layout';
import ChatHead from '../../../common/molecules/ChatHead';

class ChatsPage extends React.Component {
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
        <div>
          <ChatHead
            name="Bipin Bhandari"
            message="Hey how are you bro! Are you going trekking with us to Annapurna Base Camp on ay 18. I twill be 10 days trek and we will return by 201233."
            showOptionsButton={false}
          />
        </div>
      </Layout>
    );
  }
}

export default ChatsPage;

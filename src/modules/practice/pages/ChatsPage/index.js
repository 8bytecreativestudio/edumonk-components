import React from 'react';
import Layout from '../../../common/organisms/Layout';

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
        <div>Chats Page</div>
      </Layout>
    );
  }
}

export default ChatsPage;

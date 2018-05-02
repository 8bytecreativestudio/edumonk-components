import React from 'react';
import Layout from '../../../common/organisms/Layout';
import styles from './index.scss';

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
        <div className={styles.container}>Chats Page</div>
      </Layout>
    );
  }
}

export default ChatsPage;

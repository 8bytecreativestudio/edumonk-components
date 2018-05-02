import React from 'react';
import 'antd/dist/antd.css';
// import InputBox from './../../../common/atoms/InputBox';
import { Button, Icon, Avatar, Input, Card, Tag, Radio } from 'antd';
import styles from './index.scss';

const Search = Input.Search;
class One extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <Icon type="menu-fold" style={{ fontSize: 35, color: 'green' }} />
          </div>
          <div>
            <Avatar icon="user" />
            <span className={styles.header_name}> Kabir Pokharel</span>
          </div>
        </div>
        <div className={styles.conversation}>
          <Icon type="profile" style={{ fontSize: 30, color: 'orange' }} />
          <span style={{ fontSize: 18, color: 'rgb(139, 138, 138)' }}> Conversation</span>
        </div>
        <div className={styles.input}>
          <Search placeholder="search contact" onSearch={value => console.log(value)} style={{ width: '50%' }} />
        </div>
        <div className={styles.cards}>
          <Card style={{ width: '100%' }}>
            <Avatar icon="user" />
            <span> Kabir pokharel </span>
            <Tag color="#f50">PARENT</Tag>
            <Radio style={{ float: 'right' }} />
            <span>
              <br />kabir
            </span>
          </Card>
          <Card style={{ width: '100%' }}>
            <Avatar icon="user" />
            <span> Hari pokharel </span>
            <Tag color="#f50">PARENT</Tag>
            <Radio style={{ float: 'right' }} />
            <span>
              <br />kabir
            </span>
          </Card>
          <Card style={{ width: '100%' }}>
            <Avatar icon="user" />
            <span> Gopal pokharel </span>
            <Tag color="#f50">PARENT</Tag>
            <Radio style={{ float: 'right' }} />
            <span>
              <br />kabir
            </span>
          </Card>
          <Card style={{ width: '100%' }}>
            <Avatar icon="user" />
            <span> Nabin pokharel </span>
            <Tag color="#f50">PARENT</Tag>
            <Radio style={{ float: 'right' }} />
            <span>
              <br />kabir
            </span>
          </Card>
          <Card style={{ width: '100%' }}>
            <Avatar icon="user" />
            <span> Shyam pokharel </span>
            <Tag color="#f50">PARENT</Tag>
            <Radio style={{ float: 'right' }} />
            <span>
              <br />kabir
            </span>
          </Card>
          <Card style={{ width: '100%' }}>
            <Avatar icon="user" />
            <span> Gopal pokharel </span>
            <Tag color="#f50">PARENT</Tag>
            <Radio style={{ float: 'right' }} />
            <span>
              <br />kabir
            </span>
          </Card>
        </div>
        <div className={styles.startConv}>
          <Button type="primary">Start Conversation</Button>
        </div>
      </div>
    );
  }
}

export default One;

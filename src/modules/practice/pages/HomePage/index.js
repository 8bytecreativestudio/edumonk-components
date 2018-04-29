import React from 'react';
import InputBox from './../../../common/atoms/InputBox';
import styles from './index.scss';

class HomePage extends React.Component {
  state = {
    value: ''
  };

  onChange = value => {
    this.setState({
      value
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className={styles.container}>
        Test
        <InputBox value={value} onChange={this.onChange} />
      </div>
    );
  }
}

export default HomePage;

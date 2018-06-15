import React from 'react';
import { Input } from 'antd';

// import styles from './index.scss';

const Inputbox = ({ onChange, value }) => <Input onChange={event => onChange(event.target.value)} value={value} />;

export default Inputbox;

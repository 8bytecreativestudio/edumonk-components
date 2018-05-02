/*eslint-disable import/no-extraneous-dependencies*/
import React from 'react';

import { storiesOf } from '@storybook/react';
import ChatHead from '../src/modules/common/molecules/ChatHead';

storiesOf('ChatHead', module).add('basic', () => <ChatHead />);

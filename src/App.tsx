import { hot } from 'react-hot-loader/root';
import React from 'react';
import Hello from './components/Hello';

const App = () => (
  <div>
    <Hello compiler="TypeScript" framework="React" />
  </div>
)

export default hot(App);
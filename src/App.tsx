import React from 'react';
import './assets/styles/index.scss';
import './App.css';

import { Table } from './components';

interface Props {
  //   activeTodoCount: number;
}

const App: React.FC<Props> = React.memo((props) => {
  return (
    <div>
      <h1>Title</h1>
      <Table />
    </div>
  );
});

export default App;

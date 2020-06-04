import React from 'react';
import './assets/styles/index.scss';
import './App.css';

import { Table } from './components';

const data = [
  { firstName: 'jane', lastName: 'doe', age: 20 },
  { firstName: 'john', lastName: 'smith', age: 21 },
];

const columns = [
  {
    Header: 'Name',
    columns: [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
    ],
  },
  {
    Header: 'Other Info',
    columns: [
      {
        Header: 'Age',
        accessor: 'age',
      },
    ],
  },
];

interface Props {
  //   activeTodoCount: number;
}

const App: React.FC<Props> = React.memo((props) => {
  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
});

export default App;

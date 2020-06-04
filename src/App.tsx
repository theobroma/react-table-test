import React from 'react';
import './assets/styles/index.scss';
import './App.css';

import { Table } from './components';
import makeData from './FakeData/makeData';

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
  const dataFake = React.useMemo(() => makeData(20), []);
  console.log(dataFake);

  const columnsFake = React.useMemo(
    () => [
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
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    []
  );
  return (
    <div className="App">
      <Table columns={columnsFake} data={dataFake} />
    </div>
  );
});

export default App;

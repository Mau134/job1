'use client'

import React, { useMemo } from 'react';
import { useTable } from 'react-table';

const TableComponent = () => {
  const data = useMemo(
    () => [
      { name: 'Maurice Molande', age: 25, email: 'mau.molande@gmail.com' },
      { name: 'Nohata Molande', age: 30, email: 'nohata.molande@gmail.com' },
      
    ],
    []
  );

  const columns = useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Age', accessor: 'age' },
      { Header: 'Email', accessor: 'email' },
    ],
    []
  );

  // An instance of the useTable hook
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            style={{ borderBottom: '2px solid #ddd' }}
          >
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{ padding: '10px', background: '#394648' }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              style={{ borderBottom: '1px solid #ddd' }}
            >
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} style={{ padding: '5px' }}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;

import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import './DataTable.css'; 

interface DataTableProps {
  data: {
    name: string;
    position: string;
    salary: string;
  }[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  useEffect(() => {
    $(document).ready(function () {
      $('#example').DataTable();
    });
  }, []);

  return (
    <table id="example" className="display" style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.position}</td>
            <td>{row.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;

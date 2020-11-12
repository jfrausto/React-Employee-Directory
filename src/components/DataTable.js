import React from "react";
import TableBody from "./TableBody";
import "../styles/DataTable.css";

function DataTable({ headers, users, handleSort }) {
  return (
    <div className="data-table mt-4">
      <table
        id="table"
        className="table table-striped table-hover"
      >
        <thead>
          <tr>
            {headers.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <TableBody users={users} />
      </table>
    </div>
  );
}

export default DataTable;

import React from "react";
import TableBody from "./TableBody";
import "../styles/DataTable.css";

// this functional component contains the table headers and 
// the bulk of the data in TableBody
function DataTable({ headers, users, handleSort }) {
  return (
    <div className="data-table mt-2">
      <table
        id="table"
        className="table table-striped"
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
                  <span className="carrot"></span>
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

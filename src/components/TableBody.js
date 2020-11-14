import React from "react";

function TableBody({ users }) {
  // format the incoming date into [MM - DD - YY]
  function formatDate(date) {
    const dateArray = date.split("-");
    const dayArray = dateArray[2].split("T");
    const YY = dateArray[0];
    const MM = dateArray[1];
    const DD = dayArray[0];
    const hyphenDate = [MM, DD, YY].join("-");
    return hyphenDate;
  }

    // render empty html once you start typing, and you find no matches
    // else, we found and match so print some table rows
  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ picture, login, name, phone, email, dob }) => {
          return (
            <tr key={login.uuid}>
              <td data-th="Image" className="align-middle">
                <img
                  src={picture.medium}
                  alt={"profile image for " + name.first + " " + name.last}
                  className="img-responsive"
                />
              </td>
              <td data-th="Name" className="align-middle">
                {name.first} {name.last}
              </td>
              <td data-th="Email" className="align-middle">
                <a href={"mailto:" + email} target="__blank">
                  {email}
                </a>
              </td>
              <td data-th="Phone" className="align-middle">
                {phone}
              </td>
              <td data-th="DOB" className="align-middle">
                {formatDate(dob.date)}
              </td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
}

export default TableBody;

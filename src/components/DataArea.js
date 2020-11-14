import React, { Component } from 'react';
import DataTable from "./DataTable.js";
import Nav from "./Nav";
import API from "../utils/API";
import "../styles/DataArea.css";

class DataArea extends Component {
    // initialize state to have an array of users, sort order, and filtered users
    state = { 
        users: [{}],
        order: "descend",
        filteredUsers: [{}]
    };
    // headers of each column
    headers = [
        { name: "Image", width: "15%" },
        { name: "Name", width: "10%" },
        { name: "Email", width: "20%" },
        { name: "Phone", width: "20%" },
        { name: "DOB", width: "10%" }
    ];

    // get users and copy them into filtered users
    componentDidMount() {
        API.getUsers().then( (res) => {
            this.setState({
                users: res.data.results,
                filteredUsers: res.data.results
            });
        });
    }

    // handles the event when you type into the search box
    handleInputChange = (e) => {
        const searchTerm = e.target.value;
        const filteredList = this.state.users.filter( (user) => {
            let reducedTerm = Object.values(user).join("").toLowerCase();
            return (reducedTerm.indexOf(searchTerm.toLowerCase()) !== -1);
        });

        this.setState({ filteredUsers: filteredList});
    }

    // handles sorting in multiple cases
    handleSort = (header) => {
        // toggles ascend/descend sorting
        if (this.state.order === "descend") {
          this.setState({
            order: "ascend"
          })
        } else {
          this.setState({
            order: "descend"
          })
        }
        
        // compare function to sort accordingly.
        // handles numerical as well as alphabetical sorting
        const compare = (a, b) => {
          if (this.state.order === "descend") {
            // check for missing values
            if (a[header] === undefined) {
                return 1;
              } else if (b[header] === undefined) {
                return -1;
              }
              // sort by name, phone, email, and DOB respectively
              else if (header === "name") {
                return b[header].first.localeCompare(a[header].first);
              } else if (header === "phone"){  // numerical
                return b[header].localeCompare(a[header]);
              } else if (header === "email") {
                return b[header].localeCompare(a[header]);
              } else if (header === "dob") {
                return b[header].date.localeCompare(a[header].date);
              }
          } else {  // ASCEND SORT, check for undefined
            if (a[header] === undefined) {
                return 1;
              } else if (b[header] === undefined) {
                return -1;
              }
              // sort by name, phone, email, and DOB respectively
              else if (header === "name") {
                return a[header].first.localeCompare(b[header].first);
              } else if (header === "phone") {
                return a[header].localeCompare(b[header]);
              } else if (header === "email") {
                return a[header].localeCompare(b[header]);
              } else if (header === "dob") {
                return a[header].date.localeCompare(b[header].date);
              }
          }
    
        }
        // filter according to the compare function
        const sortedUsers = this.state.filteredUsers.sort(compare);
        this.setState({ filteredUsers: sortedUsers });
      }


    render() {
        return(
            <div>
                <Nav 
                    handleInputChange={this.handleInputChange}
                />
                <div className="table-area">
                    <DataTable 
                        headers={this.headers}
                        users={this.state.filteredUsers}
                        handleSort={this.handleSort}
                    />
                </div>
            </div>
                
        );
    }
}

export default DataArea;
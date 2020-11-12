import React, { Component } from 'react';
import DataTable from "./DataTable";
import Nav from "./Nav";
import API from "../utils/API";
import "../styles/DataArea.css";

class DataArea extends Component {
    state = { 
        users: [{}],
        order: "descend",
        filteredUsers: [{}]
    };

    headings = [
        { name: "Image", width: "10%" },
        { name: "Name", width: "10%" },
        { name: "Phone", width: "20%" },
        { name: "Email", width: "20%" },
        { name: "DOB", width: "10%" }
    ];

    componentDidMount() {
        API.getUsers().then( (res) => {
            this.setState({
                users: res.data.results,
                filteredUsers: res.data.results
            });
        });
    }

    render() {
        return(
            <div>
                <Nav />
                <div className="table-area">
                    <DataTable />
                </div>
            </div>
                
        );
    }

}

export default DataArea;
import React from 'react'
import "../styles/Header.css";

export default function Header() {
    return (
        <div className="header container-fluid py-2">
            <h1>Employee Directory</h1>
            <p>Use the search box to find employees</p>
            <p>Click on the carrots to filter by table heading</p>
        </div>
    );
}
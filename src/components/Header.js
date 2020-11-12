import React from 'react'
import "../styles/Header.css";

export default function Header() {
    return (
        <div className="header">
            <h1>Employee Directory</h1>
            <p>Use the search box to narrow your search results</p>
            <p>Click on the carrots to filter by table heading</p>
        </div>
    );
}
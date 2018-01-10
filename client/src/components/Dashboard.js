import React from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div className="container content-container">
            <h2>Dashboard</h2>
            <Link to="/surveys/new">
            <button className="btn-primary btn">Add Survey</button>
            </Link>
        </div>
    )
}

export default Dashboard;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const [checklists, setChecklists] = useState([]);

    useEffect(() => {
        axios.get('https://greenvelvet.alwaysdata.net/pfc/checklists', {
            headers: { 'token': '6fd4c879b87177f3ff643c90c64204bbd0760b2b' }
        }).then(response => {
            setChecklists(response.data.response);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <Link to="/form" className="btn btn-primary mb-4">New Checklist</Link>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {checklists.map(checklist => (
                    <div key={checklist.id} className="p-4 border rounded shadow">
                        <h2 className="text-xl font-semibold">{checklist.title}</h2>
                        <p>{checklist.description}</p>
                        <p>Status: {checklist.status}</p>
                        <p>{checklist.tasks.length} tasks</p>
                        <Link to={`/checklist/${checklist.id}`} className="btn btn-secondary">View</Link>
                        <Link to={`/form/${checklist.id}`} className="btn btn-secondary">Edit</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;


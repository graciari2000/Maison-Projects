import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './signup-login.css';

const Dashboard = () => {
    const [checklists, setChecklists] = useState([]);

    useEffect(() => {
        fetch('https://greenvelvet.alwaysdata.net/pfc/checklists', {
            headers: { 'token': '6fd4c879b87177f3ff643c90c64204bbd0760b2b' }
        })
            .then(response => response.json())
            .then(data => {
                setChecklists(data.response);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="min-h-screen p-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-3 px-4 text-left">Title</th>
                                <th className="py-3 px-4 text-left">Description</th>
                                <th className="py-3 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {checklists.map((checklist) => (
                                <tr key={checklist.id} className="border-b border-gray-200">
                                    <td className="py-3 px-4">{checklist.title}</td>
                                    <td className="py-3 px-4">{checklist.description}</td>
                                    <td className="py-3 px-4">
                                        <Link to={`/checklist/${checklist.id}`} className="text-blue-500 hover:underline">
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-9 float-right mb-4">
                    <Link to="/form" className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        New
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;



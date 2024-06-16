import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuthToken } from './Auth';
import './signup-login.css';
import axios from 'axios';

const Dashboard = () => {
    const [checklists, setChecklists] = useState([]);
    const token = getAuthToken();

    useEffect(() => {
        const fetchChecklists = async () => {
            if (!token) {
                console.error('No token found');
                return;
            }

            try {
                const response = await axios.get('https://greenvelvet.alwaysdata.net/pfc/checklists', {
                    headers: { token: '23103ab7181a83f8cc1a3596c950c2a5101081f7' },
                });
                setChecklists(response.data.response);
            } catch (error) {
                console.error('Error fetching checklists:', error);
            }
        };

        fetchChecklists();
    }, [token]);

    const handleDelete = async (id) => {
        if (!token) {
            console.error('No token found');
            return;
        }

        try {
            const response = await axios.delete(`https://greenvelvet.alwaysdata.net/pfc/checklist/delete/${id}`, {
                headers: { token: '23103ab7181a83f8cc1a3596c950c2a5101081f7' },
            });

            if (response.data.success) {
                setChecklists((prevChecklists) => prevChecklists.filter((checklist) => checklist.id !== id));
            } else {
                alert('Error deleting checklist');
            }
        } catch (error) {
            console.error('Error deleting checklist:', error);
        }
    };

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
                            {checklists.length > 0 ? (
                                checklists.map((checklist) => (
                                    <tr key={checklist.id} className="border-b border-gray-200">
                                        <td className="py-3 px-4">{checklist.title}</td>
                                        <td className="py-3 px-4">{checklist.description}</td>
                                        <td className="py-3 px-4">
                                            <Link to={`/checklist/${checklist.id}`} className="hover:underline">
                                                View
                                            </Link>
                                            <Link to={`/checklist/update/${checklist.id}`} className="hover:underline ml-4">
                                                Edit
                                            </Link>
                                            <button onClick={() => handleDelete(checklist.id)} className="hover:underline ml-4">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td className="py-3 px-4 text-center" colSpan="3">No checklists available</td>
                                </tr>
                            )}
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



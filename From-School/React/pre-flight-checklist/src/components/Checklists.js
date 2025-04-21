import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAuthToken } from './Auth';
import axios from 'axios'; // Import Axios
import './signup-login.css';

const Checklist = () => {
    const { id } = useParams();
    const [checklist, setChecklist] = useState(null);
    const token = getAuthToken();

    useEffect(() => {
        const fetchChecklist = async () => {
            try {
                const response = await axios.get(`https://greenvelvet.alwaysdata.net/pfc/checklist/${id}`, {
                    headers: { token: '23103ab7181a83f8cc1a3596c950c2a5101081f7' },
                });
                setChecklist(response.data.response);
            } catch (error) {
                console.error('Error fetching checklist:', error);
            }
        };

        if (token) {
            fetchChecklist();
        }
    }, [id, token]);

    if (!checklist) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen p-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-8">{checklist.title}</h1>
                <p className="mb-4">{checklist.description}</p>
                <ul className="list-disc pl-5">
                    {checklist.tasks.map((task, index) => (
                        <li key={index}>
                            <h2 className="text-xl font-semibold">{task.title}</h2>
                            <p>{task.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Checklist;

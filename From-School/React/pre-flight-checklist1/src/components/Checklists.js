import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Checklist = () => {
    const { id } = useParams();
    const [checklist, setChecklist] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://greenvelvet.alwaysdata.net/pfc/checklist/${id}`, {
            headers: { 'token': '6fd4c879b87177f3ff643c90c64204bbd0760b2b' },
        })
            .then(response => {
                if (!response.ok) {
                    if (response.status === 404) {
                        console.log('first');
                        throw new Error('Checklist not found');
                    } else {
                        throw new Error('Network response was not ok');
                    }
                }
                return response.json();
            })
            .then(data => {
                setChecklist(data);
                console.log("Response data:", data);
            })
            .catch(error => {
                setError(error.message);
            });
    }, [id]);

    if (error) {
        console.log('first');
        return <div>Error: {error}</div>;
    }

    if (!checklist) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-8">{checklist.title}</h1>
                <p className="mb-4">{checklist.description}</p>
                <h2 className="text-2xl font-bold mb-4">Tasks</h2>
                <ul>
                    {checklist.todo.map((task, index) => (
                        <li key={index} className="mb-2">
                            <h3 className="text-xl font-semibold">{task.title}</h3>
                            <p>{task.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Checklist;


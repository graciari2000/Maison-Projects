// src/components/Checklist.js

import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosConfig';

const Checklist = ({ checklistId }) => {
    const [checklist, setChecklist] = useState(null);

    useEffect(() => {
        const fetchChecklist = async () => {
            try {
                const response = await axiosInstance.get(`/checklist?id=${checklistId}`);
                setChecklist(response.data);
            } catch (error) {
                console.error('Error fetching checklist:', error);
            }
        };

        fetchChecklist();
    }, [checklistId]);

    const toggleTaskStatus = async (taskId, currentStatus) => {
        const newStatus = (currentStatus + 1) % 3; // Assuming statuses are 0, 1, 2
        try {
            const response = await axiosInstance.get(`/checklist/statut?id=${taskId}&statut=${newStatus}`);
            if (response.data.done) {
                setChecklist(prevChecklist => {
                    const updatedTodos = prevChecklist.todo.map(task =>
                        task.id === taskId ? { ...task, statut: newStatus } : task
                    );
                    return { ...prevChecklist, todo: updatedTodos };
                });
            }
        } catch (error) {
            console.error('Error updating task status:', error);
        }
    };

    if (!checklist) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{checklist.title}</h1>
            <p>{checklist.description}</p>
            <ul>
                {checklist.todo.map(task => (
                    <li key={task.id}>
                        <span>{task.title}: </span>
                        <span>{task.description}</span>
                        <span> - Status: {task.statut}</span>
                        <button onClick={() => toggleTaskStatus(task.id, task.statut)}>Toggle Status</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Checklist;


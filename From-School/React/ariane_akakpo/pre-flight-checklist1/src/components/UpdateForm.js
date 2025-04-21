import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAuthToken } from './Auth';
import axios from 'axios'; // Import Axios
import './signup-login.css';

const UpdateForm = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tasks: [{ title: '', description: '' }],
    });
    const navigate = useNavigate();
    const token = getAuthToken();

    useEffect(() => {
        const fetchChecklist = async () => {
            try {
                const response = await axios.get(`https://greenvelvet.alwaysdata.net/pfc/checklist/${id}`, {
                    headers: { 'token': token },
                });
                const data = response.data;
                setFormData(data.response);
            } catch (error) {
                console.error('Error fetching checklist:', error);
            }
        };

        if (token) {
            fetchChecklist();
        }
    }, [id, token]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleTaskChange = (index, e) => {
        const { name, value } = e.target;
        const tasks = [...formData.tasks];
        tasks[index][name] = value;
        setFormData((prevData) => ({ ...prevData, tasks }));
    };

    const handleAddTask = () => {
        setFormData((prevData) => ({
            ...prevData,
            tasks: [...prevData.tasks, { title: '', description: '' }],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`https://greenvelvet.alwaysdata.net/pfc/checklist/${id}`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
            });
            const data = response.data;
            console.log('Checklist updated:', data);
            navigate('/'); // Redirect to the Dashboard after successful update
        } catch (error) {
            console.error('Error updating checklist:', error);
        }
    };

    return (
        <div className="min-h-screen p-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-8">Update Checklist</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Checklist Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter checklist title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter checklist description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {formData.tasks.map((task, index) => (
                        <div key={index} className="mb-4">
                            <label htmlFor={`taskTitle${index}`} className="block text-gray-700 text-sm font-bold mb-2">Task Title</label>
                            <input
                                type="text"
                                id={`taskTitle${index}`}
                                name="title"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter task title"
                                value={task.title}
                                onChange={(e) => handleTaskChange(index, e)}
                                required
                            />
                            <label htmlFor={`taskDescription${index}`} className="block text-gray-700 text-sm font-bold mb-2 mt-4">Task Description</label>
                            <textarea
                                id={`taskDescription${index}`}
                                name="description"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter task description"
                                value={task.description}
                                onChange={(e) => handleTaskChange(index, e)}
                                required
                            />
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddTask}
                        className="mb-4 font-bold py-2 px-4 mr-9 float-left rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Task
                    </button>
                    <button
                        type="submit"
                        className="font-bold py-2 px-4 ml-9 float-right rounded focus:outline-none focus:shadow-outline"
                    >
                        Save Checklist
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateForm;
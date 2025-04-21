import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthToken } from './Auth';
import './signup-login.css';

const Form = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tasks: [{ title: '', description: '' }],
    });
    const navigate = useNavigate();
    const token = getAuthToken();

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
            const response = await fetch('https://greenvelvet.alwaysdata.net/pfc/checklist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log('Checklist created:', data);
            navigate('/'); // Redirect to the Dashboard after successful creation
        } catch (error) {
            console.error('Error creating checklist:', error);
        }
    };

    return (
        <div className="min-h-screen p-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-8">Create New Checklist</h1>
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

export default Form;
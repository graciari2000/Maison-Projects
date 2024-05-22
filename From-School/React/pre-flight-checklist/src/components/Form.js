import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Form = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tasks, setTasks] = useState([{ title: '', description: '' }]);

    useEffect(() => {
        if (id) {
            axios.get(`https://greenvelvet.alwaysdata.net/pfc/checklist?id=${id}`, {
                headers: { 'token': '6fd4c879b87177f3ff643c90c64204bbd0760b2b' }
            }).then(response => {
                setTitle(response.data.title);
                setDescription(response.data.description);
                setTasks(response.data.tasks);
            }).catch(error => {
                console.error('Error fetching checklist:', error);
            });
        }
    }, [id]);

    const handleTaskChange = (index, field, value) => {
        const newTasks = tasks.map((task, i) => (i === index ? { ...task, [field]: value } : task));
        setTasks(newTasks);
    };

    const handleSubmit = async () => {
        const checklistData = { title, description, tasks };
        const url = id ? 'https://greenvelvet.alwaysdata.net/pfc/checklist/update' : 'https://greenvelvet.alwaysdata.net/pfc/checklist/add';

        try {
            await axios.post(url, checklistData, {
                headers: { 'token': '6fd4c879b87177f3ff643c90c64204bbd0760b2b' }
            });
            navigate('/');
        } catch (error) {
            console.error('Error saving checklist:', error);
        }
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">{id ? 'Edit Checklist' : 'New Checklist'}</h1>
            <div className="mb-4">
                <label className="block mb-2">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>
            {tasks.map((task, index) => (
                <div key={index} className="mb-4">
                    <label className="block mb-2">Task {index + 1}</label>
                    <input
                        type="text"
                        value={task.title}
                        onChange={(e) => handleTaskChange(index, 'title', e.target.value)}
                        placeholder="Title"
                        className="w-full p-2 border rounded mb-2"
                    />
                    <input
                        type="text"
                        value={task.description}
                        onChange={(e) => handleTaskChange(index, 'description', e.target.value)}
                        placeholder="Description"
                        className="w-full p-2 border rounded"
                    />
                </div>
            ))}
            <button onClick={() => setTasks([...tasks, { title: '', description: '' }])} className="btn btn-secondary mb-4">Add Task</button>
            <button onClick={handleSubmit} className="btn btn-primary">Save Checklist</button>
        </div>
    );
};

export default Form;



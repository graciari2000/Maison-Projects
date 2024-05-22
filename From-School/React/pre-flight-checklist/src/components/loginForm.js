// src/components/LoginForm.js

import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://greenvelvet.alwaysdata.net/pfc/login', {
                username,
                password
            });
            const token = response.data.token;
            localStorage.setItem('token', token); // Stocker le token dans localStorage
            // Rediriger l'utilisateur ou effectuer d'autres actions après la connexion
        } catch (error) {
            console.error('Erreur de connexion:', error);
        }
    };

    return (
        <div>
            <h2>Connexion</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
};

export default LoginForm;

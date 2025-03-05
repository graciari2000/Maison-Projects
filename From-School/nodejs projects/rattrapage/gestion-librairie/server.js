const connectDB = require('./config/db');
connectDB(); // Connexion à la base de données

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serveur démarré sur le port ${PORT}`));
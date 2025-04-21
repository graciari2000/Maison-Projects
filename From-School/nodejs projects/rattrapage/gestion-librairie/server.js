const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();
connectDB();

const app = express();

// ✅ Config CORS
app.use(cors({
    origin: 'http://localhost:5173', // autoriser cette origine
    credentials: true
}));

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Serveur démarré sur le port ${PORT}`));
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoutes");
const userRoutes = require("./routes/userRoutes");
const loanRoutes = require("./routes/loanRoutes");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
console.log("MONGO_URI:", process.env.MONGO_URI);


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/users", userRoutes);
app.use("/api/loans", loanRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
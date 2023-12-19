const express = require("express");
const app = express();
const port = 3000;
const routerTodo = require("./routes/api");
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/");


mongoose.connection.on("error", (err) => {
    console.log('err');
});


mongoose.connection.on("connected", (err) => {
    console.log('Mongodb is connected');
});

app.use(express.json())
app.use("/api", routerTodo);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

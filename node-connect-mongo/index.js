const express = require('express');
const app = express();

const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);
async function run() {
    try {
	const database = client.db("RESTAURANTS");
	const restaurants = database.collection("RESTAURANTS");
	const query = { borough: "Bronx"};
	const options = {
	    projection: { _id: 0 },
	};
	const resto = await restaurants.findOne(query);
	console.log(resto);
    } finally {
	await client.close();
    }
}
run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Book = require("./models/Book");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("📚 Connected to MongoDB");

        return Book.insertMany([
            {
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                genre: "Classic",
                price: 12.99,
                description: "A novel set in the Roaring Twenties.",
                stock: 5,
                image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1650033243i/41733839.jpg"
            },
            {
                title: "1984",
                author: "George Orwell",
                genre: "Dystopian",
                price: 10.50,
                description: "A chilling prediction of totalitarian regimes.",
                stock: 8,
                image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg"
            },
            {
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                genre: "Fiction",
                price: 9.99,
                description: "A powerful story about racial injustice in the American South.",
                stock: 12,
                image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg"
            }
        ]);
    })
    .then(() => {
        console.log("✅ Sample books with images inserted!");
        process.exit();
    })
    .catch((err) => {
        console.error("❌ Error inserting books:", err);
        process.exit(1);
    });
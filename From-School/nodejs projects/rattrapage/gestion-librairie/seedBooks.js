const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Book = require("./models/Book");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("📚 Connected to MongoDB");

        return Book.insertMany(
            [
            {
                title: "Brave New World",
                author: "Aldous Huxley",
                genre: "Dystopian",
                price: 10.0,
                description: "A futuristic society engineered for maximum happiness—but at what cost to individuality, freedom, and truth?",
                stock: 11,
                image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1575509280i/5129.jpg"
            },
            {
                title: "Crime and Punishment",
                author: "Fyodor Dostoevsky",
                genre: "Philosophical Fiction",
                price: 11.25,
                description: "A psychological study of morality and guilt as Raskolnikov commits murder and faces the consequences of his conscience.",
                stock: 6,
                image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1382846449i/7144.jpg"
            },
            {
                title: "The Picture of Dorian Gray",
                author: "Oscar Wilde",
                genre: "Classic",
                price: 9.0,
                description: "Dorian Gray remains young and beautiful while a portrait of him ages with each sin, revealing his descent into moral corruption.",
                stock: 9,
                image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546103428i/5297.jpg"
            },
            {
                title: "Of Mice and Men",
                author: "John Steinbeck",
                genre: "Classic",
                price: 8.99,
                description: "The tragic story of two displaced ranch workers trying to find their place in Depression-era America.",
                stock: 14,
                image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1511302904i/890.jpg"
            },
            {
                title: "Les Misérables",
                author: "Victor Hugo",
                genre: "Historical Fiction",
                price: 13.0,
                description: "An epic story of justice, redemption, and revolution set in 19th-century France, following ex-convict Jean Valjean.",
                stock: 7,
                image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1411852091i/24280.jpg"
            },
            {
                title: "Wuthering Heights",
                author: "Emily Brontë",
                genre: "Gothic Fiction",
                price: 7.99,
                description: "A dark and passionate tale of revenge and doomed love set on the Yorkshire moors.",
                stock: 10,
                image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631192373i/6185.jpg"
            },
            {
                title: "A Tale of Two Cities",
                author: "Charles Dickens",
                genre: "Historical Fiction",
                price: 8.75,
                description: "A powerful novel of love and sacrifice set during the French Revolution, famous for its opening line: 'It was the best of times, it was the worst of times...'",
                stock: 13,
                image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554081302i/1953.jpg"
                }
            ]
);
    })
    .then(() => {
        console.log("✅ Sample books with images inserted!");
        process.exit();
    })
    .catch((err) => {
        console.error("❌ Error inserting books:", err);
        process.exit(1);
    });
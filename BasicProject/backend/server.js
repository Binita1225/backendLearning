import express from 'express';


const app = express();

app.get('/', (req, res) =>{
    res.send('Server is ready');
});

// get a list of 5 books
app.get('/api/books', (req, res)=>{
    const books = [
        {
            "id": 1,
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee"
        },
        {
            "id": 2,
            "title": "1984",
            "author": "George Orwell"
        },
        {
            "id": 3,
            "title": "Pride and Prejudice",
            "author": "Jane Austen"
        },
        {
            "id": 4,
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald"
        },
        {
            "id": 5,
            "title": "Moby-Dick",
            "author": "Herman Melville"
        }
    ]
    res.send(books);
    
});


const port = process.env.PORT || 4000;

app.listen(port,() =>{
    console.log(`Serve at http://localhost:${port}`);
});
import express from 'express';
const app = express();

// Set the view engine
app.set('view engine', 'ejs');

const PORT = 3002;

app.get('/', (req, res) => {
    res.render('home');
});



app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
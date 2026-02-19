import express from 'express';
const app = express();

// Set the view engine
app.set('view engine', 'ejs');

const PORT = 3002;

app.get('/', (req, res) => {
    let user = {
        name: "Tony",
        color: "red",
        food: "pizza",
        grade: 2.7,
        age: 24
    }
    res.render('home', { user });
});



app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
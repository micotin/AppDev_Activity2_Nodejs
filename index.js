const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'signup.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    res.send(`Login attempt: Username - ${username}, Password - ${password}`);
});

app.post('/signup', (req, res) => {
    const { username, password, email } = req.body;
    res.send(`Signup attempt: Username - ${username}, Email - ${email}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

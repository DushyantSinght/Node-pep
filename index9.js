import express from 'express';
const app = express();

const auth = (req, res, next) => {
    const { token } = req.params;   

    if (token === "1234") {
        next();
    } else {
        res.send("Not Authorised");
    }
};

app.get('/:token', auth, (req, res) => {
    res.send('Hello World!');
});

app.get('/', (req, res) => {
    res.send('Public Route');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

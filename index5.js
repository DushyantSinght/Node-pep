import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
  let a = req.headers.authorization;
  console.log(a);
});

app.use((req, res) => {
  res.send('Hello Students');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

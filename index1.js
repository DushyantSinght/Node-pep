import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/:id/:name/:age', (req, res) => {
  const { id, name, age } = req.params;

  res.send(`ID: ${id}, Name: ${name}, Age: ${age}`);
});
app.get('/:id/:name', (req, res) => {
  const { id, name } = req.params;

  res.send(`ID: ${id}, Name: ${name}`);
});
app.use((req, res) => {
  res.send('Hello Students');
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

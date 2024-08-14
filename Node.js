// server.js

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/share', (req, res) => {
  const { title, text, url } = req.body;
  // التعامل مع البيانات المشتركة
  console.log('Title:', title);
  console.log('Text:', text);
  console.log('URL:', url);
  res.send('Data received');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

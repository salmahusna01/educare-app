const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Backend EduCare berjalan'); // ← HARUS TEXT
});

app.listen(3000, () => console.log('Server running di port 3000'));
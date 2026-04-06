const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Virtual Focus Room Backend Running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
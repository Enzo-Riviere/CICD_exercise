// backend/index.js
const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors')

app.use(express.json())
app.use(cors(
    {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    }
))

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});

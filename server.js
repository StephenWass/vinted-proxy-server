const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Proxy endpoint for searching items
app.post('/search-items', async (req, res) => {
  const { text, currency, order } = req.body;
  try {
    const response = await axios.post('https://vinted-api.com/api/items', {
      text,
      currency,
      order
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

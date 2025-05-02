const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/summarize', async (req, res) => {
  const { text } = req.body;

  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
      { inputs: text },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        },
        timeout: 30000,
      }
    );

    const result = response.data;

    if (Array.isArray(result) && result[0].summary_text) {
      res.json({ summary: result[0].summary_text });
    } else {
      console.error('Unexpected response format:', result);
      res.status(500).json({ summary: 'Unexpected response from summarizer.' });
    }
  } catch (err) {
    console.error(err.message || err);
    res.status(500).json({ summary: 'Error summarizing text.' });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

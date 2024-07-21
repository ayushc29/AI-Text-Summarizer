require('dotenv').config({ path: __dirname + '/.env' });
const axios = require('axios');
const process = require('process');

const TOKEN = process.env.ACCESS_TOKEN;

async function summarizeText(text, maxLength, minLength) {
  const data = JSON.stringify({
    "inputs": text,
    "parameters": {
      "max_length": parseInt(maxLength, 10),
      "min_length": parseInt(minLength, 10)
    }
  });

  const config = {
    method: 'post',
    url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + TOKEN
    },
    data: data
  };

  try {
    const response = await axios.request(config);
    return response.data[0].summary_text;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = summarizeText;

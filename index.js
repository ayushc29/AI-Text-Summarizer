const express = require('express');

const app = express();

const port = 3000;

const summarizeText = require('./summarize.js');

app.use(express.json());

app.use(express.static('public'));

app.post('/summarize', (req, res) => {
  const text = req.body.text_to_summarize;
  const maxLength = req.body.maxLength;
  const minLength = req.body.minLength;

  summarizeText(text, maxLength, minLength)
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      console.log(error.message);
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
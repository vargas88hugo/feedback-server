const express = require('express');

const properties = require('./config/properties');

const app = express();

app.get('/', (req, res) => {
  res.send({ 'hi': 'there'});
});

app.listen(properties.PORT, () => {
  console.log(`Server running on port ${properties.PORT}`);
});
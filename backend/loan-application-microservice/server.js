const express = require('express');
const mongoose = require('mongoose');
const kafka = require('node-rdkafka');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://ayedtalel:loanapp@cluster0.kbkvqjh.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const producer = new kafka.Producer({
  'metadata.broker.list': 'localhost:9000',
});

producer.connect();

app.post('/submit', async (req, res) => {
});

app.listen(PORT, () => {
  console.log(`Loan Application Microservice listening on port ${PORT}`);
});

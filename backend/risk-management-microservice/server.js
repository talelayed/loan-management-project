const express = require('express');
const kafka = require('node-rdkafka');

const app = express();
const PORT = process.env.PORT || 3004;

const consumer = new kafka.KafkaConsumer({
  'group.id': 'risk-management-consumer-group',
  'metadata.broker.list': 'localhost:9092',
});

consumer.connect();

consumer.on('ready', () => {
  consumer.subscribe(['loan-applications-topic']);
});

consumer.on('data', (message) => {
  console.log(message.value.toString());
});

app.listen(PORT, () => {
  console.log(`Risk Management Microservice listening on port ${PORT}`);
});

const express = require('express');
const kafka = require('node-rdkafka');

const app = express();
const PORT = process.env.PORT || 3002;

const consumer = new kafka.KafkaConsumer({
  'group.id': 'notification-group',
  'metadata.broker.list': 'localhost:9000',
});

consumer.connect();

consumer.on('ready', () => {
  consumer.subscribe(['notifications-topic']);
});

consumer.on('data', (message) => {
  console.log(message.value.toString());
});

app.listen(PORT, () => {
  console.log(`Notification Microservice listening on port ${PORT}`);
});

const kafka = require('node-rdkafka');

const consumer = new kafka.KafkaConsumer({
  'group.id': 'consumer-group',
  'metadata.broker.list': 'localhost:9000',
});

consumer.connect();

consumer.on('ready', () => {
  consumer.subscribe(['loan-applications-topic']);
});

consumer.on('data', (message) => {
  console.log(`Received message: ${message.value.toString()}`);
});

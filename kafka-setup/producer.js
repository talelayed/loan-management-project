const kafka = require('node-rdkafka');

const producer = new kafka.Producer({
  'metadata.broker.list': 'localhost:9000',
});

producer.connect();

function sendMessage(topic, message) {
  producer.produce(topic, null, Buffer.from(message), null, Date.now());
}

sendMessage('loan-applications-topic', 'Loan application submitted');
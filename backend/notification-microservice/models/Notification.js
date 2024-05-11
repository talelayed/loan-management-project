const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  recipient: String,
  message: String,
}, { timestamps: true });

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;

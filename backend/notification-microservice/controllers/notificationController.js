const Notification = require('../models/Notification');

exports.sendNotification = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: 'Notification sent successfully.' });
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

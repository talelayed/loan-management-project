const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'KEY1',
  secretAccessKey: 'KEY2',
  region: 'us-east-1'
});

const s3 = new AWS.S3();

exports.submitApplication = async (req, res) => {
  try {

    const params = {
      Bucket: 'loan',
      Key: 'loan_application_documents/' + req.file.originalname,
      Body: req.file.buffer
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.error('Error uploading document to Amazon S3:', err);
        res.status(500).json({ success: false, error: 'Error uploading document' });
      } else {
        console.log('Document uploaded successfully:', data.Location);
        res.status(200).json({ success: true, message: 'Loan application submitted successfully.' });
      }
    });
  } catch (error) {
    console.error('Error submitting loan application:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

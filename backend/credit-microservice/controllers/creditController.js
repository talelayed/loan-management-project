const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'KEY1',
  secretAccessKey: 'KEY2',
  region: 'us-east-1'
});

const s3 = new AWS.S3();

exports.generateCreditAgreement = async (req, res) => {
  try {

    const creditAgreement = {
      applicantId: req.body.applicantId,
      agreementText: 'This is the credit agreement.',
      amortizationSchedule: 'This is the amortization schedule.'
    };

    const agreementParams = {
      Bucket: 'loan',
      Key: 'credit_agreements/' + req.body.applicantId + '_agreement.txt',
      Body: creditAgreement.agreementText
    };

    const amortizationParams = {
      Bucket: 'loan',
      Key: 'credit_agreements/' + req.body.applicantId + '_amortization.txt',
      Body: creditAgreement.amortizationSchedule
    };

    const uploadAgreement = s3.upload(agreementParams).promise();
    const uploadAmortization = s3.upload(amortizationParams).promise();

    await Promise.all([uploadAgreement, uploadAmortization]);

    res.status(200).json({ success: true, message: 'Credit agreement generated and stored in Amazon S3.' });
  } catch (error) {
    console.error('Error generating credit agreement:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

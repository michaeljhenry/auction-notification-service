import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'us-east-2' });

async function sendMail(event, context) {
  const params = {
    Source: 'michaeljhenry@hotmail.ca',
    Destination: {
      ToAddresses: ['michaeljhenry02@gmail.com']
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello from Cha1nman'
        }
      },
      Subject: {
        Data: 'Test Mail'
      }
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch(error) {
    console.error(error);
  }
}

export const handler = sendMail;



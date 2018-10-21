import { Handler, Context, Callback } from 'aws-lambda';
import * as AWS from 'aws-sdk';

AWS.config.update({region: 'us-east-1'});

interface IHelloResponse {
	statusCode: number,
	body: string,
}

const sendVotePlanEmail: Handler = (_event: any, _context: Context, callback: Callback) => {
	const sendParams: AWS.SES.SendEmailRequest = {
		Source: 'andy@andybrauninger.com',
		Destination: {
			ToAddresses: [
				'andy@andybrauninger.com',
			]
		},
		Message: {
			Subject: {
				Charset: 'UTF-8',
				Data: 'Test email from the lambda',
			},
			Body: {
				Text: {
					Charset: 'UTF-8',
					Data: 'Four score and seven lambdas ago...",'
				},
			}
		}
	};

	new AWS.SES({ apiVersion: '2010-12-01'}).sendEmail(sendParams);

	console.log("Just attempted to send an email.");
	
	const response: IHelloResponse = {
		statusCode: 200,
		body: JSON.stringify({
			message: Math.floor(Math.random() * 100)
		})
	}

	callback(undefined, response);
};

export { sendVotePlanEmail }
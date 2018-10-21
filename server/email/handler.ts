import { Handler, Context, Callback } from 'aws-lambda';
import * as AWS from 'aws-sdk';

AWS.config.update({region: 'us-east-1'});

function getSenderName(): string {
	return "VotePlan by Voting Voices <andy@andybrauninger.com>";
}

function getSubject(): string {
	return "Your VotePlan";
}

function getPlainTextBody(planPageUrl: string): string {
	return `Your voice matters. Get out there and vote in the midterms!\n\nYou can view your VotePlan here:\n${planPageUrl}`;
}

const sendVotePlanEmail: Handler = (event: any, _context: Context, callback: Callback) => {
	const { emailAddress, planPageQueryString } = JSON.parse(event.body);
	const planPageUrl = `http://votingvoices.org/voteplan/#/Plan?${planPageQueryString}`;

	const sendParams: AWS.SES.SendEmailRequest = {
		Source: getSenderName(),
		Destination: {
			ToAddresses: [
				emailAddress,
			]
		},
		Message: {
			Subject: {
				Charset: 'UTF-8',
				Data: getSubject(),
			},
			Body: {
				Text: {
					Charset: 'UTF-8',
					Data: getPlainTextBody(planPageUrl),
				},
			}
		}
	};

	new AWS.SES({ apiVersion: '2010-12-01'}).sendEmail(sendParams).promise()
		.then((data) => {
			console.log(data.MessageId);
		}).catch((err) => {
			console.error(err, err.stack);
		});

	console.log("Just attempted to send an email.");

	const response = {
		statusCode: 200,
		headers: {	
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true,
		},
		body: JSON.stringify({}),
	}

	callback(undefined, response);
};

export { sendVotePlanEmail }
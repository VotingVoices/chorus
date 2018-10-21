import { Handler, Context, Callback } from 'aws-lambda';
import * as AWS from 'aws-sdk';

AWS.config.update({region: 'us-east-1'});

interface IHelloResponse {
	statusCode: number,
	body: string,
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
		Source: 'VotePlan by VotingVoices <andy@andybrauninger.com>',
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

	const response: IHelloResponse = {
		statusCode: 200,
		body: JSON.stringify({
			message: Math.floor(Math.random() * 100)
		})
	}

	callback(undefined, response);
};

export { sendVotePlanEmail }
import { Handler, Context, Callback } from 'aws-lambda';
import * as AWS from 'aws-sdk';

AWS.config.update({region: 'us-east-1'});

export enum Language {
	English = 'En',
	Spanish = 'Es',
}

function getSenderName(language: Language): string {
	if (language === Language.English || language === undefined) {
		return "VotePlan by Voting Voices <plan@votingvoices.org>";
	}
	if (language === Language.Spanish) {
		// TODO: Confirm translation
		return "VotePlan por Voting Voices <plan@votingvoices.org>";
	}

	throw new Error("Unrecognized language.");
}

function getSubject(language: Language): string {
	if (language === Language.English || language === undefined) {
		return "Your VotePlan";
	}
	if (language === Language.Spanish) {
		return "Su VotePlan";
	}

	throw new Error("Unrecognized language.");
}

function getPlainTextBody(language: Language, planPageUrl: string): string {
	if (language === Language.English || language === undefined) {
		return `Your voice matters. Get out there and vote in the midterms!\n\nYou can view your VotePlan here:\n${planPageUrl}`;
	}
	else if (language === Language.Spanish) {
		// TODO: Confirm translation
		return `Su voz importa. Salga y vote en las elecciones de término medio.\n\nUsted puede ver su VotePlan aquí:\n${planPageUrl}`;
	}

	throw new Error("Unrecognized language.");
}

const sendVotePlanEmail: Handler = (event: any, _context: Context, callback: Callback) => {
	const { emailAddress, planPageQueryString, language } = JSON.parse(event.body);
	const planPageUrl = `http://votingvoices.org/voteplan/#/Plan?${planPageQueryString}`;

	const sendParams: AWS.SES.SendEmailRequest = {
		Source: getSenderName(language),
		Destination: {
			ToAddresses: [
				emailAddress,
			]
		},
		Message: {
			Subject: {
				Charset: 'UTF-8',
				Data: getSubject(language),
			},
			Body: {
				Text: {
					Charset: 'UTF-8',
					Data: getPlainTextBody(language, planPageUrl),
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
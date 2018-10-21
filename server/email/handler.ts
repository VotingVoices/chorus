import { Handler, Context, Callback } from 'aws-lambda';

interface IHelloResponse {
	statusCode: number,
	body: string,
}

const hello: Handler = (_event: any, _context: Context, callback: Callback) => {
	const response: IHelloResponse = {
		statusCode: 200,
		body: JSON.stringify({
			message: Math.floor(Math.random() * 100)
		})
	}

	callback(undefined, response);
};

export { hello }
import { ActionType } from 'typesafe-actions';
import { TelemetryActionType } from './InternalTypes';
import * as telemetryActions from './TelemetryActions';

const TelemetryEndpoint = 'http://localhost:3001/';

// Courtesy of 'broofa's answer in https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
/*function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}*/

function uniqueId(): string {
	// TODO: This is almost certainly not a good way to generate IDs.
	return Math.random().toString();
}

export class TelemetrySession {
	private sessionId: string;

	constructor() {
		this.sessionId = uniqueId();
	}

	public recordStart() {
		fetch(TelemetryEndpoint, {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ sessionId: this.sessionId, event: "StartSession" })
		}).then(res => {
			if (res.ok) {
				return res.json();
			}
			else {
				throw new Error(`Failed HTTP response: ${res.status}`);
			}
		}).catch(err => {
			// TODO: Do not throw for ship/production users.
			throw new Error(`Unable to POST to elemetry endpoint.  err: ${err}`);
		});
	}
}

type TelemetryAction = ActionType<typeof telemetryActions>;

export function createTelemetrySession(): TelemetrySession {
	return new TelemetrySession();
}

export const telemetryMiddleware = (session: TelemetrySession) => () => (next: any) => (action: TelemetryAction) => {
	switch (action.type) {
		case TelemetryActionType.START: {
			session.recordStart();
			break;
		}

		default: {
			return next(action);
		}
	}
}
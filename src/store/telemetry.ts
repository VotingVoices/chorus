// import { ActionType } from 'typesafe-actions';
// import { TelemetryActionType } from './InternalTypes';
// import * as telemetryActions from './TelemetryActions';
// import { RouterActionType } from './InternalTypes';

const TelemetryEndpoint = 'http://localhost:3001';

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
		throw new Error("recordStart");
		fetch(TelemetryEndpoint);
	}

	// TODO: Remove
	public getSessionId() {
		return this.sessionId;
	}
}

// type TelemetryAction = ActionType<typeof telemetryActions>;

export function createTelemetrySession(): TelemetrySession {
	return new TelemetrySession();
}

/*
export const telemetryMiddleware = (session: TelemetrySession) => () => (next: any) => (action: TelemetryAction) => {
	/*if (action.type === 'ROUTER/LOCATION_CHANGE') {
		return next(action);
	}*/
/*
	throw new Error(`Action type: ${action.type}`);

	switch (action.type) {
		case TelemetryActionType.START: {
			throw new Error('telemetryMiddleWare');
			session.recordStart();
			break;
		}

		/*case RouterActionType.LOCATION_CHANGE: {
			return next(action);
		}*/
/*
		default: {
			// throw new Error(`Action type: ${action.type}`);
			return next(action);
		}
	}
}

export * from './TelemetryActions';*/
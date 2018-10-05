import { ActionType } from 'typesafe-actions';
import { /*Action as HistoryAction, */History/*, Location*/ } from 'history';
import { Store, AnyAction } from 'redux';

import * as internalActions from './RouterInternalActions';
// import { locationChange } from './RouterActions';
import { RouterInternalActionType, TelemetryActionType } from './InternalTypes';
import { TelemetrySession } from './telemetry';
import { IQuestionnaireState } from './Types';

type RouterInternalAction = ActionType<typeof internalActions>;

export const routerMiddleware = (history: History, session: TelemetrySession) => () => (next: any) => (action: RouterInternalAction) => {
	switch (action.type) {
		case RouterInternalActionType.PUSH: {
			history.push(action.payload.href);
			break;
		}

		case RouterInternalActionType.REPLACE: {
			history.replace(action.payload.href);
			break;
		}

		case RouterInternalActionType.GO: {
			history.go(action.payload.index);
			break;
		}

		case RouterInternalActionType.GO_BACK: {
			history.goBack();
			break;
		}

		case RouterInternalActionType.GO_FORWARD: {
			history.goForward();
			break;
		}

		case TelemetryActionType.START: {
			throw new Error("TelemetryActionType.START");
			session.recordStart();
		}

		default: {
			return next(action);
		}
	}
}

export function startHistoryListener(history: History, store: Store<IQuestionnaireState, AnyAction>) {
	/*
	history.listen((location: Location, historyAction: HistoryAction) => {
		store.dispatch(locationChange(
			location.pathname,
			location.search,
			location.hash,
			historyAction,
		));
	});

	store.dispatch(locationChange(
		history.location.pathname,
		history.location.search,
		history.location.hash,
		undefined));

	*/
}
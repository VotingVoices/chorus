// TODO: Rename file since there's no reducer here.

import { ActionType } from 'typesafe-actions';
import { Action as HistoryAction, History, Location } from 'history';

import * as internalActions from './InternalActions';
import { locationChange } from './Actions';
import { RouterInternalActionType } from './Types';

type RouterInternalAction = ActionType<typeof internalActions>;

// TODO: Move into its own file (Middleware.ts)?
export const routerMiddleware = (history: History) => () => (next: any) => (action: RouterInternalAction) => {
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

		default: {
			return next(action);
		}
	}
}

// TODO: Get rid of 'any' on 'store'
export function startHistoryListener(history: History, store: any) {
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
}
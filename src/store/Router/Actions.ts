import { action } from 'typesafe-actions';
import { Action as HistoryAction } from 'history';
import { IRouterLocationChangePayload, RouterActionType } from './Types';

export const locationChange = (pathname: string, search: string, hash: string, historyAction: HistoryAction | undefined) =>
	action(RouterActionType.LOCATION_CHANGE, { pathname, search, hash, historyAction } as IRouterLocationChangePayload);
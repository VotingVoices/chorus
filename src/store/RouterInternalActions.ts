import { action } from 'typesafe-actions';
import { IRouterPushReplacePayload, IRouterGoPayload, RouterInternalActionType, TelemetryActionType } from './InternalTypes';

export const push = (href: string) =>
	action(RouterInternalActionType.PUSH, { href } as IRouterPushReplacePayload);

export const replace = (href: string) =>
	action(RouterInternalActionType.REPLACE, { href } as IRouterPushReplacePayload);

export const go = (index: number) =>
	action(RouterInternalActionType.GO, { index } as IRouterGoPayload);

export const goBack = () =>
	action(RouterInternalActionType.GO_BACK);

export const goForward = () =>
	action(RouterInternalActionType.GO_FORWARD);

export const recordSessionStart = (foo: number) =>
	action(TelemetryActionType.START);
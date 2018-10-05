import { action } from 'typesafe-actions';
import { TelemetryActionType } from './InternalTypes';

export const recordSessionStart = (foo: number) =>
	action(TelemetryActionType.START);
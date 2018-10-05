import { action } from 'typesafe-actions';
import { TelemetryActionType } from './InternalTypes';

export const recordSessionStart = () =>
	action(TelemetryActionType.START);
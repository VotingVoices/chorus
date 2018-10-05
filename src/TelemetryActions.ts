// TODO: Move to a better location?

import { action } from 'typesafe-actions';
import { TelemetryActionType } from './TelemetryActionType';

export const start = () =>
	action(TelemetryActionType.START);
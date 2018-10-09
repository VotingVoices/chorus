import { action } from 'typesafe-actions';
import { TelemetryActionType } from './InternalTypes';

export const recordLandingPage = () =>
	action(TelemetryActionType.LANDING_PAGE);

export const recordStartSurvey = () =>
	action(TelemetryActionType.START);
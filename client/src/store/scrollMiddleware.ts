import { ActionType } from 'typesafe-actions';
import { TelemetryActionType } from './InternalTypes';
import { QuestionnaireActionType } from './Types';

import * as actions from './Actions';

type QuestionnaireAction = ActionType<typeof actions>;

export const scrollMiddleware = () => () => (next: any) => (action: QuestionnaireAction) => {
	switch (action.type) {
		case TelemetryActionType.PLAN_PAGE:
		case QuestionnaireActionType.START_SURVEY:
		case QuestionnaireActionType.START_OVER:
		case QuestionnaireActionType.PRIVACY_POLICY: {
			window.scrollTo(0, 0);
			break;
		}
	}

	return next(action);
}
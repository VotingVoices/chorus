import { AnswerId, IQuestionnaireState, IZipCodeAnswer } from './Types';

export function getLangParameter(state: IQuestionnaireState): string {
	return `lang=${state.currentLanguage}`;
}

function answerAsString(answer: AnswerId | IZipCodeAnswer): string | undefined {
	if (typeof answer === "object") {
		const zipCode = (answer as IZipCodeAnswer).zipCode;
		return zipCode !== "" ? zipCode : undefined;
	}
	else {
		return (answer as AnswerId).toString();
	}
}

export function getPlanPageQueryString(state: IQuestionnaireState): string {
	const langParameter = getLangParameter(state);

	const parameterList = state.answers.map(qa => ({questionId: qa.questionId, answerString: answerAsString(qa.answer)}))
		.filter(qas => qas.answerString !== undefined)
		.map(qas => `${qas.questionId}=${qas.answerString!}`);

	const queryStringParameters = parameterList.join('&');
	return `${queryStringParameters}&${langParameter}`;
}
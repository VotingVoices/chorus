import * as React from 'react';
import { AnswerId, QuestionId } from '../store';
import { getAnswerLabel, getQuestionFullLabel } from '../strings';

interface IPlanStepProps {
	questionId: QuestionId,
	answerId: AnswerId,
}

export class PlanStep extends React.Component<IPlanStepProps, any> {
	public render() {
		const { questionId, answerId } = this.props;

		const questionLabel = getQuestionFullLabel(questionId);
		const answerLabel = getAnswerLabel(answerId);

		return (
			<p key={questionId}>{questionLabel} = {answerLabel}</p>
		);
	}
}
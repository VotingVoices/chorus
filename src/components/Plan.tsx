import * as React from 'react';
import { IQuestionAndAnswer, QUESTIONS, PlanStepId } from '../store';
import { PlanStep } from './PlanStep';
import { getFollowUpStepInfo } from '../strings';

interface IPlanProps {
	answers: IQuestionAndAnswer[],
}

export class Plan extends React.Component<IPlanProps, any> {
	public render() {
		return (
			<div className="App">
				<header className="App-header">
					<p>This is your voting plan.</p>
				</header>
				<div>
					{this.props.answers.map(
						(qna: IQuestionAndAnswer) => {
							const question = QUESTIONS.find(q => q.id === qna.questionId);
							let step = PlanStepId.Undefined;
							if (question && question.resultingPlanStep)
							{
								step = question.resultingPlanStep[qna.answerId];
							}
							else
							{
								// Since not every question has output on the DOM, it seemed better to map answers to 
								// PlanStep in the Plan component
								return undefined;
							}
							const info = getFollowUpStepInfo(step);
							return (<PlanStep key={qna.questionId} {...info} />);
						}
					)}
				</div>
			</div>
		);
	}
}
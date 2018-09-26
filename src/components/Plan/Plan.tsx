import * as React from 'react';
import { getAnswerLabel, getQuestionFullLabel } from '../../strings';
import { ALL_QUESTION_IDS, IQuestionAndAnswer, QuestionId } from '../../store';

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
					{ALL_QUESTION_IDS.map(
						(questionId: QuestionId) => {
							const questionLabel = getQuestionFullLabel(questionId);
							const answer = this.props.answers.find(qa => qa.questionId === questionId);

							if (answer !== undefined) {
								const answerLabel = getAnswerLabel(answer!.answerId);
								return <p key={questionId}>{questionLabel} = {answerLabel}</p>
							}
							else {
								return <div key={questionId} />
							}
						}
					)}
				</div>
			</div>
		);
	}
}
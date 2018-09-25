import * as React from 'react';
import { connect} from 'react-redux';
import { getAnswerLabel } from '../Answer';
import { getQuestionFullLabel } from '../Question';
import { ALL_QUESTION_IDS, IQuestionAndAnswer, IQuestionnaireState, QuestionId } from '../../store';

interface IPropsFromState {
	answers: IQuestionAndAnswer[],
}

class InternalPlan extends React.Component<IPropsFromState, any> {
	public render() {
		return (
			<div className="App">
				<p>This is your voting plan.</p>
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

const mapStateToProps = (state: IQuestionnaireState) => ({
	answers: state.answers,
});

export const Plan = connect(mapStateToProps)(InternalPlan);
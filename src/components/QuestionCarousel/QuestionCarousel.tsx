import * as React from 'react';
import * as ReactCSSTransitionReplace from 'react-css-transition-replace';
import { connect} from 'react-redux';

import { IConnectedReduxProps } from '../../store';
import { Question } from '../Question';
import { DotNavigationBar } from '../DotNavigationBar';
import { QUESTIONS, IQuestion, IQuestionnaireState } from '../../store';
import { BACK_TRANSITION_NAME, FORWARD_TRANSITION_NAME } from '../../transitionNames';

import '../../App.css';

interface IPropsFromState {
	question: IQuestion,
	dotNavStep: number,
	transitionName: string,
}

class InternalQuestionCarousel extends React.Component<IConnectedReduxProps & IPropsFromState, any> {
	public render(): JSX.Element {
		return (
			<React.Fragment>
				<ReactCSSTransitionReplace
					transitionName={this.props.transitionName}
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={400} >
					<Question
						{...this.props}
						key={this.props.question.id}
						questionId={this.props.question.id}
						answers={QUESTIONS.find(q => q.id === this.props.question.id)!.answers} />
				</ReactCSSTransitionReplace>
				<DotNavigationBar
					stepCount={10}
					currentStep={this.props.dotNavStep}
					viewboxWidth={480}
					viewboxHeight={20}
					color='#E8E8E8'
					intervalWidth={50}
					strokeWidth={3}
					dotRadius={8} />
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	dotNavStep: state.dotNavStep,
	question: QUESTIONS.find(q => q.id === state.currentQuestionId)!,
	transitionName: state.mostRecentActionWasBackButton ? BACK_TRANSITION_NAME : FORWARD_TRANSITION_NAME,
});

export const QuestionCarousel = connect(mapStateToProps)(InternalQuestionCarousel);
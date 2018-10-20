import * as React from 'react';
import * as ReactCSSTransitionReplace from 'react-css-transition-replace';
import { connect} from 'react-redux';

import { DotNavigationBar } from './DotNavigationBar';
import { default as Question } from './Question';
import { default as StartOverButton, StartOverButtonType } from './StartOverButton';
import { IConnectedReduxProps, IQuestion, IQuestionnaireState, PLAN_DOT_NAV_STEP, QUESTIONS } from '../store';
import { getTransitionStyleInfo } from '../transitionNames';

import '../App.css';
import './Survey.css';

interface IPropsFromState {
	question: IQuestion,
	dotNavStep: number,
	transitionName: string,
}

class Survey extends React.Component<IConnectedReduxProps & IPropsFromState, any> {
	public render(): JSX.Element {
		return (
			<div className="Survey-body">
				<div className="question-container">
					<div className="question-container-2">
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
					</div>
				</div>

				<div className="dot-navigation">
					<DotNavigationBar
						stepCount={PLAN_DOT_NAV_STEP - 1}
						currentStep={this.props.dotNavStep}
						color='#E8E8E8'
						intervalWidth={32}
						strokeWidth={4}
						dotRadius={8} />
				</div>

				<div>
					<StartOverButton type={StartOverButtonType.Outline} {...this.props} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: IQuestionnaireState) => {
	const { transitionName } = getTransitionStyleInfo(state.mostRecentTransition);

	return {
		dotNavStep: state.dotNavStep,
		question: QUESTIONS.find(q => q.id === state.currentQuestionId)!,
		transitionName,
	};
}

export default connect(mapStateToProps)(Survey);
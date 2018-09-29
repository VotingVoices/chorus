import * as React from 'react';
import * as ReactCSSTransitionReplace from 'react-css-transition-replace';
import { connect} from 'react-redux';

import { DotNavigationBar } from './DotNavigationBar';
import { Question } from './Question';
import { StartOverButton } from './StartOverButton';
import { IConnectedReduxProps, IQuestion, IQuestionnaireState, PLAN_DOT_NAV_STEP, QUESTIONS } from '../store';
import { getTransitionName } from '../transitionNames';

import '../App.css';
import './Survey.css';

interface IPropsFromState {
	question: IQuestion,
	dotNavStep: number,
	transitionName: string,
}

class InternalSurvey extends React.Component<IConnectedReduxProps & IPropsFromState, any> {
	public render(): JSX.Element {
		return (
			<header className="App-header">
				<div className="Survey-body">
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

					<div>
						<DotNavigationBar
							stepCount={PLAN_DOT_NAV_STEP - 1}
							currentStep={this.props.dotNavStep}
							color='#E8E8E8'
							intervalWidth={50}
							strokeWidth={3}
							dotRadius={8} />
					</div>

					<StartOverButton {...this.props} />
				</div>
			</header>
		);
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	dotNavStep: state.dotNavStep,
	question: QUESTIONS.find(q => q.id === state.currentQuestionId)!,
	transitionName: getTransitionName(state.mostRecentTransition),
});

export const Survey = connect(mapStateToProps)(InternalSurvey);
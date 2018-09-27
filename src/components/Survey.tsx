import * as React from 'react';
import * as ReactCSSTransitionReplace from 'react-css-transition-replace';
import { connect} from 'react-redux';
import { Button } from 'react-bootstrap';
import { Dispatch } from 'redux';

import { IConnectedReduxProps } from '../store';
import { Question } from './Question';
import { DotNavigationBar } from './DotNavigationBar';
import { QUESTIONS, IQuestion, IQuestionnaireState, PLAN_DOT_NAV_STEP, startOver } from '../store';
import { getTransitionName } from '../transitionNames';

import '../App.css';

interface IPropsFromState {
	question: IQuestion,
	dotNavStep: number,
	transitionName: string,
}

interface IPropsFromDispatch {
	startOver: typeof startOver,
}

class InternalSurvey extends React.Component<IConnectedReduxProps & IPropsFromState & IPropsFromDispatch, any> {
	public render(): JSX.Element {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Voting Voices</h1>
				</header>

				<p className="App-intro" />
				
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
						viewboxWidth={520}
						viewboxHeight={20}
						color='#E8E8E8'
						intervalWidth={50}
						strokeWidth={3}
						dotRadius={8} />
				</div>

				<Button type="button" onClick={this.onStartOverClick()}>Start Over</Button>
			</div>
		);
	}

	private onStartOverClick() {
		return (ev: React.MouseEvent<Button>) => {
			this.props.startOver();
		};
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	dotNavStep: state.dotNavStep,
	question: QUESTIONS.find(q => q.id === state.currentQuestionId)!,
	transitionName: getTransitionName(state.mostRecentTransition),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    startOver: () => dispatch(startOver())
});

export const Survey = connect(mapStateToProps, mapDispatchToProps)(InternalSurvey);
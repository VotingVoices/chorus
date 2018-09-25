import * as React from 'react';
import * as ReactCSSTransitionReplace from 'react-css-transition-replace';
import { /*Location, Action,*/ UnregisterCallback } from 'history';
// import { Redirect } from 'react-router-dom';
import { connect} from 'react-redux';

import { IConnectedReduxProps/*, QuestionId*/ } from '../../store';
import { Question } from '../Question';
// import { IAnswerProps } from '../Answer';
import { DotNavigationBar } from '../DotNavigationBar';
import { QUESTIONS, IQuestion, IQuestionnaireState } from '../../store';

import './QuestionCarousel.css';

interface IPropsFromState {
    question: IQuestion;
    dotNavStep: number;
}

export interface IQuestionCarouselState {
    redirectToPlan: boolean;
    transitionName: string;
}

// TODO: Remove
/*
function getQuestionIdFromPath(path: string): QuestionId {
    const questionIdStr = path.slice(1, path.length);
    return questionIdStr as QuestionId;
}
*/

const forwardTransitionName: string = "carousel-cross-fade";
// const backTransitionName: string = "reverse-carousel-cross-fade";

class InternalQuestionCarousel extends React.Component<IConnectedReduxProps & IPropsFromState, any>
{
    private historyUnregister: UnregisterCallback | undefined;

    constructor(props: IConnectedReduxProps & IPropsFromState, context?: any) {
        super(props, context);

        // TODO: Remove
        /*
        let questionId = QuestionId.AreYouRegistered;
        let pushHistory = true;

        if (this.props.location.pathname.length > 0) {
            questionId = getQuestionIdFromPath(this.props.location.pathname);
            pushHistory = false;
        }

        const question = props.questions.find(q => q.id === questionId);

        this.state = {
            redirectToPlan: false,
            transitionName: forwardTransitionName,
        };

        if (pushHistory) {
            this.props.history.push({ pathname: questionId });
        }
        */
    }

    public componentDidMount() {
        // TODO: Remove
        /*
        this.historyUnregister = this.props.history.listen((location, action) => {
            // this._locationChanged(location, action);
        });
        */
    }

    public componentWillUnmount() {
        if (this.historyUnregister !== undefined) {
            this.historyUnregister();
        }
    }

      public render(): JSX.Element {
          return (
              <div>
                  {this._renderRedirect()}
                  <ReactCSSTransitionReplace
                      transitionName={forwardTransitionName}
                      transitionEnterTimeout={1000}
                      transitionLeaveTimeout={400} >
                      <Question
                          {...this.props}
                          key={this.props.question.id} />
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
                </div>
          );
      }

      // TODO: Remove
      /*
    private _onQuestionAnswered = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, answer?: IAnswerProps) => {
        const { questions } = this.props;
        const currentQuestion = questions.find(q => q.id === this.state.currentQuestionId);

        const answers = this.state.answers;
        const answerId = answer!.answerId;

        // TODO: There's probably a more elegant way to do this...
        const existingAnswer = answers.find(qa => qa.questionId === currentQuestion!.id);
        if (existingAnswer === undefined) {
            answers.push({ questionId: currentQuestion!.id, answerId });
        }
        else {
            existingAnswer!.answerId = answerId;
        }

        const nextQuestionId = currentQuestion!.nextQuestionId(answerId);

        if (nextQuestionId === QuestionId.END_OF_QUESTIONS) {
            // Unregister from history so that we don't get confused inside our own location-changed handler.
            this.historyUnregister!();
            this.historyUnregister = undefined;

            // Redirect to the plan page.
            this.setState({
                answers,
                redirectToPlan: true,
            });
        }
        else {
            this.props.history.push({ pathname: nextQuestionId });

            this.setState({
                answers,
                currentQuestionId: nextQuestionId,
                currentDotNavStep: questions.find(q => q.id === nextQuestionId)!.dotNavStep,
            });
        }
    }

    private _locationChanged(location: Location, action: Action)
    {
        const path = this.props.history.location.pathname;
        const questionIdStr = path.slice(1, path.length);
        const newQuestionId = questionIdStr as QuestionId;
        const { questions } = this.props;

        let transitionName = forwardTransitionName;
        if (action === 'POP') {
            transitionName = backTransitionName;
        }

        this.setState({
            currentQuestionId: newQuestionId,
            currentDotNavStep: questions.find(q => q.id === newQuestionId)!.dotNavStep,
            transitionName,
        });
    }
    */

    private _renderRedirect = () => {
        // TODO: Remove
        /*
        if (this.state.redirectToPlan) {
            const queryStringParameters = this.state.answers.map(qa => `${qa.questionId}=${qa.answerId}`).join('&');
            const planUrl = `/plan?${queryStringParameters}`;
            return (
              <Redirect to={planUrl} />
            );
        }
        else {*/
            return (
              <div />
            );
        // }
    }
}


const mapStateToProps = (state: IQuestionnaireState) => ({
    dotNavStep: state.dotNavStep,
    question: QUESTIONS.find(q => q.id === state.currentQuestionId)!,
});

export const QuestionCarousel = connect(mapStateToProps)(InternalQuestionCarousel);
import * as React from 'react';
import * as ReactCSSTransitionReplace from 'react-css-transition-replace';
import { Location, Action, UnregisterCallback } from 'history';

import { IConnectedReduxProps, IQuestionAndAnswer, QuestionId } from '../../store';
import { IQuestionCarouselProps } from './QuestionCarouselTypes';
import { Question } from '../Question';
import { IAnswerProps } from '../Answer';
import { DotNavigationBar } from '../DotNavigationBar';
import { Redirect, withRouter } from 'react-router-dom';

import './QuestionCarousel.css';

export interface IQuestionCarouselState {
    answers: IQuestionAndAnswer[];
    currentQuestionId: QuestionId;
    currentDotNavStep: number;
    redirectToPlan: boolean;
    transitionName: string;
}

function getQuestionIdFromPath(path: string): QuestionId {
    const questionIdStr = path.slice(1, path.length);
    return questionIdStr as QuestionId;
}

const forwardTransitionName: string = "carousel-cross-fade";
const backTransitionName: string = "reverse-carousel-cross-fade";

class QuestionCarouselBase extends React.Component<IQuestionCarouselProps & IConnectedReduxProps, IQuestionCarouselState>
{
    private historyUnregister: UnregisterCallback | undefined;

    constructor(props: IQuestionCarouselProps & IConnectedReduxProps, context?: any) {
        super(props, context);

        let questionId = QuestionId.AreYouRegistered;
        let pushHistory = true;

        if (this.props.location.pathname.length > 0) {
            questionId = getQuestionIdFromPath(this.props.location.pathname);
            pushHistory = false;
        }

        const question = props.questions.find(q => q.id === questionId);

        this.state = {
            answers: [],
            currentDotNavStep: question!.dotNavStep,
            currentQuestionId: questionId,
            redirectToPlan: false,
            transitionName: forwardTransitionName,
        };

        if (pushHistory) {
            this.props.history.push({ pathname: questionId });
        }
    }

    public componentDidMount() {
        this.historyUnregister = this.props.history.listen((location, action) => {
            this._locationChanged(location, action);
        });
    }

    public componentWillUnmount() {
        if (this.historyUnregister !== undefined) {
            this.historyUnregister();
        }
    }

      public render(): JSX.Element {
          const currentQuestion = this.props.questions.find(q => q.id === this.state.currentQuestionId);

          return (
              <div>
                  {this._renderRedirect()}
                  <ReactCSSTransitionReplace
                      transitionName={this.state.transitionName}
                      transitionEnterTimeout={1000}
                      transitionLeaveTimeout={400} >
                      <Question
                          {...this.props}
                          questionId={currentQuestion!.id}
                          answers={currentQuestion!.answers}
                          key={currentQuestion!.id}
                          onChange={this._onQuestionAnswered} />
                  </ReactCSSTransitionReplace>
                  <DotNavigationBar
                      stepCount={10}
                      currentStep={this.state.currentDotNavStep}
                      viewboxWidth={480}
                      viewboxHeight={20}
                      color='#E8E8E8'
                      intervalWidth={50}
                      strokeWidth={3}
                      dotRadius={8} />
                </div>
          );
      }

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

    private _renderRedirect = () => {
        if (this.state.redirectToPlan) {
            const queryStringParameters = this.state.answers.map(qa => `${qa.questionId}=${qa.answerId}`).join('&');
            const planUrl = `/plan?${queryStringParameters}`;
            return (
              <Redirect to={planUrl} />
            );
        }
        else {
            return (
              <div />
            );
        }
    }
}

export const QuestionCarousel = withRouter(QuestionCarouselBase);
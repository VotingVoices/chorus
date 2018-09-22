import * as React from 'react';
import * as ReactCSSTransitionReplace from 'react-css-transition-replace';
import { createHashHistory, History } from 'history';
import './QuestionCarousel.css';
import { IQuestion, IQuestionCarouselProps } from './QuestionCarouselTypes';
import { Question, QuestionId } from '../Question';
import { AnswerId, IAnswerProps } from '../Answer';
import { DotNavigationBar } from '../DotNavigationBar';
import { Redirect } from 'react-router-dom';

interface IQuestionAndAnswer {
    questionId: QuestionId;
    answerId: AnswerId;
}

export interface IQuestionCarouselState {
    answers: IQuestionAndAnswer[];
    currentQuestionId: QuestionId;
    currentDotNavStep: number;
    redirectToPlan: boolean;
}

function findQuestion(questions: IQuestion[], id: QuestionId) : IQuestion {
    for (const q of questions) {
        if (q.id === id) {
            return q;
        }
    }

    throw new Error(`Unrecognized question ID: ${id}`);
}

export class QuestionCarousel extends React.Component<IQuestionCarouselProps, IQuestionCarouselState>
{
    private history: History;

    constructor(props: IQuestionCarouselProps, context?: any) {
        super(props, context);

        const firstQuestionId = QuestionId.AreYouRegistered;
        const firstQuestion = findQuestion(props.questions, firstQuestionId);

        this.state = {
            answers: [],
            currentDotNavStep: firstQuestion.dotNavStep,
            currentQuestionId: firstQuestionId,
            redirectToPlan: false,
        };

        this.history = createHashHistory();
        this.history.push({ pathname: firstQuestionId, key: firstQuestionId });

        this.history.listen(() => {
            this._locationChanged();
        });
    }

      public render(): JSX.Element {
          const currentQuestion = findQuestion(this.props.questions, this.state.currentQuestionId);

          return (
              <div>
                  {this._renderRedirect()}
                  <ReactCSSTransitionReplace
                      transitionName="carousel-cross-fade" 
                      transitionEnterTimeout={1000}
                      transitionLeaveTimeout={400} >
                      <Question
                          id={currentQuestion.id}
                          answers={currentQuestion.answers}
                          key={currentQuestion.id}
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
        const currentQuestion = findQuestion(questions, this.state.currentQuestionId);

        const answers = this.state.answers;
        answers.push({ questionId: currentQuestion.id, answerId: answer!.answerId });

        const nextQuestionId = currentQuestion.nextQuestionId(answer!.answerId);

        if (nextQuestionId === QuestionId.END_OF_QUESTIONS) {
            this.setState({
                answers,
                redirectToPlan: true,
            });
        }
        else {
            this.history.push({ pathname: nextQuestionId, key: nextQuestionId });

            this.setState({
                answers,
                currentQuestionId: nextQuestionId,
                currentDotNavStep: findQuestion(questions, nextQuestionId).dotNavStep,
            });
        }
    }

    private _locationChanged()
    {
        const newQuestionId = this.history.location.key! as QuestionId;
        const { questions } = this.props;

        this.setState({
            currentQuestionId: newQuestionId,
            currentDotNavStep: findQuestion(questions, newQuestionId).dotNavStep,
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
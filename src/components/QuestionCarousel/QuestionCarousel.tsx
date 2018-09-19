import * as React from 'react';
import * as ReactCSSTransitionReplace from 'react-css-transition-replace';
import './QuestionCarousel.css';
import { IQuestion, IQuestionCarouselProps, QuestionId } from './QuestionCarouselTypes';
import { Question } from '../Question';
import { IAnswerProps } from '../Answer';
import { DotNavigationBar } from '../DotNavigationBar';
import { Redirect } from 'react-router-dom';

interface IQuestionAndAnswer {
    questionId: QuestionId;
    answerKey: string;
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

    throw new Error("Unrecognized question ID.");
}

export class QuestionCarousel extends React.Component<IQuestionCarouselProps, IQuestionCarouselState>
{
    constructor(props: IQuestionCarouselProps, context?: any) {
        super(props, context);
        this.state = {
            answers: [],
            currentDotNavStep: props.questions[0].dotNavStep,
            currentQuestionId: QuestionId.AreYouRegistered,
            redirectToPlan: false,
        };
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
                          {...currentQuestion.questionProps}
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
        answers.push({ questionId: currentQuestion.id, answerKey: answer!.key });

        const nextQuestionId = currentQuestion.nextQuestionId(answer!.key);

        if (nextQuestionId === QuestionId.END_OF_QUESTIONS) {
            this.setState({
                answers,
                redirectToPlan: true,
            });
        }
        else {
            this.setState({
                answers,
                currentDotNavStep: findQuestion(questions, nextQuestionId).dotNavStep,
                currentQuestionId: nextQuestionId,
            });
        }
    }

    private _renderRedirect = () => {
        if (this.state.redirectToPlan) {
            const queryStringParameters = this.state.answers.map(qa => `${qa.questionId}=${qa.answerKey}`).join('&');
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
import * as React from 'react';
import * as ReactCSSTransitionReplace from 'react-css-transition-replace';
import './QuestionCarousel.css';
import { IQuestionCarouselProps } from './QuestionCarouselTypes';
import { Question } from '../Question';
import { IAnswerProps } from '../Answer';
import { DotNavigationBar } from '../DotNavigationBar';
import { Redirect } from 'react-router-dom';

export interface IQuestionCarouselState {
    currentQuestionId: number;
    currentDotNavStep: number;
    redirectToPlan: boolean;
  }

export class QuestionCarousel extends React.Component<IQuestionCarouselProps, IQuestionCarouselState>
{
    constructor(props: IQuestionCarouselProps, context?: any) {
        super(props, context);
        this.state = {
            currentDotNavStep: props.questions[0].dotNavStep,
            currentQuestionId: 0,
            redirectToPlan: false,
        };
    }

      public render(): JSX.Element {
          const currentQuestion = this.props.questions[this.state.currentQuestionId];
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
        const currentQuestion = questions[this.state.currentQuestionId];
        const nextQuestionId = currentQuestion.nextQuestionId(answer!.key);

        if (nextQuestionId === -1) {
            this.setState({
                redirectToPlan: true,
            });
        }
        else {
            this.setState({
                currentDotNavStep: questions[nextQuestionId].dotNavStep,
                currentQuestionId: nextQuestionId,
            });
        }
    }

    private _renderRedirect = () => {
        if (this.state.redirectToPlan) {
            return (
              <Redirect to='/plan' />
            );
        }
        else {
            return (
              <div />
            );
        }
    }
}
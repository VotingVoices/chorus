import * as React from 'react';
import * as ReactCSSTransitionReplace from 'react-css-transition-replace';
import './QuestionCarousel.css';
import { IQuestionCarouselProps } from './QuestionCarouselTypes';
import { Question } from '../Question';
import { IAnswerProps } from '../Answer';
import { DotNavigationBar } from '../DotNavigationBar';
// import './QuestionCarousel.css';

export interface IQuestionCarouselState {
    currentQuestionId: number;
    currentDotNavStep: number;
  }

export class QuestionCarousel extends React.Component<IQuestionCarouselProps, IQuestionCarouselState>
{
    constructor(props: IQuestionCarouselProps, context?: any) {
        super(props, context);
        this.state = {
            currentDotNavStep: props.questions[0].dotNavStep,
            currentQuestionId: 0,
        };
    }

      public render(): JSX.Element {
          const currentQuestion = this.props.questions[this.state.currentQuestionId];
          return (
              <div>
                <ReactCSSTransitionReplace transitionName="carousel-cross-fade" 
                           transitionEnterTimeout={1000} transitionLeaveTimeout={400} >
                    <Question {...currentQuestion.questionProps} key={currentQuestion.id} onChange={this._onQuestionAnswered} />
                </ReactCSSTransitionReplace>
                <DotNavigationBar currentStep={this.state.currentDotNavStep} />
              </div>
          );
      }

    private _onQuestionAnswered = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, answer?: IAnswerProps) => {
        const { questions } = this.props;
        const currentQuestion = questions[this.state.currentQuestionId];
        const nextQuestionId = currentQuestion.nextQuestionId(answer!.key);
        this.setState({
            currentDotNavStep: questions[nextQuestionId].dotNavStep,
            currentQuestionId: nextQuestionId,
        });
    }
}
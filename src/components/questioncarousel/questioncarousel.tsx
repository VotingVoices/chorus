import * as React from 'react';
import { IQuestionCarouselProps } from './questioncarouseltypes';
import { Question } from '../question';
import { IAnswerProps } from '../answer';
// import './QuestionCarousel.css';

export interface IQuestionCarouselState {
    currentQuestionId: number;
  }

export class QuestionCarousel extends React.Component<IQuestionCarouselProps, IQuestionCarouselState>
{
    constructor(props: any, context?: any) {
        super(props, context);
        this.state = {
          currentQuestionId: 0
        };
      }

      public render(): JSX.Element {
          const currentQuestion = this.props.questions[this.state.currentQuestionId];
          return (
              <Question {...currentQuestion.questionProps} onChange={this._onQuestionAnswered} />
          );
      }

      private _onQuestionAnswered = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, answer?: IAnswerProps) => {
          const currentQuestion = this.props.questions[this.state.currentQuestionId];
          this.setState({
               currentQuestionId: currentQuestion.nextQuestionId(answer!.key) 
            });
      }
}
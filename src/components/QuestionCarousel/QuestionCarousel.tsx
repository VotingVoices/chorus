import * as React from 'react';
import * as ReactCSSTransitionReplace from 'react-css-transition-replace';
import { connect} from 'react-redux';

import { IConnectedReduxProps } from '../../store';
import { Question } from '../Question';
import { DotNavigationBar } from '../DotNavigationBar';
import { QUESTIONS, IQuestion, IQuestionnaireState } from '../../store';

import './QuestionCarousel.css';

interface IPropsFromState {
    question: IQuestion;
    dotNavStep: number;
    transitionName: string;
}

const forwardTransitionName: string = "carousel-cross-fade";
const backTransitionName: string = "reverse-carousel-cross-fade";

class InternalQuestionCarousel extends React.Component<IConnectedReduxProps & IPropsFromState, any> {
    constructor(props: IConnectedReduxProps & IPropsFromState, context?: any) {
        super(props, context);
    }

      public render(): JSX.Element {
          return (
              <div>
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
}


const mapStateToProps = (state: IQuestionnaireState) => ({
    dotNavStep: state.dotNavStep,
    question: QUESTIONS.find(q => q.id === state.currentQuestionId)!,
    transitionName: state.mostRecentActionWasBackButton ? backTransitionName : forwardTransitionName,
});

export const QuestionCarousel = connect(mapStateToProps)(InternalQuestionCarousel);
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect} from 'react-redux';

import { Answer } from '../Answer';
import { AnswerId, answerQuestion, IConnectedReduxProps, IQuestionnaireState, QUESTIONS, QuestionId } from '../../store';
import { getQuestionFullLabel } from './QuestionTypes';

import './Question.css';

interface IPropsFromState {
    questionId: QuestionId;
    answers: AnswerId[];
}

interface IPropsFromDispatch {
    answerQuestion: typeof answerQuestion;
}

// TODO: Can we rename 'InternalQuestion' to 'Question'?
class InternalQuestion extends React.Component<IConnectedReduxProps & IPropsFromState & IPropsFromDispatch, any> {
    public render(): JSX.Element {
        const { questionId, answers } = this.props;
        const label = getQuestionFullLabel(questionId);

        return (
            <div>
                <div className="question-label">{label}</div>
                <div className="answer-group">
                    {answers.map(
                        (answerId: AnswerId) => {
                            return (<Answer onClick={this._onClick(answerId)} answerId={answerId} key={answerId} />);
                        }
                    )}
                </div>
            </div>
        );
    }

    private _onClick = (answerId: AnswerId) => {
        return (ev: React.MouseEvent<HTMLElement | HTMLInputElement>) => {
            const { questionId, answers } = this.props;

            const answer = answers.find((o: AnswerId) => o === answerId );

            this.props.answerQuestion(questionId, answer!); 
        };
    };
}

const mapStateToProps = (state: IQuestionnaireState) => ({
    questionId: state.currentQuestionId,
    answers: QUESTIONS.find(q => q.id === state.currentQuestionId)!.answers
} as IPropsFromState);

const mapDispatchToProps = (dispatch: Dispatch) => ({
    answerQuestion: (questionId: QuestionId, answerId: AnswerId) => dispatch(answerQuestion(questionId, answerId))
});

export const Question = connect(mapStateToProps, mapDispatchToProps)(InternalQuestion);
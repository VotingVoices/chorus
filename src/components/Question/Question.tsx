import * as React from 'react';
import { Dispatch } from 'redux';
import { connect} from 'react-redux';

import { Answer, AnswerId } from '../Answer';
import { answerQuestion, IConnectedReduxProps, IQuestionnaireState } from '../../store';
import { getQuestionFullLabel, IQuestionProps } from './QuestionTypes';

import './Question.css';

interface IPropsFromDispatch {
    answerQuestion: typeof answerQuestion;
}

// TODO: Can we rename 'InternalQuestion' to 'Question'?
class InternalQuestion extends React.Component<IQuestionProps & IConnectedReduxProps & IPropsFromDispatch, any> {
    public render(): JSX.Element {
        const { id, answers } = this.props;
        const label = getQuestionFullLabel(id);

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
            this.props.answerQuestion();

            const { onChange, answers = [] } = this.props;
            const option = answers.find((o: AnswerId) => o === answerId );
            if (onChange)
            {
                onChange(ev, { answerId: option! });
            }   
        };
    };
}

const mapStateToProps = (state: IQuestionnaireState) => ({ });

const mapDispatchToProps = (dispatch: Dispatch) => ({
    answerQuestion: () => dispatch(answerQuestion())
});

// TODO: Ugh all caps.
export const QUESTION = connect(mapStateToProps, mapDispatchToProps)(InternalQuestion);
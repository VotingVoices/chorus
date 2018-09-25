import { IQuestion } from '../../store';
import { RouteComponentProps } from 'react-router-dom';

export interface IQuestionCarouselProps extends RouteComponentProps<any>
{
    questions: IQuestion[];
}
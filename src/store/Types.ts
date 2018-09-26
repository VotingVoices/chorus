import { Action, AnyAction, Dispatch } from 'redux';

export enum QuestionId {
	AreYouRegistered = 'Reg',
	VoteByMailState = 'St',
	PollingLocation = 'PllLoc',
	SpecialAccommodations = 'Accm',
	TransportationMethod = 'Trns',
	AbsenteeBallot = 'Abs',
	MissWork = 'MssWrk',
	FamiliarWithBallot = 'Fmlr',
	PeopleToInvite = 'Inv',
	Emotion = 'Em',
}

export const ALL_QUESTION_IDS: QuestionId[] = [
	QuestionId.AreYouRegistered,
	QuestionId.VoteByMailState,
	QuestionId.PollingLocation,
	QuestionId.SpecialAccommodations,
	QuestionId.TransportationMethod,
	QuestionId.AbsenteeBallot,
	QuestionId.MissWork,
	QuestionId.FamiliarWithBallot,
	QuestionId.PeopleToInvite,
	QuestionId.Emotion,
];

export enum AnswerId {
	Yes = 'Y',
	No = 'N',
	EmphaticYes = 'EY',
	UncertainNo = 'UN',
	DontKnow = 'DN',
	Other = 'Oth',
	Washington = 'WA',
	Oregon = 'OR',
	Colorado = 'CO',
	OtherState = 'OthSt',
	WalkOrBike = 'WB',
	DriveMyself = 'DrMy',
	RideShare = 'RiSh',
	AskSomeoneForRide = 'Ask',
	FamilyMembers = 'Fam',
	Coworkers = 'Cowrk',
	Friends = 'Frnd',
	SomeoneElse = 'Else',
	NoThanks = 'NT',
	Excited = 'Exc',
	Happy = 'Hppy',
	Nervous = 'Nrv',
	Shocked = 'Shck',
	Meh = 'Mh',
	Worried = 'Wrd',
	Sad = 'Sd',
	Angry = 'Ang'
}

export interface IQuestionAndAnswer {
	questionId: QuestionId;
	answerId: AnswerId;
}

export const enum AppView {
	Questionnaire,
	Plan,
}

export const enum MostRecentTransition {
	Back,
	Forward,
}

export interface IQuestionnaireState {
	readonly answers: IQuestionAndAnswer[];
	readonly currentView: AppView;
	readonly currentQuestionId: QuestionId | undefined;
	readonly dotNavStep: number;
	readonly counter: number;
	readonly mostRecentTransition: MostRecentTransition | undefined;
}

export const enum QuestionnaireActionType {
	ANSWER_QUESTION = 'QUESTIONNAIRE/ANSWER_QUESTION',
	START_OVER = 'QUESTIONNAIRE/START_OVER',
}

export interface IConnectedReduxProps<A extends Action = AnyAction> {
	dispatch: Dispatch<A>;
}

export interface IAnswerQuestionPayload {
	questionId: QuestionId;
	answerId: AnswerId;
}

export interface IQuestion {
    id: QuestionId;
    dotNavStep: number;
    answers: AnswerId[];
    nextQuestionId: (answer: AnswerId) => QuestionId | undefined;
}
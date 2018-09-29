import { Action, AnyAction, Dispatch } from 'redux';

export enum QuestionId {
	AreYouRegistered = 'Reg',
	AbsenteeBallot = 'Abs',
	VoteByMailState = 'St',
	PollingLocation = 'PllLoc',
	SpecialAccommodations = 'Accm',
	TransportationMethod = 'Trns',
	ReceivedBallot = 'RcBlt',
	Deadline = 'Ddln',
	ReturnMethod = 'Rtrn',
	MissWork = 'MssWrk',
	FamiliarWithBallot = 'Fmlr',
	PeopleToInvite = 'Inv',
	ReasonToVote = 'Rsn',
	Emotion = 'Em',
}

export const ALL_QUESTION_IDS: QuestionId[] = [
	QuestionId.AreYouRegistered,
	QuestionId.AbsenteeBallot,
	QuestionId.VoteByMailState,
	QuestionId.PollingLocation,
	QuestionId.SpecialAccommodations,
	QuestionId.TransportationMethod,
	QuestionId.ReceivedBallot,
	QuestionId.Deadline,
	QuestionId.ReturnMethod,
	QuestionId.MissWork,
	QuestionId.FamiliarWithBallot,
	QuestionId.PeopleToInvite,
	QuestionId.ReasonToVote,
	QuestionId.Emotion,
];

export enum AnswerId {
	Yes = 'Y',
	No = 'N',
	EmphaticYes = 'EY',
	DontKnow = 'DN',
	Washington = 'WA',
	Oregon = 'OR',
	Colorado = 'CO',
	OtherState = 'OthSt',
	DriveMyself = 'DrMy',
	Carpool = 'Cpl',
	RideShare = 'RiSh',
	Taxi = 'Txi',
	Transit = 'Trnst',
	Walk = 'Wlk',
	Bike = 'Bk',
	Mail = 'Ml',
	BallotBox = 'BltBx',
	Friends = 'Frnd',
	FamilyMembers = 'Fam',
	Coworkers = 'Cowrk',
	Alone = 'Aln',
	Kids = 'Kd',
	Privilege = 'Prvlg',
	Change = 'Chg',
	Habit = 'Hbt',
	Other = 'Oth',
	Excited = 'Exc',
	Concerned = 'Cncrn',
	Shocked = 'Shck',
	Angry = 'Ang',
	Meh = 'Mh',
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

export enum PlanStepId {
	Register,
	CheckBallotStatus,
	CheckDeadline,
	LocateBallotBox,
	Research,
	InviteFriends,
}

export interface IQuestion {
    id: QuestionId;
    dotNavStep: number;
    answers: AnswerId[];
    nextQuestionId: (answer: AnswerId) => QuestionId | undefined;
    resultingPlanStep: (answer: AnswerId) => PlanStepId | undefined;
}
import { Action, AnyAction, Dispatch } from 'redux';
import { StringId } from '../strings';

/*
	Do not remove values from this enum, if you can avoid it.

	The QuestionId and AnswerId enum values are used in plan-page URLs that users may try to use later to refer
	back to their plan.

	Even if we remove questions or answers, we should try our best to make sense of the old plan-page URLs that
	users might send us, which means we should retain the URL names even for questions/answers that are no longer
	actively used.
*/
export enum QuestionId {
	AreYouRegistered = 'Reg',
	ZipCode = 'Zip',
	AbsenteeBallot = 'Abs',
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

	// Deprecated:
	VoteByMailState = 'St',
}

export const ALL_QUESTION_IDS: QuestionId[] = [
	QuestionId.AreYouRegistered,
	QuestionId.AbsenteeBallot,
	QuestionId.ZipCode,
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

/*
	Do not remove values from this enum, if you can avoid it.

	See comments on the 'QuestionId' enum.
*/
export enum AnswerId {
	Yes = 'Y',
	No = 'N',
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
	WalkOrBike = 'WlkBk',
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

	// Deprecated:
	Walk = 'Wlk',
	Bike = 'Bk',
}

export interface IZipCodeAnswer {
	zipCode: string,
}

export interface IQuestionAndAnswer {
	questionId: QuestionId,
	answer: AnswerId | IZipCodeAnswer,
}

export const enum AppView {
	LandingPage,
	Questionnaire,
	Plan,
	PrivacyPolicy,
}

export const enum MostRecentTransition {
	Back,
	Forward,
	Immediate,
}

export enum VotingStateId {
	Colorado,
	Oregon,
	Washington,
}

export function getVotingStateId(answerId: AnswerId): VotingStateId | undefined {
	switch (answerId) {
		case AnswerId.Colorado:
			return VotingStateId.Colorado;

		case AnswerId.Oregon:
			return VotingStateId.Oregon;

		case AnswerId.Washington:
			return VotingStateId.Washington;

		case AnswerId.OtherState:
			return undefined;

		default:
			throw new Error("Unrecognized AnswerId for getVotingStateId");
	}
}

export enum LanguageId {
	English = 'En',
	Spanish = 'Es',
}

export interface IQuestionnaireState {
	readonly answers: IQuestionAndAnswer[],
	readonly votingStateId: VotingStateId | undefined,
	readonly currentView: AppView,
	readonly currentQuestionId: QuestionId | undefined,
	readonly dotNavStep: number,
	readonly counter: number,
	readonly pushLocation: boolean,
	readonly mostRecentTransition: MostRecentTransition | undefined,
	readonly getString: (id: StringId) => string,
	readonly currentLanguage: LanguageId,
}

export const enum QuestionnaireActionType {
	START_SURVEY = 'QUESTIONNAIRE/START_SURVEY',
	START_OVER = 'QUESTIONNAIRE/START_OVER',
	ANSWER_QUESTION = 'QUESTIONNAIRE/ANSWER_QUESTION',
	PRIVACY_POLICY = 'QUESTIONNAIRE/PRIVACY_POLICY',
	SET_LANGUAGE = 'QUESTIONNAIRE/SET_LANGUAGE',
	SEND_PLAN_EMAIL = 'QUESTIONNAIRE/SEND_PLAN_EMAIL',
	COPY_LINK = 'QUESTIONNAIRE/COPY_LINK',
}

export interface IConnectedReduxProps<A extends Action = AnyAction> {
	dispatch: Dispatch<A>,
}

export interface IAnswerQuestionPayload {
	questionId: QuestionId,
	answer: AnswerId | IZipCodeAnswer,
}

export interface ISetLanguagePayload {
	language: LanguageId,
}

export interface ISendPlanEmailPayload {
	emailAddress: string,
}

export enum PlanStepId {
	Register,
	CheckRegistration,
	MaybeRegister,
	HaveBallot,
	NoBallotYet,
	CheckBallotReturnDeadline,
	MailBallot,
	DropBallotAtDropBox,
	RequestAbsenteeBallot,
	DoubleCheckPollingLocation,
	FindPollingLocation,
	PlanSpecialAccommodations,
	DriveMyselfOrCarpool,
	RideShare,
	Taxi,
	MassTransit,
	WalkOrBike,
	TimeOffWork,
	ReviewBallotIssues,
	ResearchBallotIssues,
	InvitePeople,
	ForMyKidsAndFamily,
	VotingIsPrivilege,
	DriveChange,
	AlwaysVoted,
	OtherReason,
	Excited,
	Concerned,
	Shocked,
	Angry,
	Meh,
}

export interface IQuestion {
    id: QuestionId;
    dotNavStep: number;
    answers: AnswerId[];
    nextQuestionId: (answer: AnswerId | IZipCodeAnswer) => QuestionId | undefined;
    resultingPlanStep: (answer: AnswerId | IZipCodeAnswer) => PlanStepId | undefined;
}
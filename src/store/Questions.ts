import { AnswerId, IQuestion, IZipCodeAnswer, PlanStepId, QuestionId } from './Types';
import { votingStateFromZip } from './votingStateFromZip';

/**
 * Hard coded constant for the question graph 
 */
export const QUESTIONS : IQuestion[] = [
    {
        id: QuestionId.AreYouRegistered,
        dotNavStep: 1,
        nextQuestionId: (answer) => QuestionId.ZipCode,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
            AnswerId.DontKnow,
        ],
        resultingPlanStep: (answer) => answer === AnswerId.Yes ? PlanStepId.CheckRegistration : (answer === AnswerId.No ? PlanStepId.Register : PlanStepId.MaybeRegister),
    },
    {
        id: QuestionId.ZipCode,
        dotNavStep: 2,
        nextQuestionId: (answer) => {
            const voteByMailState = votingStateFromZip((answer as IZipCodeAnswer).zipCode);
            if (voteByMailState !== undefined) {
                return QuestionId.ReceivedBallot;
            }
            else {
                return QuestionId.PollingLocation;
            }
        },
        answers: [],
        resultingPlanStep: (answer) => {
            const voteByMailState = votingStateFromZip((answer as IZipCodeAnswer).zipCode);
            if (voteByMailState !== undefined) {
                return PlanStepId.CheckBallotReturnDeadline;
            }
            else {
                return undefined;
            }
        },
    },
    /* VOTE-IN-PERSON PATH */
    // TODO: Bring this question back?
    /*
    {
        id: QuestionId.AbsenteeBallot,
        dotNavStep: 3,
        nextQuestionId: (key) => key === AnswerId.Yes ? QuestionId.ReceivedBallot : QuestionId.VoteByMailState,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
        resultingPlanStep: (answer) => answer === AnswerId.Yes ? PlanStepId.RequestAbsenteeBallot : undefined,
    },
    */
    {
        id: QuestionId.PollingLocation,
        dotNavStep: 3,
        nextQuestionId: (key) => QuestionId.SpecialAccommodations,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
            AnswerId.DontKnow,
        ],
        resultingPlanStep: (answer) => answer !== AnswerId.Yes ? PlanStepId.FindPollingLocation : undefined,
    },
    {
        id: QuestionId.SpecialAccommodations,
        dotNavStep: 4,
        nextQuestionId: (key) => QuestionId.TransportationMethod,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
        resultingPlanStep: (answer) => answer === AnswerId.Yes ? PlanStepId.PlanSpecialAccommodations : undefined,
    },
    {
        id: QuestionId.TransportationMethod,
        dotNavStep: 5,
        nextQuestionId: (key) => QuestionId.MissWork,
        answers: [
            AnswerId.DriveMyself,
            AnswerId.Carpool,
            AnswerId.RideShare,
            AnswerId.Taxi,
            AnswerId.Transit,
            AnswerId.Walk,
            AnswerId.Bike,
            AnswerId.Other,
        ],
        resultingPlanStep: (answer) => {
            switch (answer) {
                case AnswerId.DriveMyself:
                case AnswerId.Carpool: {
                    return PlanStepId.DriveMyselfOrCarpool;
                }
                case AnswerId.RideShare: {
                    return PlanStepId.RideShare;
                }
                case AnswerId.Taxi: {
                    return PlanStepId.Taxi;
                }
                case AnswerId.Transit: {
                    return PlanStepId.MassTransit;
                }
                case AnswerId.Walk:
                case AnswerId.Bike: {
                    return PlanStepId.WalkOrBike;
                }
                default:
                    return undefined;
            }
        },
    },
    {
        id: QuestionId.MissWork,
        dotNavStep: 6,
        nextQuestionId: (key) => QuestionId.FamiliarWithBallot,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
        resultingPlanStep: (answer) => answer === AnswerId.Yes ? PlanStepId.TimeOffWork : undefined,
    },
    /* VOTE-BY-MAIL PATH */
    {
        id: QuestionId.ReceivedBallot,
        dotNavStep: 7,
        nextQuestionId: (key) => QuestionId.ReturnMethod,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
        resultingPlanStep: (answer) => answer === AnswerId.Yes ? PlanStepId.HaveBallot : PlanStepId.NoBallotYet,
    },
    {
        id: QuestionId.ReturnMethod,
        dotNavStep: 8,
        nextQuestionId: (key) => QuestionId.FamiliarWithBallot,
        answers: [
            AnswerId.Mail,
            AnswerId.BallotBox,
        ],
        resultingPlanStep: (answer) => answer === AnswerId.Mail ? PlanStepId.MailBallot : PlanStepId.DropBallotAtDropBox,
    },
    /* REJOINED PATH */
    {
        id: QuestionId.FamiliarWithBallot,
        dotNavStep: 9,
        nextQuestionId: (key) => QuestionId.PeopleToInvite,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
        resultingPlanStep: (answer) => answer === AnswerId.Yes ? PlanStepId.ReviewBallotIssues : PlanStepId.ResearchBallotIssues,
    },
    {
        id: QuestionId.PeopleToInvite,
        dotNavStep: 10,
        nextQuestionId: (key) => QuestionId.ReasonToVote,
        answers: [
            AnswerId.Friends,
            AnswerId.FamilyMembers,
            AnswerId.Coworkers,
            AnswerId.Alone,
        ],
        resultingPlanStep: (answer) => answer !== AnswerId.Alone ? PlanStepId.InvitePeople : undefined,
    },
    {
        id: QuestionId.ReasonToVote,
        dotNavStep: 11,
        nextQuestionId: (key) => QuestionId.Emotion,
        answers: [
            AnswerId.Kids,
            AnswerId.Privilege,
            AnswerId.Change,
            AnswerId.Habit,
            AnswerId.Other,
        ],
        resultingPlanStep: (answer) => {
            switch (answer) {
                case AnswerId.Kids: {
                    return PlanStepId.ForMyKidsAndFamily;
                }
                case AnswerId.Privilege: {
                    return PlanStepId.VotingIsPrivilege;
                }
                case AnswerId.Change: {
                    return PlanStepId.DriveChange;
                }
                case AnswerId.Habit: {
                    return PlanStepId.AlwaysVoted;
                }
                case AnswerId.Other: {
                    return PlanStepId.OtherReason;
                }
                default:
                    return undefined;
            }
        }
    },
    {
        id: QuestionId.Emotion,
        dotNavStep: 12,
        nextQuestionId: (key) => undefined,
        answers: [
            AnswerId.Excited,
            AnswerId.Concerned,
            AnswerId.Shocked,
            AnswerId.Angry,
            AnswerId.Meh,
        ],
        resultingPlanStep: (answer) => {
            switch (answer) {
                case AnswerId.Excited: {
                    return PlanStepId.Excited;
                }
                case AnswerId.Concerned: {
                    return PlanStepId.Concerned;
                }
                case AnswerId.Shocked: {
                    return PlanStepId.Shocked;
                }
                case AnswerId.Angry: {
                    return PlanStepId.Angry;
                }
                case AnswerId.Meh: {
                    return PlanStepId.Meh;
                }
                default:
                    return undefined;
            }
        },
    }];

export const PLAN_DOT_NAV_STEP = 13;
import { AnswerId, QuestionId, PlanStepId, VotingStateId } from './store';

export enum StringId {
	Yes,
	No,
	NotSure,
	AreYouRegisteredToVote,
	DoYouLiveOverseas,
	AreYouPlanningtoVoteInVoteByMailState,
	DoYouWantToVoteWithAbsenteeBallot,
	DoYouKnowWhereYourPollingLocationIs,
	WillYouNeedSpecialAccommodations,
	WhatTransportationMethodWillYouUse,
	HaveYouReceivedYourBallot,
	DoYouKnowTheDeadline,
	HowWillYouReturnYourBallot,
	WillYouMissWork,
	AreYouFamiliarWithYourBallot,
	AreTherePeopleToInvite,
	WhyWillYouVote,
	HowAreYouFeeling,
	Washington,
	Oregon,
	Colorado,
	AnotherState,
	DriveMyself,
	Carpool,
	RideShare,
	Taxi,
	MassTransit,
	Walk,
	Bike,
	Mail,
	BallotBox,
	Friends,
	FamilyMembers,
	Coworkers,
	NotAtThisTime,
	MyKidsFamily,
	ItsAPrivilege,
	ToDriveChange,
	IveAlwaysVoted,
	Other,
	Excited,
	Concerned,
	Shocked,
	Angry,
	Meh,
	PlanPageSubheader,
	IsYourRegistrationOk,
	LetsGetRegistered,
	CheckYourRegistration,
	DoubleCheckYourRegistration,
	RockTheVoteDotOrgLink,
	TakeAQuickLookAtYourRegistration,
	NotSureWhetherYoureRegistered,
	RequestYourAbsenteeBallot,
	LearnHowToVoteFromAnywhereOverseas,
	MakeTheRequest,
	FvapDotGotLink,
	HaveBallotWillVote,
	YouveGotItNowSubmitIt,
	FindYourColoradoBallot,
	FindYourOregonBallot,
	FindYourWashingtonBallot,
	ColoradoBallotLink,
	OregonBallotLink,
	WashingtonBallotLink,
	BallotHasntShownUpYet,
	TrackYourBallotOnline,
	ColoradoDeadlineLink,
	OregonDeadlineLink,
	WashingtonDeadlineLink,
	WhenIsTheDeadlineExactly,
	TheDeadlineYouveGotThis,
	MidnightBallotDropOrPostmark,
	CheckYourDeadline,
	CheckYourDeadlineAndDontForgetPostage,
	CheckYourDeadlineAndRestEasy,
	FindColoradoMailingDetails,
	FindOregonMailingDetails,
	FindWashingtonMailingDetails,
	ColoradoMailingDetailsLink,
	OregonMailingDetailsLink,
	WashingtonMailingDetailsLink,
	DropYourBallotInTheMail,
	ColoradoDropBoxLink,
	OregonDropBoxLink,
	WashingtonDropBoxLink,
	DiscoverYourNeighborhoodDropBox,
	CheckYourDeadlineForDropbox,
	FindDropboxNearYou,
	CheckAbsenteePostageAndDeadline,
	VoteDotOrgAbsenteeBallotLink,
	HasYourPollingLocationMoved,
	CheckYourPollingLocationBecauseThingsChange,
	ThisWayToThePolls,
	VoteDotOrgPollingPlaceLocatorLink,
	FindYourPollingLocation,
	FindYourPollingLocationDetails,
	PlanYourTripWithAssistance,
	SpecialAcommodationsAreAvailable,
	AccessAssistance,
	EacDotGovLink,
	GetThereByCar,
	RoundUpFellowVotersForCarpool,
	RoundUpFellowVotersForRideShare,
	RoundUpFellowVotersForCarpoolOrTaxi,
	PlanYourRouteToThePolls,
	CheckLyft,
	LyftLink,
	GetThereByTaxi,
	TakeMassTransitToThePolls,
	PlanYourTransitRouteAheadOfTime,
	PlanYourTransitRoute,
	GoogleMapsTransitLink,
	WalkOrBikeToThePolls,
	RainSlowSleetNoWorries,
	CheckVotingDayConditions,
	WeatherDotComLink,
	AreYouEligibleForPaidTimeOff,
	MajorityOfStatesHaveTimeOffLaws,
	LookForVoterLeaveStatus,
	Vote411DotOrgLink,
	YourBallotInANutshell,
	YoureFamiliarButBallotReadyAppCanHelpYouMakeInformedChoices,
	PlanYourBallotChoices,
	BallotReadyDotOrgLink,
	IntroducingYourBallot,
	BallotReadyAppCanHelpYouMakeInformedChoices,
	InviteYourFriendsToVoteWithYou,
	LetsKeepEachOtherAccountable,
	PutThoseFeelingsTowardAction,
	SeeWhatHappensWhenWeAllVote,
	WhenWeAllVoteDotOrgLink,
	YoureExcited,
	YoureExcitedDescription,
	YoureConcerned,
	YoureConcernedDescription,
	YoureShocked,
	YoureAngry,
	YoureMeh,
	RememberYourReasonForVoting,
	ForFamily,
	ForFamilyDescription,
	ItsMyPrivilege,
	ItsMyPrivilegeDescription,
	ForChange,
	ForChangeDescription,
	CivicDuty,
	CivicDutyDescription,
	OtherCivicDutyDescription,
	ExcitedEmoji,
	ConcernedEmoji,
	ShockedEmoji,
	AngryEmoji,
	MehEmoji,
}

export function getString(id: StringId): string {
	switch (id) {
		case StringId.Yes: return "Yes";
		case StringId.No: return "No";
		case StringId.NotSure: return "Not sure";
		case StringId.AreYouRegisteredToVote: return "First things first. Are you registered to vote?";
		case StringId.DoYouLiveOverseas: return "Do you live or are you stationed outside the United States?";
		case StringId.AreYouPlanningtoVoteInVoteByMailState: return "Are you planning to vote in any of these states?"; 
		case StringId.DoYouWantToVoteWithAbsenteeBallot: return "Would you like to vote by absentee ballot?";
		case StringId.DoYouKnowWhereYourPollingLocationIs: return "Do you know where your polling location is?";
		case StringId.WillYouNeedSpecialAccommodations: return "Will you need special accommodations to reach the polling location?";
		case StringId.WhatTransportationMethodWillYouUse: return "How will you get to your polling location?";
		case StringId.HaveYouReceivedYourBallot: return "Have you received your ballot?"; 
		case StringId.DoYouKnowTheDeadline: return "Do you know when the deadline is?";
		case StringId.HowWillYouReturnYourBallot: return "How will you return your ballot?";
		case StringId.WillYouMissWork: return "Will you have to miss/leave work to vote?";
		case StringId.AreYouFamiliarWithYourBallot: return "Do you know who/what you\'ll be voting for?";
		case StringId.AreTherePeopleToInvite: return "Spread the word! Are there people in your life you\'d like to vote with?";
		case StringId.WhyWillYouVote: return "Why will you be voting?";
		case StringId.HowAreYouFeeling: return "How are you feeling about these midterm elections?";
		case StringId.Washington: return "Washington";
		case StringId.Oregon: return "Oregon";
		case StringId.Colorado: return "Colorado";
		case StringId.AnotherState: return "Another state";
		case StringId.DriveMyself: return "Drive myself";
		case StringId.Carpool: return "Carpool";
		case StringId.RideShare: return "Car for hire";
		case StringId.Taxi: return 'Taxi';
		case StringId.MassTransit: return 'Mass transit';
		case StringId.Walk: return 'Walk';
		case StringId.Bike: return 'Bike';
		case StringId.Mail: return 'Mail';
		case StringId.BallotBox: return 'Ballot box'; 
		case StringId.Friends: return 'Friend(s)';
		case StringId.FamilyMembers: return 'Family member(s)';
		case StringId.Coworkers: return 'Co-worker(s)';
		case StringId.NotAtThisTime: return 'Not at this time';
		case StringId.MyKidsFamily: return 'My kids / family';
		case StringId.ItsAPrivilege: return 'It\'s a privilege';
		case StringId.ToDriveChange: return 'To drive change';
		case StringId.IveAlwaysVoted: return 'I\'ve always voted';
		case StringId.Other: return 'Other';
		case StringId.Excited: return 'Excited';
		case StringId.Concerned: return 'Concerned';
		case StringId.Shocked: return 'Shocked';
		case StringId.Angry: return 'Angry';
		case StringId.Meh: return 'Meh';
		case StringId.PlanPageSubheader: return "Now you've got everything you need to take voting action. You've done the prep to get your info on registration, your ballot, who/what/where, voting logistics, and more \u2014 way to go! Your voice matters. The time is now. Get out there and vote the midterms!";
		case StringId.IsYourRegistrationOk: return "Is your registration A-OK?";
		case StringId.LetsGetRegistered: return "Let's do this: get registered!";        // TODO: Capitalize Get?
		case StringId.CheckYourRegistration: return "Check your registration";
		case StringId.DoubleCheckYourRegistration: return "Double-check your registration";
		case StringId.RockTheVoteDotOrgLink: return "https://www.rockthevote.org/voting-information/am-i-registered-to-vote/";        // TODO: Spanish-specific links?
		case StringId.TakeAQuickLookAtYourRegistration: return "Great \u2014 you're registered! Now take a quick look to make sure everything is up-to-date.";
		case StringId.NotSureWhetherYoureRegistered: return "Not sure whether you're registered? Take a minute to double-check and make sure you're vote ready.";
		case StringId.RequestYourAbsenteeBallot: return "Request your absentee ballot";
		case StringId.LearnHowToVoteFromAnywhereOverseas: return "Learn how to vote from anywhere when you're overseas.";
		case StringId.MakeTheRequest: return "Make the request";
		case StringId.FvapDotGotLink: return "https://www.fvap.gov/";
		case StringId.HaveBallotWillVote: return "Have ballot, will vote!";
		case StringId.YouveGotItNowSubmitIt: return "You've got it, now submit it. (Don't forget to check the postage requirements if you're using USPS.)";    // TODO: Spell out U.S. Postal Service?
		case StringId.FindYourColoradoBallot: return "Find your Colorado ballot";
		case StringId.FindYourOregonBallot: return "Find your Oregon ballot";
		case StringId.FindYourWashingtonBallot: return "Find your Washington ballot";
		case StringId.ColoradoBallotLink: return "http://www.sos.state.co.us/pubs/elections/vote/VoterHome.html";
		case StringId.OregonBallotLink: return "https://sos.oregon.gov/voting/pages/myvote.aspx?lang=en"; // TODO: lang=es
		case StringId.WashingtonBallotLink: return "https://weiapplets.sos.wa.gov/myvote/#/login";
		case StringId.BallotHasntShownUpYet: return "Ballot hasn't shown up yet?";
		case StringId.TrackYourBallotOnline: return "Track your ballot online and find out when to expect it.";
		case StringId.ColoradoDeadlineLink: return "https://www.sos.state.co.us/pubs/elections/";
		case StringId.OregonDeadlineLink: return "https://sos.oregon.gov/voting/Pages/current-election.aspx";
		case StringId.WashingtonDeadlineLink: return "https://www.sos.wa.gov/elections/dates-and-deadlines.aspx";
		case StringId.WhenIsTheDeadlineExactly: return "When is the deadline, exactly?";
		case StringId.TheDeadlineYouveGotThis: return "The deadline: you've got this";
		case StringId.MidnightBallotDropOrPostmark: return "Midnight ballot box drop or postmark? Quickly double-check your deadline and rest easy.";
		case StringId.CheckYourDeadline: return "Check your deadline";
		case StringId.CheckYourDeadlineAndDontForgetPostage: return "Check up on your deadline and rest easy. (And don't forget postage if your ballot envelope is not prepaid.)";
		case StringId.CheckYourDeadlineAndRestEasy: return "Check up on your deadline and rest easy.";
		case StringId.FindColoradoMailingDetails: return "Find Colorado mailing details";
		case StringId.FindOregonMailingDetails: return "Find Oregon mailing details";
		case StringId.FindWashingtonMailingDetails: return "Find Washington mailing details";
		case StringId.ColoradoMailingDetailsLink: return "https://www.sos.state.co.us/pubs/elections/FAQs/GeneralInfoFAQ.html";
		case StringId.OregonMailingDetailsLink: return "https://sos.oregon.gov/voting/Pages/voteinor.aspx";
		case StringId.WashingtonMailingDetailsLink: return "https://www.sos.wa.gov/elections/faq_vote_by_mail.aspx";
		case StringId.DropYourBallotInTheMail: return "Drop your ballot in the mail, pronto!";
		case StringId.ColoradoDropBoxLink: return "https://www.sos.state.co.us/pubs/elections/";
		case StringId.OregonDropBoxLink: return "https://sos.oregon.gov/voting/pages/drop-box-locator.aspx";
		case StringId.WashingtonDropBoxLink: return "https://www.sos.wa.gov/elections/auditors/";	// TODO: Is this really the best URL?
		case StringId.DiscoverYourNeighborhoodDropBox: return "Discover your neighborhood ballot drop box.";
		case StringId.CheckYourDeadlineForDropbox: return "Check your deadline and plan ahead for a convenient ballot box drop.";
		case StringId.FindDropboxNearYou: return "Find a ballot drop box near you";
		case StringId.CheckAbsenteePostageAndDeadline: return "A convenient way to go! Just remember to check on postage and your mailing deadline.";
		case StringId.VoteDotOrgAbsenteeBallotLink: return "https://www.vote.org/absentee-ballot/";
		case StringId.HasYourPollingLocationMoved: return "Your polling location: has it moved?";
		case StringId.CheckYourPollingLocationBecauseThingsChange: return "Things change \u2014 make sure you're aware of your area's best polling locations and hours.";
		case StringId.ThisWayToThePolls: return "This way to the polls!";
		case StringId.VoteDotOrgPollingPlaceLocatorLink: return "https://www.vote.org/polling-place-locator/";
		case StringId.FindYourPollingLocation: return "Find your polling location";
		case StringId.FindYourPollingLocationDetails: return "Make it easy on yourself! Find your polling location through the link below.";
		case StringId.PlanYourTripWithAssistance: return "Plan your trip, with the assistance you need";
		case StringId.SpecialAcommodationsAreAvailable: return "Special accommodations to help you get to your polling place are available. It's easy to plan ahead!";
		case StringId.AccessAssistance: return "Access assistance";
		case StringId.EacDotGovLink: return "https://www.eac.gov/voters/resources-for-voters-with-disabilities/";
		case StringId.GetThereByCar: return "Get there by car";
		case StringId.RoundUpFellowVotersForCarpoolOrTaxi: return "Great plan. Even better: Round up some fellow voters to share the ride, and have the address in hand!";
		case StringId.RoundUpFellowVotersForRideShare: return "Great plan. Even better: Round up some fellow voters to share the ride!";
		case StringId.PlanYourRouteToThePolls: return "Plan your route to the polls";
		case StringId.CheckLyft: return "Check Lyft for voting day deals";
		case StringId.LyftLink: return "https://blog.lyft.com/posts/2018/8/22/get-out-the-vote";		// TODO: Spanish?
		case StringId.GetThereByTaxi: return "Get there by taxi";
		case StringId.TakeMassTransitToThePolls: return "Take mass transit to the polls";
		case StringId.PlanYourTransitRouteAheadOfTime: return "Great plan. Even better: Plan your route ahead of time and enjoy the trip!";
		case StringId.PlanYourTransitRoute: return "Plan your bus/train route";
		case StringId.GoogleMapsTransitLink: return "https://maps.google.com/landing/transit/index.html";
		case StringId.WalkOrBikeToThePolls: return "Walk or bike to the polls";
		case StringId.RainSlowSleetNoWorries: return "Rain, snow, sleet...no worries! You'll be ready with a quick weather report.";
		case StringId.CheckVotingDayConditions: return "Check voting day conditions";
		case StringId.WeatherDotComLink: return "weather.com";    // TODO: No http?
		case StringId.AreYouEligibleForPaidTimeOff: return "Paid time-off to vote: are you eligible?";
		case StringId.MajorityOfStatesHaveTimeOffLaws: return "The majority of states have time-off-to-vote laws (also called voter-leave laws). Check ahead of voting day and coordinate plans with your workplace.";
		case StringId.LookForVoterLeaveStatus: return "Look for your state's voter-leave law status";
		case StringId.Vote411DotOrgLink: return "https://www.vote411.org/taxonomy/term/75#.W5RxBuhKjD4";		// TODO: Is this really the URL?
		case StringId.YourBallotInANutshell: return "Your ballot, in a nutshell";
		case StringId.YoureFamiliarButBallotReadyAppCanHelpYouMakeInformedChoices: return "You're familiar with the candidates and issues. The Ballot Ready app can help you make informed choices.";
		case StringId.PlanYourBallotChoices: return "Plan your ballot choices";
		case StringId.BallotReadyDotOrgLink: return "https://www.ballotready.org/";
		case StringId.IntroducingYourBallot: return "Introducing...your ballot!";
		case StringId.BallotReadyAppCanHelpYouMakeInformedChoices: return "Now's the perfect time to research the candidates and issues you'll be voting for. The Ballot Ready app can help you make informed choices.";
		case StringId.InviteYourFriendsToVoteWithYou: return "Invite your crowd to vote with you";    // TODO: Review: "your crowd?"
		case StringId.LetsKeepEachOtherAccountable: return "Let's keep each other accountable \u2014 voting's even better when we can do it together!";
		case StringId.PutThoseFeelingsTowardAction: return "Put those feelings toward action";
		case StringId.SeeWhatHappensWhenWeAllVote: return "See what happens When We All Vote";
		case StringId.WhenWeAllVoteDotOrgLink: return "https://www.whenweallvote.org/";
		case StringId.YoureExcited: return "You're excited about voting!";
		case StringId.YoureExcitedDescription: return "Well, great \u2014 you're not the only one! Watch this and keep participating!";
		case StringId.YoureConcerned: return "Put those feelings toward voting action";
		case StringId.YoureConcernedDescription: return "You're feeling concerned \u2014 we get it! These are complicated times. Watch this and get inspired.";
		case StringId.YoureShocked: return "You're feeling shocked \u2014 we get it! These are complicated times. Watch this and get inspired.";
		case StringId.YoureAngry: return "You're feeling angry \u2014 we get it! These are complicated times. Watch this and get inspired.";
		case StringId.YoureMeh: return "Feeling ambivalent? Your voting plans are taking shape \u2014 now get out there!";
		case StringId.RememberYourReasonForVoting: return "Remember your reason for voting!";
		case StringId.ForFamily: return "For Family";
		case StringId.ForFamilyDescription: return "Whether you're looking out for the next generation or for your family members today, you're right: your vote has an impact!";
		case StringId.ItsMyPrivilege: return "It's My Privilege";
		case StringId.ItsMyPrivilegeDescription: return "Yep, you've got the right idea, and we agree. Let's not take voting for granted!";
		case StringId.ForChange: return "For Change";
		case StringId.ForChangeDescription: return "You're about to do the single best thing you can to weigh in on issues and decision-makers. Do you approve? Disapprove? Your vote is a meaningful message \u2014 pass it on!";
		case StringId.CivicDuty: return "Civic Duty";
		case StringId.CivicDutyDescription: return "You've always voted \u2014 good on you! Spread the word and keep up the great (and extremely important) civic habit.";
		case StringId.OtherCivicDutyDescription: return "You're about to do the single best thing you can to weigh in on issues and decision-makers. Do you approve? Disapprove? Your vote is a meaningful message \u2014 pass it on!";
		case StringId.ExcitedEmoji: return "Excited emoji";
		case StringId.ConcernedEmoji: return "Concerned emoji";
		case StringId.ShockedEmoji: return "Shocked emoji";
		case StringId.AngryEmoji: return "Angry emoji";
		case StringId.MehEmoji: return "Meh emoji";
		default:
			throw new Error("Unrecognized StringId");
	}
}

export function getQuestionFullLabel(id: QuestionId): StringId {
	switch (id) {
		case QuestionId.AreYouRegistered: return StringId.AreYouRegisteredToVote;
		case QuestionId.OverseasMilitary: return StringId.DoYouLiveOverseas;
		case QuestionId.VoteByMailState: return StringId.AreYouPlanningtoVoteInVoteByMailState;
		case QuestionId.AbsenteeBallot: return StringId.DoYouWantToVoteWithAbsenteeBallot;
		case QuestionId.PollingLocation: return StringId.DoYouKnowWhereYourPollingLocationIs;
		case QuestionId.SpecialAccommodations: return StringId.WillYouNeedSpecialAccommodations;
		case QuestionId.TransportationMethod: return StringId.WhatTransportationMethodWillYouUse;
		case QuestionId.ReceivedBallot: return StringId.HaveYouReceivedYourBallot;
		case QuestionId.Deadline: return StringId.DoYouKnowTheDeadline;
		case QuestionId.ReturnMethod: return StringId.HowWillYouReturnYourBallot;
		case QuestionId.MissWork: return StringId.WillYouMissWork;
		case QuestionId.FamiliarWithBallot: return StringId.AreYouFamiliarWithYourBallot;
		case QuestionId.PeopleToInvite: return StringId.AreTherePeopleToInvite;
		case QuestionId.ReasonToVote: return StringId.WhyWillYouVote;
		case QuestionId.Emotion: return StringId.HowAreYouFeeling;
	}

	throw new Error('Unrecognized QuestionId');
}

export function getAnswerLabel(answer: AnswerId): StringId {
	switch(answer) {
		case AnswerId.Yes: return StringId.Yes;
		case AnswerId.No: return StringId.No;
		case AnswerId.DontKnow: return StringId.NotSure;
		case AnswerId.Washington: return StringId.Washington;
		case AnswerId.Oregon: return StringId.Oregon;
		case AnswerId.Colorado: return StringId.Colorado;
		case AnswerId.OtherState: return StringId.AnotherState;
		case AnswerId.DriveMyself: return StringId.DriveMyself;
		case AnswerId.Carpool: return StringId.Carpool;
		case AnswerId.RideShare: return StringId.RideShare;
		case AnswerId.Taxi: return StringId.Taxi;
		case AnswerId.Transit: return StringId.MassTransit;
		case AnswerId.Walk: return StringId.Walk;
		case AnswerId.Bike: return StringId.Bike;
		case AnswerId.Mail: return StringId.Mail;
		case AnswerId.BallotBox: return StringId.BallotBox;
		case AnswerId.Friends: return StringId.Friends;
		case AnswerId.FamilyMembers: return StringId.FamilyMembers;
		case AnswerId.Coworkers: return StringId.Coworkers;
		case AnswerId.Alone: return StringId.NotAtThisTime;
		case AnswerId.Kids: return StringId.MyKidsFamily;
		case AnswerId.Privilege: return StringId.ItsAPrivilege;
		case AnswerId.Change: return StringId.ToDriveChange;
		case AnswerId.Habit: return StringId.IveAlwaysVoted;
		case AnswerId.Other: return StringId.Other;
		case AnswerId.Excited: return StringId.Excited;
		case AnswerId.Concerned: return StringId.Concerned;
		case AnswerId.Shocked: return StringId.Shocked;
		case AnswerId.Angry: return StringId.Angry;
		case AnswerId.Meh: return StringId.Meh;
	}

	throw new Error(`Unrecognized AnswerId: ${answer}`);
}

export function getPlanPageSubHeaderText(): StringId {
	return StringId.PlanPageSubheader;
}

export interface IPlanStepStrings {
	header: StringId,
	text: StringId,
	callToAction: StringId | undefined,
	link: StringId | undefined,
}

export function getPlanStepStrings(step: PlanStepId, state: VotingStateId): IPlanStepStrings {
	switch (step) {
		case PlanStepId.Register: {
			return {
				header: StringId.IsYourRegistrationOk,
				text: StringId.LetsGetRegistered,
				callToAction: StringId.DoubleCheckYourRegistration,
				link: StringId.RockTheVoteDotOrgLink,
			};
		}

		case PlanStepId.CheckRegistration: {
			return {
				header: StringId.CheckYourRegistration,
				text: StringId.TakeAQuickLookAtYourRegistration,
				callToAction: StringId.DoubleCheckYourRegistration,
				link: StringId.RockTheVoteDotOrgLink,
			};
		}

		case PlanStepId.MaybeRegister: {
			return {
				header: StringId.CheckYourRegistration,
				text: StringId.NotSureWhetherYoureRegistered,
				callToAction: StringId.DoubleCheckYourRegistration,
				link: StringId.RockTheVoteDotOrgLink,
			};
		}

		case PlanStepId.RequestOverseasBallot: {
			return {
				header: StringId.RequestYourAbsenteeBallot,
				text: StringId.LearnHowToVoteFromAnywhereOverseas,
				callToAction: StringId.MakeTheRequest,
				link: StringId.FvapDotGotLink,
			}
		}

		case PlanStepId.HaveBallot: {
			return {
				header: StringId.HaveBallotWillVote,
				text: StringId.YouveGotItNowSubmitIt,
				callToAction: undefined,
				link: undefined,
			};
		}

		case PlanStepId.NoBallotYet: {
			let callToAction: StringId | undefined;
			let link: StringId | undefined;
						
			switch (state) {
				case VotingStateId.Colorado: {
					callToAction = StringId.FindYourColoradoBallot;
					link = StringId.ColoradoBallotLink;
					break;
				}
				case VotingStateId.Oregon: {
					callToAction = StringId.FindYourOregonBallot;
					link = StringId.OregonBallotLink;        
					break;
				}
				case VotingStateId.Washington: {
					callToAction = StringId.FindYourWashingtonBallot;
					link = StringId.WashingtonBallotLink;
					break;
				}
				default:
					throw new Error("Unrecognized VotingStateId");
			}

			return {
				header: StringId.BallotHasntShownUpYet,
				text: StringId.TrackYourBallotOnline,
				callToAction,
				link,
			}
		}

		case PlanStepId.DontKnowDeadline:
		case PlanStepId.KnowDeadline: {
			let link: StringId | undefined;

			switch (state) {
				case VotingStateId.Colorado: {
					link = StringId.ColoradoDeadlineLink;
					break;
				}
				case VotingStateId.Oregon: {
					link = StringId.OregonDeadlineLink;
					break;
				}
				case VotingStateId.Washington: {
					link = StringId.WashingtonDeadlineLink;
					break;
				}
				default:
					throw new Error("Unrecognized VotingStateId");
			}

			return {
				header: step === PlanStepId.DontKnowDeadline ? StringId.WhenIsTheDeadlineExactly : StringId.TheDeadlineYouveGotThis,
				text: StringId.MidnightBallotDropOrPostmark,
				callToAction: StringId.CheckYourDeadline,
				link
			}
		}

		case PlanStepId.MailBallot: {
			let text: StringId = StringId.CheckYourDeadlineAndDontForgetPostage;
			let callToAction: StringId | undefined;
			let link: StringId | undefined;

			switch (state) {
				case VotingStateId.Colorado: {
					callToAction = StringId.FindColoradoMailingDetails;
					link = StringId.ColoradoMailingDetailsLink;
					break;
				}
				case VotingStateId.Oregon: {
					callToAction = StringId.FindOregonMailingDetails;
					link = StringId.OregonMailingDetailsLink;
					break;
				}
				case VotingStateId.Washington: {
					// WA has prepaid postage
					text = StringId.CheckYourDeadlineAndRestEasy;
					callToAction = StringId.FindWashingtonMailingDetails;
					link = StringId.WashingtonMailingDetailsLink;
					break;
				}
				default:
					throw new Error("Unrecognized VotingStateId");
			}

			return {
				header: StringId.DropYourBallotInTheMail,
				text,
				callToAction,
				link,
			}
		}

		case PlanStepId.DropBallotAtDropBox: {
			let link: StringId | undefined;

			switch (state) {
				case VotingStateId.Colorado: {
					link = StringId.ColoradoDropBoxLink;
					break;
				}
				case VotingStateId.Oregon: {
					link = StringId.OregonDropBoxLink;
					break;
				}
				case VotingStateId.Washington: {
					link = StringId.WashingtonDropBoxLink;
					break;
				}
				default:
					throw new Error(`Unrecognized VotingStateId: ${state}`);
			}

			return {
				header: StringId.DiscoverYourNeighborhoodDropBox,
				text: StringId.CheckYourDeadlineForDropbox,
				callToAction: StringId.FindDropboxNearYou,
				link,
			}
		}

		case PlanStepId.RequestAbsenteeBallot: {
			return {
				header: StringId.RequestYourAbsenteeBallot,
				text: StringId.CheckAbsenteePostageAndDeadline,
				callToAction: StringId.MakeTheRequest,
				link: StringId.VoteDotOrgAbsenteeBallotLink,
			}
		}

		case PlanStepId.DoubleCheckPollingLocation: {
			return {
				header: StringId.HasYourPollingLocationMoved,
				text: StringId.CheckYourPollingLocationBecauseThingsChange,
				callToAction: StringId.ThisWayToThePolls,
				link: StringId.VoteDotOrgPollingPlaceLocatorLink,
			}
		}

		case PlanStepId.FindPollingLocation: {
			return {
				header: StringId.FindYourPollingLocation,
				text: StringId.FindYourPollingLocationDetails,
				callToAction: StringId.ThisWayToThePolls,
				link: StringId.VoteDotOrgPollingPlaceLocatorLink,
			}
		}

		case PlanStepId.PlanSpecialAccommodations: {
			return {
				header: StringId.PlanYourTripWithAssistance,
				text: StringId.SpecialAcommodationsAreAvailable,
				callToAction: StringId.AccessAssistance,
				link: StringId.EacDotGovLink,
			}
		}

		case PlanStepId.DriveMyselfOrCarpool: {
			return {
				header: StringId.GetThereByCar,
				text: StringId.RoundUpFellowVotersForCarpool,
				callToAction: StringId.PlanYourRouteToThePolls,
				link: StringId.VoteDotOrgPollingPlaceLocatorLink,
			}
		}

		case PlanStepId.RideShare: {
			return {
				// TODO: Update these strings to use "Ride to Vote".  Also, the link may need to be updated.
				header: StringId.GetThereByCar,
				text: StringId.RoundUpFellowVotersForRideShare,
				callToAction: StringId.CheckLyft,
				link: StringId.LyftLink,
			}
		}

		case PlanStepId.Taxi: {
			return {
				header: StringId.GetThereByTaxi,
				text: StringId.RoundUpFellowVotersForCarpoolOrTaxi,
				callToAction: StringId.PlanYourRouteToThePolls,
				link: StringId.VoteDotOrgPollingPlaceLocatorLink,
			}
		}

		case PlanStepId.MassTransit: {
			return {
				header: StringId.TakeMassTransitToThePolls,
				text: StringId.PlanYourTransitRouteAheadOfTime,
				callToAction: StringId.PlanYourTransitRoute,
				link: StringId.GoogleMapsTransitLink,
			}
		}

		case PlanStepId.WalkOrBike: {
			return {
				header: StringId.WalkOrBikeToThePolls,
				text: StringId.RainSlowSleetNoWorries,
				callToAction: StringId.CheckVotingDayConditions,
				link: StringId.WeatherDotComLink
			}
		}

		case PlanStepId.TimeOffWork: {
			return {
				header: StringId.AreYouEligibleForPaidTimeOff,
				text: StringId.MajorityOfStatesHaveTimeOffLaws,
				callToAction: StringId.LookForVoterLeaveStatus,
				link: StringId.Vote411DotOrgLink,
			}
		}

		case PlanStepId.ReviewBallotIssues: {
			return {
				header: StringId.YourBallotInANutshell,
				text: StringId.YoureFamiliarButBallotReadyAppCanHelpYouMakeInformedChoices,
				callToAction: StringId.PlanYourBallotChoices,
				link: StringId.BallotReadyDotOrgLink,
			}
		}

		case PlanStepId.ResearchBallotIssues: {
			return {
				header: StringId.IntroducingYourBallot,
				text: StringId.BallotReadyAppCanHelpYouMakeInformedChoices,
				callToAction: StringId.PlanYourBallotChoices,
				link: StringId.BallotReadyDotOrgLink,
			}
		}

		case PlanStepId.InvitePeople: {
			return {
				header: StringId.InviteYourFriendsToVoteWithYou,
				text: StringId.LetsKeepEachOtherAccountable,
				callToAction: undefined,
				link: undefined,
			}
		}

		case PlanStepId.Excited:
		case PlanStepId.Concerned:
		case PlanStepId.Shocked:
		case PlanStepId.Angry:
		case PlanStepId.Meh: {
			let header = StringId.PutThoseFeelingsTowardAction;
			let text: StringId | undefined;
			const callToAction: StringId | undefined = StringId.SeeWhatHappensWhenWeAllVote;
			const link: StringId | undefined = StringId.WhenWeAllVoteDotOrgLink;

			switch (step) {
				case PlanStepId.Excited: {
					header = StringId.YoureExcited;
					text = StringId.YoureExcitedDescription;
					break;
				}
				case PlanStepId.Concerned: {
					header = StringId.YoureConcerned;
					text = StringId.YoureConcernedDescription;
					break;
				}
				case PlanStepId.Shocked: {
					text = StringId.YoureShocked;
					break;
				}
				case PlanStepId.Angry: {
					text = StringId.YoureAngry;
					break;
				}
				case PlanStepId.Meh: {
					text = StringId.YoureMeh;
					break;
				}
				default:
					throw new Error(`Unrecognized PlanStepId: ${step}`);
			}

			return {
				header,
				text: text!,
				callToAction,
				link,
			}
		}
		default:
			throw new Error(`Unrecognized PlanStepId: ${step}`);
	}
}

// TODO: Translate into Spanish
export function planStepHeaderFormattedString(index: number, header: string) {
	return `Step ${index + 1}: ${header}`;
}

export interface IReasonToVoteStrings {
	header: StringId,
	reasonText: StringId,
	bodyText: StringId,
}

export function getReasonToVoteStrings(planStepId: PlanStepId): IReasonToVoteStrings {
	const header = StringId.RememberYourReasonForVoting;

	switch (planStepId) {
		// TODO: Should these strings just say "Family", "Change", etc.?
		case PlanStepId.ForMyKidsAndFamily: {
			return {
				header,
				reasonText: StringId.ForFamily,
				bodyText: StringId.ForFamilyDescription,
			}
		}

		case PlanStepId.VotingIsPrivilege: {
			return {
				header,
				reasonText: StringId.ItsMyPrivilege,
				bodyText: StringId.ItsMyPrivilegeDescription,
			}
		}

		case PlanStepId.DriveChange: {
			return {
				header,
				reasonText: StringId.ForChange,
				bodyText: StringId.ForChangeDescription,
			}
		}

		case PlanStepId.AlwaysVoted: {
			return {
				header,
				reasonText: StringId.CivicDuty,
				bodyText: StringId.CivicDutyDescription,
			}
		}

		case PlanStepId.OtherReason: {
			return {
				header,
				reasonText: StringId.CivicDuty,
				bodyText: StringId.OtherCivicDutyDescription,
			}
		}

		default: {
			throw new Error("Unhandled PlanStepId");
		}
	}
}

export function getEmojiAltText(planStepId: PlanStepId): StringId {
	switch (planStepId) {
		case PlanStepId.Excited: {
			return StringId.ExcitedEmoji;
		}
		case PlanStepId.Concerned: {
			return StringId.ConcernedEmoji;
		}
		case PlanStepId.Shocked: {
			return StringId.ShockedEmoji;
		}
		case PlanStepId.Angry: {
			return StringId.AngryEmoji;
		}
		case PlanStepId.Meh: {
			return StringId.MehEmoji;
		}
		default: {
			throw new Error("Unhandled PlanStepId");
		}
	}
}
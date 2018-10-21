import { AnswerId, QuestionId, PlanStepId, VotingStateId } from './store';

export enum StringId {
	LanguageColon,
	Yes,
	No,
	NotSure,
	AreYouRegisteredToVote,
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
	PlanPageInvitePeople,
	IsYourRegistrationOk,
	LetsGetRegistered,
	CheckYourRegistration,
	DoubleCheckYourRegistration,
	RockTheVoteDotOrgLink,
	TakeAQuickLookAtYourRegistration,
	NotSureWhetherYoureRegistered,
	RequestYourAbsenteeBallot,
	MakeTheRequest,
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
	FindOutMore,
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
	PlanAheadForDropBox,
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
	ResearchYourBallot,
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
	DeadlineBannerMarkup,
	ColoradoDeadlineDescription,
	OregonDeadlineDescription,
	WashingtonDeadlineDescription,
	WhereAreYouVoting,
	ZipCode,
	Submit,
	WeUseYourZipCodeToProvideMoreElevantInformation,
	Skip,
	PlanYourVoteInviteOthersAndGetReady,
	StartYourPlan,
	StartOver,
	Contact,
	PlanStepHeader,
	CopyrightPrePrivacyPolicy,
	PrivacyPolicy,
	CopyrightPostPrivacyPolicy,
	Donate,
}

const STRINGS_ENGLISH = new Map<StringId, string>([
	[StringId.LanguageColon,
		"Language: "],

	[StringId.Yes,
		"Yes"],

	[StringId.No,
		"No"],

	[StringId.NotSure,
		"Not sure"],

	[StringId.AreYouRegisteredToVote,
		"First things first. Are you registered to vote?"],

	[StringId.DoYouWantToVoteWithAbsenteeBallot,
		"Would you like to vote by absentee ballot?"],

	[StringId.DoYouKnowWhereYourPollingLocationIs,
		"Do you know where your polling location is?"],

	[StringId.WillYouNeedSpecialAccommodations,
		"Will you need special accommodations to reach the polling location?"],

	[StringId.WhatTransportationMethodWillYouUse,
		"How will you get to your polling location?"],

	[StringId.HaveYouReceivedYourBallot,
		"Have you received your ballot?"],

	[StringId.DoYouKnowTheDeadline,
		"Do you know when the deadline is?"],

	[StringId.HowWillYouReturnYourBallot,
		"How will you return your ballot?"],

	[StringId.WillYouMissWork,
		"Will you have to miss/leave work to vote?"],

	[StringId.AreYouFamiliarWithYourBallot,
		"Do you know who/what you\'ll be voting for?"],

	[StringId.AreTherePeopleToInvite,
		"Spread the word! Are there people in your life you\'d like to vote with?"],

	[StringId.WhyWillYouVote,
		"Why will you be voting?"],

	[StringId.HowAreYouFeeling,
		"How are you feeling about these midterm elections?"],

	[StringId.Washington,
		"Washington"],

	[StringId.Oregon,
		"Oregon"],

	[StringId.Colorado,
		"Colorado"],

	[StringId.AnotherState,
		"Another state"],

	[StringId.DriveMyself,
		"Drive myself"],

	[StringId.Carpool,
		"Carpool"],

	[StringId.RideShare,
		"Car for hire"],

	[StringId.Taxi,
		"Taxi"],

	[StringId.MassTransit,
		"Mass transit"],

	[StringId.Walk,
		"Walk"],

	[StringId.Bike,
		"Bike"],

	[StringId.Mail,
		"Mail"],

	[StringId.BallotBox,
		"Ballot box"],

	[StringId.Friends,
		"Friend(s)"],

	[StringId.FamilyMembers,
		"Family member(s)"],

	[StringId.Coworkers,
		"Co-worker(s)"],

	[StringId.NotAtThisTime,
		"Not at this time"],

	[StringId.MyKidsFamily,
		"My kids / family"],

	[StringId.ItsAPrivilege,
		"It\'s a privilege"],

	[StringId.ToDriveChange,
		"To drive change"],

	[StringId.IveAlwaysVoted,
		"I\'ve always voted"],

	[StringId.Other,
		"Other"],

	[StringId.Excited,
		"Excited"],

	[StringId.Concerned,
		"Concerned"],

	[StringId.Shocked,
		"Shocked"],

	[StringId.Angry,
		"Angry"],

	[StringId.Meh,
		"Meh"],

	[StringId.PlanPageSubheader,
		"You've done the prep. Your voice matters. Get out there and vote in the midterms!"],

	[StringId.PlanPageInvitePeople,
		"Invite people to make a plan:"],

	[StringId.IsYourRegistrationOk,
		"Is your registration A-OK?"],

	[StringId.LetsGetRegistered,
		"Let's do this: get registered!"],       // TODO: Capitalize Get?

	[StringId.CheckYourRegistration,
		"Check your registration"],

	[StringId.DoubleCheckYourRegistration,
		"Double-check your registration"],

	[StringId.RockTheVoteDotOrgLink,
		"https://www.rockthevote.org/voting-information/am-i-registered-to-vote/"],        // TODO: Spanish-specific links

	[StringId.TakeAQuickLookAtYourRegistration,
		"Great \u2014 you're registered! Now take a quick look to make sure everything is up-to-date."],

	[StringId.NotSureWhetherYoureRegistered,
		"Not sure whether you're registered? Take a minute to double-check and make sure you're vote ready."],

	[StringId.RequestYourAbsenteeBallot,
		"Request your absentee ballot"],

	[StringId.MakeTheRequest,
		"Make the request"],

	[StringId.HaveBallotWillVote,
		"Have ballot, will vote!"],

	[StringId.YouveGotItNowSubmitIt,
		"You've got it, now submit it. (Don't forget to check the postage requirements if you're using the U.S. Postal Service.)"],    // TODO: Spell out U.S. Postal Service

	[StringId.FindYourColoradoBallot,
		"Find your Colorado ballot"],

	[StringId.FindYourOregonBallot,
		"Find your Oregon ballot"],

	[StringId.FindYourWashingtonBallot,
		"Find your Washington ballot"],

	[StringId.ColoradoBallotLink,
		"http://www.sos.state.co.us/pubs/elections/vote/VoterHome.html"],

	[StringId.OregonBallotLink,
		"https://sos.oregon.gov/voting/pages/myvote.aspx?lang=en"], // TODO: lang=es

	[StringId.WashingtonBallotLink,
		"https://weiapplets.sos.wa.gov/myvote/#/login"],

	[StringId.BallotHasntShownUpYet,
		"Ballot hasn't shown up yet?"],

	[StringId.TrackYourBallotOnline,
		"Track your ballot online and find out when to expect it."],

	[StringId.ColoradoDeadlineLink,
		"https://www.sos.state.co.us/pubs/elections/FAQs/ElectionDay.html"],

	[StringId.OregonDeadlineLink,
		"https://sos.oregon.gov/voting/Pages/voteinor.aspx"],

	[StringId.WashingtonDeadlineLink,
		"https://www.sos.wa.gov/elections/dates-and-deadlines.aspx"],

	[StringId.WhenIsTheDeadlineExactly,
		"When is the deadline, exactly?"],

	[StringId.FindOutMore,
		"Find out more"],

	[StringId.CheckYourDeadlineAndDontForgetPostage,
		"Check up on your deadline and rest easy. (And don't forget postage if your ballot envelope is not prepaid.)"],

	[StringId.CheckYourDeadlineAndRestEasy,
		"Check up on your deadline and rest easy."],

	[StringId.FindColoradoMailingDetails,
		"Find Colorado mailing details"],

	[StringId.FindOregonMailingDetails,
		"Find Oregon mailing details"],

	[StringId.FindWashingtonMailingDetails,
		"Find Washington mailing details"],

	[StringId.ColoradoMailingDetailsLink,
		"https://www.sos.state.co.us/pubs/elections/FAQs/GeneralInfoFAQ.html"],

	[StringId.OregonMailingDetailsLink,
		"https://sos.oregon.gov/voting/Pages/voteinor.aspx"],

	[StringId.WashingtonMailingDetailsLink,
		"https://www.sos.wa.gov/elections/faq_vote_by_mail.aspx"],

	[StringId.DropYourBallotInTheMail,
		"Drop your ballot in the mail, pronto!"],

	[StringId.ColoradoDropBoxLink,
		"https://www.sos.state.co.us/pubs/elections/"],

	[StringId.OregonDropBoxLink,
		"https://sos.oregon.gov/voting/pages/drop-box-locator.aspx"],

	[StringId.WashingtonDropBoxLink,
		"https://www.sos.wa.gov/elections/auditors/"],	// TODO: Is this really the best URL?

	[StringId.DiscoverYourNeighborhoodDropBox,
		"Find your ballot drop box."],

	[StringId.PlanAheadForDropBox,
		"Plan ahead for a convenient ballot box drop in your neighborhood."],

	[StringId.FindDropboxNearYou,
		"Find a ballot drop box near you"],

	[StringId.CheckAbsenteePostageAndDeadline,
		"A convenient way to go! Just remember to check on postage and your mailing deadline."],

	[StringId.VoteDotOrgAbsenteeBallotLink,
		"https://www.vote.org/absentee-ballot/"],

	[StringId.HasYourPollingLocationMoved,
		"Your polling location: has it moved?"],

	[StringId.CheckYourPollingLocationBecauseThingsChange,
		"Things change \u2014 make sure you're aware of your area's best polling locations and hours."],

	[StringId.ThisWayToThePolls,
		"This way to the polls!"],

	[StringId.VoteDotOrgPollingPlaceLocatorLink,
		"https://www.vote.org/polling-place-locator/"],

	[StringId.FindYourPollingLocation,
		"Find your polling location"],

	[StringId.FindYourPollingLocationDetails,
		"Make it easy on yourself! Find your polling location through the link below."],

	[StringId.PlanYourTripWithAssistance,
		"Plan your trip, with the assistance you need"],

	[StringId.SpecialAcommodationsAreAvailable,
		"Special accommodations to help you get to your polling place are available. It's easy to plan ahead!"],

	[StringId.AccessAssistance,
		"Access assistance"],

	[StringId.EacDotGovLink,
		"https://www.eac.gov/voters/resources-for-voters-with-disabilities/"],

	[StringId.GetThereByCar,
		"Get there by car"],

	[StringId.RoundUpFellowVotersForCarpoolOrTaxi,
		"Great plan. Even better: Round up some fellow voters to share the ride, and have the address in hand!"],

	[StringId.RoundUpFellowVotersForRideShare,
		"Great plan. Even better: Round up some fellow voters to share the ride!"],

	[StringId.PlanYourRouteToThePolls,
		"Plan your route to the polls"],

	[StringId.CheckLyft,
		"Check Lyft for voting day deals"],

	[StringId.LyftLink,
		"https://blog.lyft.com/posts/2018/8/22/get-out-the-vote"],		// TODO: Spanish

	[StringId.GetThereByTaxi,
		"Get there by taxi"],

	[StringId.TakeMassTransitToThePolls,
		"Take mass transit to the polls"],

	[StringId.PlanYourTransitRouteAheadOfTime,
		"Great plan. Even better: Plan your route ahead of time and enjoy the trip!"],

	[StringId.PlanYourTransitRoute,
		"Plan your bus/train route"],

	[StringId.GoogleMapsTransitLink,
		"https://maps.google.com/landing/transit/index.html"],

	[StringId.WalkOrBikeToThePolls,
		"Walk or bike to the polls"],

	[StringId.RainSlowSleetNoWorries,
		"Rain, snow, sleet...no worries! You'll be ready with a quick weather report."],

	[StringId.CheckVotingDayConditions,
		"Check voting day conditions"],

	[StringId.WeatherDotComLink,
		"weather.com"],    // TODO: No http?

	[StringId.AreYouEligibleForPaidTimeOff,
		"Paid time-off to vote: are you eligible?"],

	[StringId.MajorityOfStatesHaveTimeOffLaws,
		"The majority of states have time-off-to-vote laws (also called voter-leave laws). Check ahead of voting day and coordinate plans with your workplace."],

	[StringId.LookForVoterLeaveStatus,
		"Look for your state's voter-leave law status"],

	[StringId.Vote411DotOrgLink,
		"https://www.vote411.org/taxonomy/term/75#.W5RxBuhKjD4"],		// TODO: Is this really the URL?

	[StringId.ResearchYourBallot,
		"Research your ballot"],

	[StringId.YoureFamiliarButBallotReadyAppCanHelpYouMakeInformedChoices,
		"You're familiar with the candidates and issues. The Ballot Ready app can help you make informed choices."],

	[StringId.PlanYourBallotChoices,
		"Plan your ballot choices"],

	[StringId.BallotReadyDotOrgLink,
		"https://www.ballotready.org/"],

	[StringId.IntroducingYourBallot,
		"Introducing...your ballot!"],

	[StringId.BallotReadyAppCanHelpYouMakeInformedChoices,
		"Now's the perfect time to research the candidates and issues you'll be voting for. The Ballot Ready app can help you make informed choices."],

	[StringId.InviteYourFriendsToVoteWithYou,
		"Invite your crowd to vote with you"],    // TODO: Review: "your crowd?

	[StringId.LetsKeepEachOtherAccountable,
		"Let's keep each other accountable \u2014 voting's even better when we can do it together!"],

	[StringId.PutThoseFeelingsTowardAction,
		"Put those feelings toward action"],

	[StringId.SeeWhatHappensWhenWeAllVote,
		"See what happens When We All Vote"],

	[StringId.WhenWeAllVoteDotOrgLink,
		"https://www.whenweallvote.org/"],

	[StringId.YoureExcited,
		"You're excited about voting!"],

	[StringId.YoureExcitedDescription,
		"Well, great \u2014 you're not the only one! Watch this and keep participating!"],

	[StringId.YoureConcerned,
		"Put those feelings toward voting action"],

	[StringId.YoureConcernedDescription,
		"You're feeling concerned \u2014 we get it! These are complicated times. Watch this and get inspired."],

	[StringId.YoureShocked,
		"You're feeling shocked \u2014 we get it! These are complicated times. Watch this and get inspired."],

	[StringId.YoureAngry,
		"You're feeling angry \u2014 we get it! These are complicated times. Watch this and get inspired."],

	[StringId.YoureMeh,
		"Feeling ambivalent? Your voting plans are taking shape \u2014 now get out there!"],

	[StringId.RememberYourReasonForVoting,
		"Remember your reason for voting!"],

	[StringId.ForFamily,
		"For Family"],

	[StringId.ForFamilyDescription,
		"Whether you're looking out for the next generation or for your family members today, you're right: your vote has an impact!"],

	[StringId.ItsMyPrivilege,
		"It's My Privilege"],

	[StringId.ItsMyPrivilegeDescription,
		"Yep, you've got the right idea, and we agree. Let's not take voting for granted!"],

	[StringId.ForChange,
		"For Change"],

	[StringId.ForChangeDescription,
		"You're about to do the single best thing you can to weigh in on issues and decision-makers. Do you approve? Disapprove? Your vote is a meaningful message \u2014 pass it on!"],

	[StringId.CivicDuty,
		"Civic Duty"],

	[StringId.CivicDutyDescription,
		"You've always voted \u2014 good on you! Spread the word and keep up the great (and extremely important) civic habit."],

	[StringId.OtherCivicDutyDescription,
		"You're about to do the single best thing you can to weigh in on issues and decision-makers. Do you approve? Disapprove? Your vote is a meaningful message \u2014 pass it on!"],

	[StringId.ExcitedEmoji,
		"Excited emoji"],

	[StringId.ConcernedEmoji,
		"Concerned emoji"],

	[StringId.ShockedEmoji,
		"Shocked emoji"],

	[StringId.AngryEmoji,
		"Angry emoji"],

	[StringId.MehEmoji,
		"Meh emoji"],

	[StringId.DeadlineBannerMarkup,
		"<strong>Make a plan to vote.</strong> The midterm elections are on <strong>November 6th</strong>."],

	[StringId.ColoradoDeadlineDescription,
		"In Colorado, your ballot must be received by your county clerk by <strong>7:00 p.m.</strong> on Election Day (Tuesday, November 6, 2018). You can either mail it or drop it off in person."],

	[StringId.OregonDeadlineDescription,
		"In Oregon, your ballot must be received by <strong>8:00 p.m.</strong> on Election Day (Tuesday, November 6, 2018). If you haven't sent your ballot by October 31, 2018, you should drop off the ballot in person to make sure it's counted."],

	[StringId.WashingtonDeadlineDescription,
		"In Washington, your ballot must be postmarked on or before Election Day (Tuesday, November 6, 2018). Ballot drop boxes close promptly at <strong>8:00 p.m.</strong> on Election Day."],

	[StringId.WhereAreYouVoting,
		"<em>Where</em> will you be voting?"],

	[StringId.ZipCode,
		"ZIP code"],

	[StringId.Submit,
		"Submit"],

	[StringId.WeUseYourZipCodeToProvideMoreElevantInformation,
		"(We use your ZIP code to help us give you more relevant questions and actions.)"],

	[StringId.Skip,
		"Skip"],

	[StringId.PlanYourVoteInviteOthersAndGetReady,
		"Plan your vote, invite others, and get ready!"],

	[StringId.StartYourPlan,
		"Start Your Plan"],

	[StringId.StartOver,
		"Start Over"],

	[StringId.Contact,
		"Contact"],

	[StringId.PlanStepHeader,
		"Step {NUMBER}: {HEADER}"],

	[StringId.CopyrightPrePrivacyPolicy,
		"\u00a9 Voting Voices.  All rights reserved. View our "],

	[StringId.PrivacyPolicy,
		"privacy policy"],

	[StringId.CopyrightPostPrivacyPolicy,
		"."],

	[StringId.Donate,
		"Donate"],
]);

const STRINGS_SPANISH = new Map<StringId, string>([
	[StringId.LanguageColon,
		"Idioma: "],

	[StringId.Yes,
		// "Yes"],
		"Sí"],

	[StringId.No,
		// "No"],
		"No"],

	[StringId.NotSure,
		// "Not sure"],
		"No estoy seguro"],

	[StringId.AreYouRegisteredToVote,
		// "First things first. Are you registered to vote?"],
		"Primero lo primero. ¿Está registrado para votar?"],

	[StringId.DoYouWantToVoteWithAbsenteeBallot,
		// "Would you like to vote by absentee ballot?"],
		"¿Le gustaría votar por correspondencia?"],

	[StringId.DoYouKnowWhereYourPollingLocationIs,
		// "Do you know where your polling location is?"],
		"¿Sabe dónde está ubicado su puesto de votación?"],

	[StringId.WillYouNeedSpecialAccommodations,
		// "Will you need special accommodations to reach the polling location?"],
		"¿Necesita acomadaciones especiales para llegar a su puesto de votación?"],

	[StringId.WhatTransportationMethodWillYouUse,
		// "How will you get to your polling location?"],
		"¿Cómo va a llegar a su puesto de votación?"],

	[StringId.HaveYouReceivedYourBallot,
		// "Have you received your ballot?"],
		"¿Ha recibido su cartón de votación?"],

	[StringId.DoYouKnowTheDeadline,
		// "Do you know when the deadline is?"],
		"¿Sabe cuándo es la fecha límite para votar?"],

	[StringId.HowWillYouReturnYourBallot,
		// "How will you return your ballot?"],
		"¿Cómo va a enviar su cartón de votación?"],

	[StringId.WillYouMissWork,
		// "Will you have to miss/leave work to vote?"],
		"¿Tiene que ausentarse o salir del trabajo para poder votar?"],

	[StringId.AreYouFamiliarWithYourBallot,
		// "Do you know who/what you\'ll be voting for?"],
		"¿Sabe por qué o por quién va a votar?"],

	[StringId.AreTherePeopleToInvite,
		// "Spread the word! Are there people in your life you\'d like to vote with?"],
		"Pase la voz! ¿Hay personas con quienes le gustaría ir a votar?"],

	[StringId.WhyWillYouVote,
		// "Why will you be voting?"],
		"¿Por qué va a votar?"],

	[StringId.HowAreYouFeeling,
		// "How are you feeling about these midterm elections?"],
		"¿Cómo se siente acerca de las elecciones de mitad de periodo?"],

	[StringId.Washington,
		"Washington"],

	[StringId.Oregon,
		"Oregon"],

	[StringId.Colorado,
		"Colorado"],

	[StringId.AnotherState,
		// "Another state"],
		"Otro estado"],

	[StringId.DriveMyself,
		// "Drive myself"],
		"Voy a conducir"],

	[StringId.Carpool,
		// "Carpool"],
		"Compartir automovil"],

	[StringId.RideShare,
		// "Car for hire"],
		"Carro en alquiler"],

	[StringId.Taxi,
		// "Taxi"],
		"Taxi"],

	[StringId.MassTransit,
		// "Mass transit"],
		"Transporte público"],

	[StringId.Walk,
		// "Walk"],
		"Caminar"],

	[StringId.Bike,
		// "Bike"],
		"Bicicleta"],

	[StringId.Mail,
		// "Mail"],
		"Correo"],

	[StringId.BallotBox,
		// "Ballot box"],
		"Urna de votación"],

	[StringId.Friends,
		// "Friend(s)"],
		"Amigos"],

	[StringId.FamilyMembers,
		// "Family member(s)"],
		"Miembros de la familia"],

	[StringId.Coworkers,
		// "Co-worker(s)"],
		"Compañeros de trabajo"],

	[StringId.NotAtThisTime,
		// "Not at this time"],
		"No en este momento"],

	[StringId.MyKidsFamily,
		// "My kids / family"],
		"Mis hijos o familia"],

	[StringId.ItsAPrivilege,
		// "It\'s a privilege"],
		"Es un privilegio"],

	[StringId.ToDriveChange,
		// "To drive change"],
		"Para impulsar un cambio"],

	[StringId.IveAlwaysVoted,
		// "I\'ve always voted"],
		"Yo siempre he votado"],

	[StringId.Other,
		// "Other"],
		"Otro"],

	[StringId.Excited,
		// "Excited"],
		"Entusiasmado"],

	[StringId.Concerned,
		// "Concerned"],
		"Preocupado"],

	[StringId.Shocked,
		// "Shocked"],
		"Consternado"],

	[StringId.Angry,
		// "Angry"],
		"Con rabia"],

	[StringId.Meh,
		// "Meh"],
		"Indiferente"],

	[StringId.PlanPageSubheader,
		// "You've done the prep. Your voice matters. Get out there and vote in the midterms!"],
		"Lo ha hecho. Su voz importa. Salga y vote en las elecciones de término medio."],

	[StringId.PlanPageInvitePeople,
		// TODO: Maybe have a espanophone check this google translate.  Figured google translate is better than nada, though :)
		'Invita a la gente a hacer un plan:'],

	[StringId.IsYourRegistrationOk,
		// "Is your registration A-OK?"],
		"¿Está todo listo en la inscripción?"],

	[StringId.LetsGetRegistered,
		// "Let's do this: get registered!"],       // TODO: Capitalize Get?
		"Hagámolo: Registreme"],

	[StringId.CheckYourRegistration,
		// "Check your registration"],
		"Verifique su inscripción"],

	[StringId.DoubleCheckYourRegistration,
		// "Double-check your registration"],
		"Revise su registro"],

	[StringId.RockTheVoteDotOrgLink,
		"https://www.rockthevote.org/voting-information/am-i-registered-to-vote/"],        // TODO: Spanish-specific links

	[StringId.TakeAQuickLookAtYourRegistration,
		// "Great \u2014 you're registered! Now take a quick look to make sure everything is up-to-date."],
		"Fantástico \u2014 usted dijo que está registrado! Revisemos que todo esté al día."],

	[StringId.NotSureWhetherYoureRegistered,
		// "Not sure whether you're registered? Take a minute to double-check and make sure you're vote ready."],
		"No está seguro de haberse registrado? Tome un minuto para revisar y veríficar que está listo para votar"],

	[StringId.RequestYourAbsenteeBallot,
		// "Request your absentee ballot"],
		"Pida su voto por correspondencia"],

	[StringId.MakeTheRequest,
		// "Make the request"],
		"Haga su solicitud"],

	[StringId.HaveBallotWillVote,
		// "Have ballot, will vote!"],
		"Tengo un cartón de votación. Votaré!"],		// TODO: Tiene?

	[StringId.YouveGotItNowSubmitIt,
		// "You've got it, now submit it. (Don't forget to check the postage requirements if you're using the U.S. Postal Service.)"],		// TODO: Clarify in English that you can only use USPS to mail the ballot?
		"Ya lo tiene, ahora envíalo. (No se le olvidé revisar los requerimientos postales de U.S. Postal Service.)"],

	[StringId.FindYourColoradoBallot,
		// "Find your Colorado ballot"],
		"Encuentre su cartón de votación de Colorado"],

	[StringId.FindYourOregonBallot,
		// "Find your Oregon ballot"],
		"Encuentre su cartón de votación de Oregon"],

	[StringId.FindYourWashingtonBallot,
		// "Find your Washington ballot"],
		"Encuentre su cartón de votación de Washington"],

	[StringId.ColoradoBallotLink,
		"http://www.sos.state.co.us/pubs/elections/vote/VoterHome.html"],

	[StringId.OregonBallotLink,
		"https://sos.oregon.gov/voting/pages/myvote.aspx?lang=en"], // TODO: lang=es

	[StringId.WashingtonBallotLink,
		"https://weiapplets.sos.wa.gov/myvote/#/login"],

	[StringId.BallotHasntShownUpYet,
		// "Ballot hasn't shown up yet?"],		// TODO: We should clarify this English string
		"No he recibido el carton de votación aún."],		// TODO: Use usted instead of yo?.  Diego's suggestion: Use the string beginning with "rastree su carton de votacion"

	[StringId.TrackYourBallotOnline,
		// "Track your ballot online and find out when to expect it."],
		"Rastree su cartón de votación y sepá cuando va a llegar"],

	[StringId.ColoradoDeadlineLink,
		"https://www.sos.state.co.us/pubs/elections/FAQs/ElectionDay.html"],

	[StringId.OregonDeadlineLink,
		"https://sos.oregon.gov/voting/Pages/voteinor.aspx"],

	[StringId.WashingtonDeadlineLink,
		"https://www.sos.wa.gov/elections/dates-and-deadlines.aspx"],

	[StringId.WhenIsTheDeadlineExactly,
		// "When is the deadline, exactly?"],
		"Cuándo es la fecha límite?"],

	[StringId.FindOutMore,
		// "Find out more"],
		"Conozca más"],

	[StringId.CheckYourDeadlineAndDontForgetPostage,
		// "Check up on your deadline and rest easy. (And don't forget postage if your ballot envelope is not prepaid.)"],
		"¡Revise su fecha límite, el resto es fácil! No olvidé poner la estampilla si el sobre no es prepagado"],

	[StringId.CheckYourDeadlineAndRestEasy,
		// "Check up on your deadline and rest easy."],
		"Revise la fecha límite y el resto es fácil"],

	[StringId.FindColoradoMailingDetails,
		// "Find Colorado mailing details"],
		"Encuentre los detalles de envío en Colorado"],

	[StringId.FindOregonMailingDetails,
		// "Find Oregon mailing details"],
		"Encuentre los detalles de envío en Oregon"],

	[StringId.FindWashingtonMailingDetails,
		// "Find Washington mailing details"],
		"Encuentre los detalles de envío en Washington"],

	[StringId.ColoradoMailingDetailsLink,
		"https://www.sos.state.co.us/pubs/elections/FAQs/GeneralInfoFAQ.html"],

	[StringId.OregonMailingDetailsLink,
		"https://sos.oregon.gov/voting/Pages/voteinor.aspx"],

	[StringId.WashingtonMailingDetailsLink,
		"https://www.sos.wa.gov/elections/faq_vote_by_mail.aspx"],

	[StringId.DropYourBallotInTheMail,
		// "Drop your ballot in the mail, pronto!"],
		"Envíe su cartón de votación, pronto!"],

	[StringId.ColoradoDropBoxLink,
		"https://www.sos.state.co.us/pubs/elections/FAQs/ElectionDay.html"],

	[StringId.OregonDropBoxLink,
		"https://sos.oregon.gov/voting/pages/drop-box-locator.aspx"],

	[StringId.WashingtonDropBoxLink,
		"https://www.sos.wa.gov/elections/auditors/"],	// TODO: Is this really the best URL?

	[StringId.DiscoverYourNeighborhoodDropBox,
		// "Find your ballot drop box."],
		"Encuentre el casillero de envío."],

	[StringId.PlanAheadForDropBox,
		// "Plan ahead for a convenient ballot box drop in your neighborhood."],
		// TODO: Do we need an accent
		"Planee con tiempo el envío de su cartón de votación."],

	[StringId.FindDropboxNearYou,
		// "Find a ballot drop box near you"],
		"Encuentre un casillero de envío cerca a usted"],

	[StringId.CheckAbsenteePostageAndDeadline,
		// "A convenient way to go! Just remember to check on postage and your mailing deadline."],
		"Una forma sencilla de realizarlo! Recuerde revisar la estampilla y la fecha límite de envío."],

	[StringId.VoteDotOrgAbsenteeBallotLink,
		"https://www.vote.org/absentee-ballot/"],

	[StringId.HasYourPollingLocationMoved,
		// "Your polling location: has it moved?"],
		"Se ha movido su puesto de votación?"],

	[StringId.CheckYourPollingLocationBecauseThingsChange,
		// "Things change \u2014 make sure you're aware of your area's best polling locations and hours."],
		"Las cosas cambian, \u2014 cerciorese que sepa cuales son los mejores lugares de votación y sus horarios."],

	[StringId.ThisWayToThePolls,
		// "This way to the polls!"],
		"Por esta ruta a los lugares de votación"],

	[StringId.VoteDotOrgPollingPlaceLocatorLink,
		"https://www.vote.org/polling-place-locator/"],

	[StringId.FindYourPollingLocation,
		// "Find your polling location"],
		"Encuentre su puesto de votación"],

	[StringId.FindYourPollingLocationDetails,
		// "Make it easy on yourself! Find your polling location through the link below."],
		"Hagalo fácil! Encuentre su puesto de votación en el siguiente link"],

	[StringId.PlanYourTripWithAssistance,
		// "Plan your trip, with the assistance you need"],
		"Planee su viaje con la asistencia que necesita"],

	[StringId.SpecialAcommodationsAreAvailable,
		// "Special accommodations to help you get to your polling place are available. It's easy to plan ahead!"],
		"Hay asistencia especiales para llevarlo al lugar de votación. Es simple de planear."],

	[StringId.AccessAssistance,
		// "Access assistance"],
		"Acceder a asistencia"],

	[StringId.EacDotGovLink,
		"https://www.eac.gov/voters/resources-for-voters-with-disabilities/"],

	[StringId.GetThereByCar,
		// "Get there by car"],
		"Vaya por carro"],

	[StringId.RoundUpFellowVotersForCarpoolOrTaxi,
		// "Great plan. Even better: Round up some fellow voters to share the ride, and have the address in hand!"],
		"Gran plan. Aún mejor: Encontremos más personas que van a votar para compartir el viaje."],

	[StringId.RoundUpFellowVotersForRideShare,
		// "Great plan. Even better: Round up some fellow voters to share the ride!"],
		"Gran plan. Aún mejor: Encontremos más personas que van a votar para compartir el viaje."],

	[StringId.PlanYourRouteToThePolls,
		// "Plan your route to the polls"],
		"Planee la ruta al puesto de votación"],

	[StringId.CheckLyft,
		// "Check Lyft for voting day deals"],
		"Revise Lyft para decuentos en el día de votación."],

	[StringId.LyftLink,
		"https://blog.lyft.com/posts/2018/8/22/get-out-the-vote"],		// TODO: Spanish

	[StringId.GetThereByTaxi,
		// "Get there by taxi"],
		"Llegue por medio de Taxi"],

	[StringId.TakeMassTransitToThePolls,
		// "Take mass transit to the polls"],
		"Llegaré tomando transporte público"],

	[StringId.PlanYourTransitRouteAheadOfTime,
		// "Great plan. Even better: Plan your route ahead of time and enjoy the trip!"],
		"Gran plan. Aún mejor: Encontremos más personas que van a votar para compartir el viaje"],

	[StringId.PlanYourTransitRoute,
		// "Plan your bus/train route"],
		"Planee la ruta de bus o tren"],

	[StringId.GoogleMapsTransitLink,
		"https://maps.google.com/landing/transit/index.html"],

	[StringId.WalkOrBikeToThePolls,
		// "Walk or bike to the polls"],
		"Camine o vaya en bicicleta a los puestos de votación"],

	[StringId.RainSlowSleetNoWorries,
		// "Rain, snow, sleet...no worries! You'll be ready with a quick weather report."],
		"No se preocupe si llueve, neva u otro pasa! Va a estar preparado con un rápido reporte del tiempo."],

	[StringId.CheckVotingDayConditions,
		// "Check voting day conditions"],
		"Revise las condiciones del día de votación"],

	[StringId.WeatherDotComLink,
		"weather.com"],    // TODO: No http?

	[StringId.AreYouEligibleForPaidTimeOff,
		// "Paid time-off to vote: are you eligible?"],
		"¿Es elegible para que le paguen el tiempo de voto en el trabajo?"],

	[StringId.MajorityOfStatesHaveTimeOffLaws,
		// "The majority of states have time-off-to-vote laws (also called voter-leave laws). Check ahead of voting day and coordinate plans with your workplace."],
		"La mayoría de los estados tienen leyes para obtener tiempo pago para ir a votar. Revise y coordine con su trabajo antes del día de la votación"],

	[StringId.LookForVoterLeaveStatus,
		// "Look for your state's voter-leave law status"],
		"Busque las leyes que aplican a su estado"],

	[StringId.Vote411DotOrgLink,
		"https://www.vote411.org/taxonomy/term/75#.W5RxBuhKjD4"],		// TODO: Is this really the URL?

	[StringId.ResearchYourBallot,
		// "Research your ballot."],
		"Invéstigue la decisión para su voto"],

	[StringId.YoureFamiliarButBallotReadyAppCanHelpYouMakeInformedChoices,
		// "You're familiar with the candidates and issues. The Ballot Ready app can help you make informed choices."],
		"Esta familiarizado con los candidatos y sus preocupaciones. La applicación de Ballot Ready le puede ayudar a hacer decisiones con más contexto."],

	[StringId.PlanYourBallotChoices,
		// "Plan your ballot choices"],
		"Planee su decisiones de voto"],

	[StringId.BallotReadyDotOrgLink,
		"https://www.ballotready.org/"],

	[StringId.IntroducingYourBallot,
		// "Introducing...your ballot!"],
		"Introducción a su cartón de votación"],

	[StringId.BallotReadyAppCanHelpYouMakeInformedChoices,
		// "Now's the perfect time to research the candidates and issues you'll be voting for. The Ballot Ready app can help you make informed choices."],
		"Ahora es el perfecto momento para investigar los candidatos y las propuestas por las que va a votar. La aplicación Ballot Ready lo puede ayudar decisiones informadas."],

	[StringId.InviteYourFriendsToVoteWithYou,
		// "Invite your crowd to vote with you"],    // TODO: Review: "your crowd?
		"Invite a las personas a votar con usted"],

	[StringId.LetsKeepEachOtherAccountable,
		// "Let's keep each other accountable \u2014 voting's even better when we can do it together!"],
		"Anime a las personas \u2014 votar es aún mejor cuando lo hacemos juntos!"],

	[StringId.PutThoseFeelingsTowardAction,
		// "Put those feelings toward action"],
		"Ponga esos sentimientos en acciones"],

	[StringId.SeeWhatHappensWhenWeAllVote,
		// "See what happens When We All Vote"],
		"Revise que pasa cuando todos votamos"],

	[StringId.WhenWeAllVoteDotOrgLink,
		"https://www.whenweallvote.org/"],

	[StringId.YoureExcited,
		// "You're excited about voting!"],
		"Usted está emocionado por votar"],

	[StringId.YoureExcitedDescription,
		// "Well, great \u2014 you're not the only one! Watch this and keep participating!"],
		"Grandioso, \u2014 no eres el único! Mire esto y mantengase particiando."],

	[StringId.YoureConcerned,
		// "Put those feelings toward voting action"],
		"Ponga esos sentimientos en una acción"],

	[StringId.YoureConcernedDescription,
		// "You're feeling concerned \u2014 we get it! These are complicated times. Watch this and get inspired."],
		"Se está sintiendo preocupado \u2014 lo entendemos! Estos son tiempos complicados. Vea esto para sentirse inspirado."],

	[StringId.YoureShocked,
		// "You're feeling shocked \u2014 we get it! These are complicated times. Watch this and get inspired."],
		"Se está sintiendo consternado \u2014 lo entendemos! Estos son tiempos complicados. Vea esto para sentirse inspirado."],

	[StringId.YoureAngry,
		// "You're feeling angry \u2014 we get it! These are complicated times. Watch this and get inspired."],
		"Se está sintiendo con rabia \u2014 lo entendemos! Estos son tiempos complicados. Vea esto para sentirse inspirado."],

	[StringId.YoureMeh,
		// "Feeling ambivalent? Your voting plans are taking shape \u2014 now get out there!"],
		"Se está sintiendo ahí? Sus planes de votación estan tomando forma \u2014 ahora salga a realizarlos."],

	[StringId.RememberYourReasonForVoting,
		// "Remember your reason for voting!"],
		"¡Recuerde la razon para votar!"],

	[StringId.ForFamily,
		// "For Family"],
		"Por la familia"],

	[StringId.ForFamilyDescription,
		// "Whether you're looking out for the next generation or for your family members today, you're right: your vote has an impact!"],
		"Ya sea que este velando por la siguiente generación o por los miembros de su familia de hoy, está en lo correcto: su voto tiene un impacto."],

	[StringId.ItsMyPrivilege,
		// "It's My Privilege"],
		"Es mi privilegio"],

	[StringId.ItsMyPrivilegeDescription,
		// "Yep, you've got the right idea, and we agree. Let's not take voting for granted!"],
		"Sí, usted tiene la idea correcta y nosotros estamos de acuerdo. No tomemos la votación por sentado."],

	[StringId.ForChange,
		// "For Change"],
		"Por cambio"],

	[StringId.ForChangeDescription,
		// "You're about to do the single best thing you can to weigh in on issues and decision-makers. Do you approve? Disapprove? Your vote is a meaningful message \u2014 pass it on!"],
		"Va a realizar la mejor acción para opinar sobre las propuestas y las personas que toman las decisones. ¿Aprueba? ¿Desaprueba? Su voto es un mensaje importante \u2014 hagalo conocer."],

	[StringId.CivicDuty,
		// "Civic Duty"],
		"Labor cívica"],

	[StringId.CivicDutyDescription,
		// "You've always voted \u2014 good on you! Spread the word and keep up the great (and extremely important) civic habit."],
		"Usted siempre ha votado \u2014 ¡muy bien! Pasé la voz y mantenga el grandioso e importante hábito."],		// TODO: Lowercase "muy" and leading exclamation point?

	[StringId.OtherCivicDutyDescription,
		// "You're about to do the single best thing you can to weigh in on issues and decision-makers. Do you approve? Disapprove? Your vote is a meaningful message \u2014 pass it on!"],
		"Va a realizar la mejor acción para opinar sobre las propuestas y las personas que toman las decisones. ¿Aprueba? ¿Desaprueba? Su voto es un mensaje importante \u2014 hagalo conocer."],

	[StringId.ExcitedEmoji,
		// "Excited emoji"],
		"Emoji emocionado"],

	[StringId.ConcernedEmoji,
		// "Concerned emoji"],
		"Emoji procupado"],

	[StringId.ShockedEmoji,
		// "Shocked emoji"],
		"Emoji consterando"],

	[StringId.AngryEmoji,
		// "Angry emoji"],
		"Emoji con rabia"],

	[StringId.MehEmoji,
		// "Meh emoji"],
		"Emoji indiferente"],

	[StringId.DeadlineBannerMarkup,
		// "<strong>Make a plan to vote.</strong> The midterm elections are on <strong>November 6th</strong>."],
		"<strong>Haga un plan para votar.</strong> Las elecciones de término medio son el <strong>6 de Noviembre</strong>."],

	[StringId.ColoradoDeadlineDescription,
		// "In Colorado, your ballot must be received by your county clerk by <strong>7:00 p.m.</strong> on Election Day (Tuesday, November 6, 2018). You can either mail it or drop it off in person."],
		"En Colorado, su cartón de votación debe ser recibido por el secretario del condado antes de <strong>8:00 p.m.</strong> el día de las elecciones (Martes, Noviembre 6, 2018). Usted puede enviarlo por correo postal o entregarlo personalmente."],

	[StringId.OregonDeadlineDescription,
		// "In Oregon, your ballot must be received by <strong>8:00 p.m.</strong> on Election Day (Tuesday, November 6, 2018). If you haven't sent your ballot by October 31, 2018, you should drop off the ballot in person to make sure it's counted."],
		"En Oregon, su cartón de votación debe ser recibido antes de <strong>8:00 p.m.</strong> el día de las elecciones (Martes, Noviembre 6, 2018). Si no ha enviado su cartón de votación antes de Octubrie 31, 2018, usted tiene que entregar el carton de votación en persona para asegurarse que sea contado."],

	[StringId.WashingtonDeadlineDescription,
		// "In Washington, your ballot must be postmarked on or before Election Day (Tuesday, November 6, 2018). Ballot drop boxes close promptly at <strong>8:00 p.m.</strong> on Election Day."],
		"En Washington, su cartón de votación debe ser recogido en o antes del día de la elección (Martes, Noviembre 6, 2018)."], // TODO: Incomplete translation

	[StringId.WhereAreYouVoting,
		// TODO: Translate
		"<em>Where</em> will you be voting?"],

	[StringId.ZipCode,
		// TODO: Translate
		"ZIP code"],

	[StringId.Submit,
		// TODO: Translate
		"Submit"],

	[StringId.WeUseYourZipCodeToProvideMoreElevantInformation,
		// TODO: Translate
		"(We use your ZIP code to help us give you more relevant questions and actions.)"],

	[StringId.Skip,
		// TODO: Translate
		"Skip"],

	[StringId.PlanYourVoteInviteOthersAndGetReady,
		// "Plan your vote, invite others, and get ready!"],
		"Planee su voto, invitee a otros, y prepárese"],

	[StringId.StartYourPlan,
		// "Start Your Plan"],
		"Inicie Su Plan"],

	[StringId.StartOver,
		// "Start Over"],
		"Inicie De Nuevo"],

	[StringId.Contact,
		// "Contact"],
		// TODO: Confirm my correction of Diego's translation
		"Contactar"],

	[StringId.PlanStepHeader,
		"Paso {NUMBER}: {HEADER}"],

	[StringId.CopyrightPrePrivacyPolicy,
		"\u00a9 Voting Voices. Todos los derechos reservados. Vea nuestra "],

	[StringId.PrivacyPolicy,
		"política de privacidad"],

	[StringId.CopyrightPostPrivacyPolicy,
		"."],

	[StringId.Donate,
		// TODO: Confirm translation
		// "Donate"],
		"Donar"],
]);

export function getEnglishString(id: StringId): string {
	const str = STRINGS_ENGLISH.get(id)
	return str!;
}

export function getSpanishString(id: StringId): string {
	const str = STRINGS_SPANISH.get(id)
	return str!;
}

export function getQuestionFullLabel(id: QuestionId): StringId {
	switch (id) {
		case QuestionId.AreYouRegistered: return StringId.AreYouRegisteredToVote;
		case QuestionId.ZipCode: return StringId.WhereAreYouVoting;
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

		case PlanStepId.CheckBallotReturnDeadline: {
			const header = StringId.WhenIsTheDeadlineExactly;
			const callToAction = StringId.FindOutMore;

			switch (state) {
				case VotingStateId.Colorado: {
					return {
						header,
						text: StringId.ColoradoDeadlineDescription,
						callToAction,
						link: StringId.ColoradoDeadlineLink,
					}
				}
				case VotingStateId.Oregon: {
					return {
						header,
						text: StringId.OregonDeadlineDescription,
						callToAction,
						link: StringId.OregonDeadlineLink,
					}
				}
				case VotingStateId.Washington: {
					return {
						header,
						text: StringId.WashingtonDeadlineDescription,
						callToAction,
						link: StringId.WashingtonDeadlineLink,
					}
				}
				default:
					throw new Error("Unrecognized VotingStateId");
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
				text: StringId.PlanAheadForDropBox,
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
				header: StringId.ResearchYourBallot,
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
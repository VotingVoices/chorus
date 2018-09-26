import { MostRecentTransition } from './store/Types';

const FORWARD_TRANSITION_NAME: string = "carousel-cross-fade";
const BACK_TRANSITION_NAME: string = "reverse-carousel-cross-fade";

export function getTransitionName(t: MostRecentTransition | undefined): string {
	if (t === undefined) {
		return FORWARD_TRANSITION_NAME;
	}

	switch (t!) {
		case MostRecentTransition.Back: {
			return BACK_TRANSITION_NAME;
		}
		case MostRecentTransition.Forward: {
			return FORWARD_TRANSITION_NAME;
		}
		default: {
			throw new Error('Unrecognized MostRecentTransition');
		}
	}
}
// TODO: Rename file

import { MostRecentTransition } from './store/Types';

const FORWARD_TRANSITION_NAME: string = "carousel-cross-fade";
const BACK_TRANSITION_NAME: string = "reverse-carousel-cross-fade";

export interface ITransitionStyleInfo {
	enable: boolean,
	transitionName: string | undefined,
}

export function getTransitionStyleInfo(t: MostRecentTransition | undefined): ITransitionStyleInfo {
	if (t === undefined) {
		return { enable: true, transitionName: FORWARD_TRANSITION_NAME };
	}

	switch (t!) {
		case MostRecentTransition.Back: {
			return { enable: true, transitionName: BACK_TRANSITION_NAME };
		}
		case MostRecentTransition.Forward: {
			return { enable: true, transitionName: FORWARD_TRANSITION_NAME };
		}
		case MostRecentTransition.Immediate: {
			return { enable: false, transitionName: undefined };
		}
		default: {
			throw new Error('Unrecognized MostRecentTransition');
		}
	}
}
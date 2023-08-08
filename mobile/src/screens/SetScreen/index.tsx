import { Set } from 'src/components/Set';

import { SetScreenProps } from './types';

export function SetScreen(props: SetScreenProps) {
    const { params } = props.route;

    const card = params?.card;
    const activeSet = params?.activeSet;

    return <Set card={card} activeSet={activeSet} />;
}

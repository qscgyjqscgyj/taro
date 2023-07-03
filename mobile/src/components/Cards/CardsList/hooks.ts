import { useState } from 'react';
import { LayoutChangeEvent } from 'react-native';

const CARD_WIDTH_OFFSET = 30;

export function useCardsList() {
    const [cardWidth, setCardWidth] = useState<number | undefined>();

    const handleCardWrapperLayout = (event: LayoutChangeEvent) => {
        if (cardWidth) {
            return;
        }

        const { width } = event.nativeEvent.layout;

        setCardWidth(width - CARD_WIDTH_OFFSET);
    };

    return { cardWidth, handleCardWrapperLayout };
}

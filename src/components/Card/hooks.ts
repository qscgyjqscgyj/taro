import { initializeGardsData } from 'src/services/cards/cards';

export function useCard() {
    const cards = initializeGardsData();

    return { cards };
}

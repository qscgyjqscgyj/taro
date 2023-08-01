export type ArcanaType =
    | {
          type: 'major';
          suit: undefined;
      }
    | {
          type: 'minor';
          suit: SuitType;
      };

export type SuitType = 'wands' | 'cups' | 'swords' | 'pentacles';

export interface CardData {
    name: string;
    altNames: string[];
    arcana: ArcanaType;
    subTitle: string;
    image: string;
    description: CardDescription[];
    number?: number;
}

export interface CardDescription {
    category: string;
    direction: 'normal' | 'reversed';
    textData: string[];
}

export interface SetCardData extends CardData {
    direction?: CardDescription['direction'];
}

export interface SetData {
    id: string;
    cards: SetCardData[];
    createdAt: string;
    notes?: string;
    updatedAt?: string;
}

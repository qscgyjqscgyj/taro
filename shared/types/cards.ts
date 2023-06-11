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

export interface SetData {
    id: string;
    cards: CardData[];
    createdAt: string;
    notes?: string;
    updatedAt?: string;
}

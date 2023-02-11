export type ArcanaType =
    | {
          type: 'major';
          suit: undefined;
      }
    | {
          type: 'minor';
          suit: SuitType;
      };

export type SuitType = 'wands' | 'cups' | 'swords' | 'pentacless';

export interface CardData {
    name: string;
    altNames: string[];
    arcana: ArcanaType;
    subTitle: string;
    image: string;
    description: CardDescription[];
    number?: number;
}

interface CardDescription {
    category: string;
    direction: 'normal' | 'reversed';
    textData: string[];
}

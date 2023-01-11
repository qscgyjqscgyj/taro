import { ImageSourcePropType } from 'react-native';

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
    image: ImageSourcePropType;
    description: CardDescription[];
}

interface CardDescription {
    category: string;
    direction: 'normal' | 'reversed';
    textData: string[];
}

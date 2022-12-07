import { ImageSourcePropType } from 'react-native';

export interface CardData {
    name: string;
    subTitle: string;
    image: ImageSourcePropType;
    description: CardDescription[];
}

interface CardDescription {
    category: string;
    direction: 'normal' | 'reversed';
    textData: string[];
}

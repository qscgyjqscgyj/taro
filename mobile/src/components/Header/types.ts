import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import { CardProps } from 'src/components/Cards/Card/types';
import { CardsProps } from 'src/components/Cards/types';
import { AddToSetButtonProps } from 'src/components/Sets/AddToSetButton/types';

interface NavigationHeaderProps extends NativeStackHeaderProps {
    rightBlock?: (props: AddToSetButtonProps) => JSX.Element;
}

export type HeaderProps = (CardProps | CardsProps) & NavigationHeaderProps;

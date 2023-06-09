import { NativeStackHeaderProps } from '@react-navigation/native-stack';

interface NavigationHeaderProps extends NativeStackHeaderProps {
    rightBlock?: (props: HeaderProps) => React.ReactNode;
}

export type HeaderProps = NavigationHeaderProps;

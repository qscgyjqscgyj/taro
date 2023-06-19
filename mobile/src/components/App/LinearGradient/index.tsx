import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';

interface MainLinearGradientProps {
    children: React.ReactNode;
}

export function MainLinearGradient(props: MainLinearGradientProps) {
    const { children } = props;

    return (
        <LinearGradient colors={['#F1D9D9', '#AC67CC', '#5064A9']} style={styles.linearGradient}>
            {children}
        </LinearGradient>
    );
}

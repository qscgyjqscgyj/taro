import { Image, Pressable, View } from 'react-native';

import { MainLinearGradient } from 'src/components/App/LinearGradient';
import { closeIcon } from 'src/components/Modal/images';

import { styles } from './styles';

interface GradientModalProps {
    closeModal: () => void;
    children: JSX.Element;
}

export function GradientModal(props: GradientModalProps) {
    const { closeModal, children } = props;

    return (
        <MainLinearGradient>
            <View style={styles.modalSetContainer}>
                <View style={styles.moadlSetCloseIconWrapper}>
                    <Pressable onPress={closeModal}>
                        <Image source={closeIcon} />
                    </Pressable>
                </View>

                {children}
            </View>
        </MainLinearGradient>
    );
}

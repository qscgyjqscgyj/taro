import { Image, Pressable, View } from 'react-native';

import { closeIcon } from 'src/components/Modal/images';

import { styles } from './styles';

interface DialogProps {
    component: React.FC;
    closeModal: () => void;
}

export function HalfScreenDialog(props: DialogProps) {
    const { component: Component, closeModal } = props;

    return (
        <View style={styles.container}>
            <View style={styles.dialogWrapper}>
                <View style={styles.closeWrapper}>
                    <Pressable onPress={closeModal}>
                        <Image source={closeIcon} />
                    </Pressable>
                </View>
                <Component />
            </View>
        </View>
    );
}

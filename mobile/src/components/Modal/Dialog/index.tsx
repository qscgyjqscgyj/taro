import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';

import { MainLinearGradient } from 'src/components/App/LinearGradient';
import { closeIcon } from 'src/components/Modal/images';

import { styles } from './styles';

interface DialogProps {
    title: string;
    leftButtonTitle: string;
    leftButtonHandler: () => void;
    rightButtonTitle: string;
    rightButtonHandler: () => void;
    closeModal: () => void;
}

export function Dialog(props: DialogProps) {
    const {
        closeModal,
        title,
        leftButtonTitle,
        rightButtonTitle,
        leftButtonHandler,
        rightButtonHandler,
    } = props;

    return (
        <MainLinearGradient>
            <View style={styles.container}>
                <View style={styles.closeWrapper}>
                    <Pressable onPress={closeModal}>
                        <Image source={closeIcon} />
                    </Pressable>
                </View>

                <View style={styles.headerWrapper}>
                    <Text style={styles.headerText}>{title}</Text>
                </View>

                <View style={styles.controlsWrapper}>
                    <View style={styles.controlWrapper}>
                        <TouchableOpacity onPress={leftButtonHandler}>
                            <View style={[styles.button, styles.leftButton]}>
                                <Text style={styles.controlText}>{leftButtonTitle}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.controlWrapper}>
                        <TouchableOpacity onPress={rightButtonHandler}>
                            <View style={[styles.button, styles.rightButton]}>
                                <Text style={styles.controlText}>{rightButtonTitle}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </MainLinearGradient>
    );
}

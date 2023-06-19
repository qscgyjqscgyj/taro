import { Text, TouchableOpacity, View } from 'react-native';

import { ModalComponentProps } from 'src/components/Modal/types';
import { MainLinearGradient } from 'src/components/App/LinearGradient';
import { styles } from './styles';

interface DialogProps extends ModalComponentProps {
    title: string;
    onAccept: () => void;
}

export function Dialog(props: DialogProps) {
    const { closeModal, onAccept, title } = props;

    return (
        <MainLinearGradient>
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <Text style={styles.headerText}>{title}</Text>
                </View>

                <View style={styles.controlsWrapper}>
                    <TouchableOpacity onPress={onAccept}>
                        <View style={styles.controlWrapper}>
                            <Text style={styles.controlText}>Accept</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={closeModal}>
                        <View style={styles.controlWrapper}>
                            <Text style={styles.controlText}>Close</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </MainLinearGradient>
    );
}

import { Image, Text, TouchableOpacity, View } from 'react-native';

import { HeaderProps } from 'src/components/Header/types';
import { ModalComponent } from 'src/components/Modal';
import { Dialog } from 'src/components/Modal/Dialog';

import { useAddToSetButton } from './hooks';
import { plusIcon } from './images';
import { styles } from './styles';

export function AddToSetButton(props: HeaderProps) {
    const {
        activeCard,
        addToSetHandler,
        isModalOpen,
        closeModal,
        createNewSetHandler,
        addActiveCardToActiveSetHandler,
    } = useAddToSetButton(props);

    if (activeCard === undefined) {
        return null;
    }

    return (
        <>
            <TouchableOpacity onPress={addToSetHandler}>
                <View style={styles.button}>
                    <Image style={styles.icon} source={plusIcon} />
                    <Text style={styles.text}>добавить в расклад</Text>
                </View>
            </TouchableOpacity>

            <ModalComponent
                component={() => (
                    <Dialog
                        title="У вас уже есть расклад"
                        leftButtonTitle="создать новый расклад"
                        leftButtonHandler={createNewSetHandler}
                        rightButtonTitle="добавить в текущий"
                        rightButtonHandler={addActiveCardToActiveSetHandler}
                        closeModal={closeModal}
                    />
                )}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
            />
        </>
    );
}

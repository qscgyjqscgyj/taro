import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { CardsList } from 'src/components/Cards/CardsList';
import { ModalComponent } from 'src/components/Modal';
import { Cards } from 'src/components/Cards';
import { Card } from 'src/components/Cards/Card';
import { closeIcon } from 'src/components/Modal/images';

import { useSet } from './hooks';
import { SetProps } from './types';
import { styles } from './styles';

export function Set(props: SetProps) {
    const {
        activeSet,
        activeCard,
        onPressCardHandler,
        addCardPressHandler,
        addToSetHandler,
        clearActiveSet,
        generateRandomSet,
        closeModal,
        isModalOpen,
        modalComponentType,
    } = useSet(props);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity onPress={generateRandomSet}>
                        <View style={styles.purpleButton}>
                            <Text style={styles.buttonText}>Сгенерировать случайный расклад</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <ScrollView style={{ marginBottom: 150 }}>
                    <CardsList
                        cards={activeSet?.cards ?? []}
                        onPressCard={onPressCardHandler}
                        addCard={addCardPressHandler}
                    />

                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity onPress={clearActiveSet}>
                            <View style={styles.purpleButton}>
                                <Text style={styles.buttonText}>Сбросить карты</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

            <ModalComponent
                component={() => (
                    <View style={styles.modalSetContainer}>
                        <View style={styles.moadlSetCloseIconWrapper}>
                            <Pressable onPress={closeModal}>
                                <Image source={closeIcon} />
                            </Pressable>
                        </View>

                        {modalComponentType === 'Card' && activeCard !== undefined ? (
                            <Card card={activeCard} />
                        ) : null}

                        {modalComponentType === 'AddCard' ? (
                            <Cards onCardPress={addToSetHandler} />
                        ) : null}
                    </View>
                )}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
            />
        </>
    );
}

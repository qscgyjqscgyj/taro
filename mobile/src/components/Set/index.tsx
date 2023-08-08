import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { ModalComponent } from 'src/components/Modal';
import { HalfScreenDialog } from 'src/components/Modal/HalfScreenDialog';
import { Cards } from 'src/components/Cards';
import { Card } from 'src/components/Cards/Card';
import { closeIcon } from 'src/components/Modal/images';
import { MainLinearGradient } from 'src/components/App/LinearGradient';
import { CardsCountSelector } from 'src/components/Set/CardsCountSelector';
import { SetCardsList } from 'src/components/Set/SetCardsList';

import { useSet } from './hooks';
import { styles } from './styles';
import { SetProps } from './types';

export function Set(props: SetProps) {
    const {
        activeSet,
        activeCard,
        onPressCardHandler,
        addCardPressHandler,
        addToSetHandler,
        onCardDeletePressHandler,
        clearActiveSet,
        generateRandomSetModalOpen,
        generateRandomSet,
        closeModal,
        isModalOpen,
        modalComponentType,
    } = useSet(props);

    return (
        <>
            <View style={styles.container}>
                <ScrollView style={styles.cardsListScrollWrapper}>
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity onPress={generateRandomSetModalOpen}>
                            <View style={styles.purpleButton}>
                                <Text style={styles.buttonText}>
                                    Сгенерировать случайный расклад
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity onPress={clearActiveSet}>
                            <View style={styles.purpleButton}>
                                <Text style={styles.buttonText}>Сбросить карты</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardsListWrapper}>
                        <SetCardsList
                            cards={activeSet?.cards ?? []}
                            onPressCard={onPressCardHandler}
                            addCard={addCardPressHandler}
                            deleteCard={onCardDeletePressHandler}
                        />
                    </View>
                </ScrollView>
            </View>

            <ModalComponent
                component={() => {
                    if (modalComponentType === 'AddCard' || modalComponentType === 'Card') {
                        return (
                            <MainLinearGradient>
                                <View style={styles.modalSetContainer}>
                                    <View style={styles.moadlSetCloseIconWrapper}>
                                        <Pressable onPress={closeModal}>
                                            <Image source={closeIcon} />
                                        </Pressable>
                                    </View>

                                    {modalComponentType === 'Card' && activeCard !== undefined ? (
                                        <Card card={activeCard} direction={activeCard.direction} />
                                    ) : null}

                                    {modalComponentType === 'AddCard' ? (
                                        <Cards onCardPress={addToSetHandler} />
                                    ) : null}
                                </View>
                            </MainLinearGradient>
                        );
                    }

                    if (modalComponentType === 'GenerateRandomSet') {
                        return (
                            <HalfScreenDialog
                                closeModal={closeModal}
                                component={() => (
                                    <CardsCountSelector selectHandler={generateRandomSet} />
                                )}
                            />
                        );
                    }

                    return null;
                }}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
            />
        </>
    );
}

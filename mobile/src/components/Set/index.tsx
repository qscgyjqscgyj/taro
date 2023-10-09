import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { ModalComponent } from 'src/components/Modal';
import { GradientModal } from 'src/components/Modal/GradientModal';
import { HalfScreenDialog } from 'src/components/Modal/HalfScreenDialog';
import { Cards } from 'src/components/Cards';
import { Card } from 'src/components/Cards/Card';
import { CardsCountSelector } from 'src/components/Set/CardsCountSelector';
import { SetCardsList } from 'src/components/Set/SetCardsList';
import { useTranslation } from 'src/services/localization/hooks';

import { useSet } from './hooks';
import { styles } from './styles';
import { SetProps } from './types';

export function Set(props: SetProps) {
    const { viewMode } = props;

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

    const { t } = useTranslation();

    return (
        <>
            <View style={styles.container}>
                <ScrollView style={styles.cardsListScrollWrapper}>
                    {!viewMode ? (
                        <>
                            <View style={styles.buttonWrapper}>
                                <TouchableOpacity onPress={generateRandomSetModalOpen}>
                                    <View style={styles.purpleButton}>
                                        <Text style={styles.buttonText}>
                                            {t('setsMainGenerateSetButton')}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.buttonWrapper}>
                                <TouchableOpacity onPress={clearActiveSet}>
                                    <View style={styles.purpleButton}>
                                        <Text style={styles.buttonText}>
                                            {t('setsMainClearCurrentSetButton')}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </>
                    ) : null}
                    <View style={styles.cardsListWrapper}>
                        <SetCardsList
                            cards={activeSet?.cards ?? []}
                            onPressCard={onPressCardHandler}
                            addCard={viewMode ? undefined : addCardPressHandler}
                            deleteCard={viewMode ? undefined : onCardDeletePressHandler}
                        />
                    </View>
                </ScrollView>
            </View>

            <ModalComponent
                component={() => {
                    if (modalComponentType === 'AddCard' || modalComponentType === 'Card') {
                        return (
                            <GradientModal closeModal={closeModal}>
                                <>
                                    {modalComponentType === 'Card' && activeCard !== undefined ? (
                                        <Card card={activeCard} direction={activeCard.direction} />
                                    ) : null}

                                    {modalComponentType === 'AddCard' ? (
                                        <Cards onCardPress={addToSetHandler} />
                                    ) : null}
                                </>
                            </GradientModal>
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

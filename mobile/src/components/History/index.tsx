import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';

import { Switcher } from 'src/components/UI/Switcher';
import { startTitleCase } from 'src/utils/strings';
import { ModalComponent } from 'src/components/Modal';
import { Card } from 'src/components/Cards/Card';
import { GradientModal } from 'src/components/Modal/GradientModal';

import { useHistory } from './hooks';
import { styles } from './styles';

export function History() {
    const {
        activeHistory,
        switchTab,
        activeTab,
        tabsValues,
        onHistoryItemClickHandler,
        closeModal,
        isModalOpen,
        activeCard,
    } = useHistory();

    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.switcherWrapper}>
                        <Switcher
                            onPress={switchTab}
                            values={[tabsValues[0], tabsValues[1]]}
                            value={activeTab.tabIndex}
                        />
                    </View>

                    <View style={styles.tabWrapper}>
                        {activeHistory.map((historyRecord) => (
                            <TouchableOpacity
                                key={historyRecord.id}
                                onPress={() => onHistoryItemClickHandler(historyRecord)}
                            >
                                <View style={styles.historyItem}>
                                    <View style={styles.historyItemCards}>
                                        {'cards' in historyRecord ? (
                                            historyRecord.cards.map((card) => (
                                                <Text style={styles.cardNameText} key={card.name}>
                                                    {startTitleCase(card.name)}
                                                </Text>
                                            ))
                                        ) : (
                                            <Text style={styles.cardNameText}>
                                                {startTitleCase(historyRecord.card.name)}
                                            </Text>
                                        )}
                                    </View>

                                    <View style={styles.historyItemDate}>
                                        <Text style={styles.dateText}>
                                            {moment(historyRecord.createdAt).format('DD.MM.YYYY')}
                                        </Text>
                                        <Text style={styles.dateText}>
                                            {moment(historyRecord.createdAt).format('HH:mm')}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>

            <ModalComponent
                component={() => {
                    return activeCard !== null ? (
                        <GradientModal closeModal={closeModal}>
                            <Card card={activeCard} />
                        </GradientModal>
                    ) : null;
                }}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
            />
        </>
    );
}

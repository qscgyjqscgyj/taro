import { ScrollView, Text, View } from 'react-native';
import moment from 'moment';

import { Switcher } from 'src/components/UI/Switcher';

import { useHistory } from './hooks';
import { styles } from './styles';

export function History() {
    const { activeHistory, switchTab, activeTab, tabsValues } = useHistory();

    return (
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
                        <View key={historyRecord.id} style={styles.historyItem}>
                            <View style={styles.historyItemCards}>
                                {'cards' in historyRecord ? (
                                    historyRecord.cards.map((card) => <Text>{card.name}</Text>)
                                ) : (
                                    <Text>{historyRecord.card.name}</Text>
                                )}
                            </View>

                            <View style={styles.historyItemDate}>
                                <Text>{moment(historyRecord.createdAt).format('DD.MM.YYYY')}</Text>
                                <Text>{moment(historyRecord.createdAt).format('HH:mm')}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

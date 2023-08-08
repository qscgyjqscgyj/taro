import { Text, View } from 'react-native';

import { useHistory } from './hooks';

export function History() {
    const { history } = useHistory();

    return (
        <View>
            {history.map((historyRecord) => {
                const isSet = 'cards' in historyRecord;
                if (isSet) {
                    return (
                        <Text key={historyRecord.id}>
                            It's set with {historyRecord.cards.length} cards
                        </Text>
                    );
                }

                return (
                    <Text key={historyRecord.id}>
                        It's card with name {historyRecord.card.name}
                    </Text>
                );
            })}
        </View>
    );
}

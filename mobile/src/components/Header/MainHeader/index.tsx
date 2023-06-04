import { Image, Text, View } from 'react-native';

import { useTranslation } from 'src/services/localization/hooks';
import { HeaderProps } from 'src/components/Header/types';

import { aboutMenuIcon, historyMenuIcon, setMenuIcon } from './images';
import { styles } from './styles';

export function MainHeader(_props: HeaderProps) {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <View style={styles.menuItem}>
                <Image style={styles.menuIcon} source={setMenuIcon} />
                <Text style={styles.menuText}>{t('headerSetLink')}</Text>
            </View>
            <View style={styles.menuItem}>
                <Image style={styles.menuIcon} source={historyMenuIcon} />
                <Text style={styles.menuText}>{t('headerHistoryLink')}</Text>
            </View>
            <View style={styles.menuItem}>
                <Image style={styles.menuIcon} source={aboutMenuIcon} />
                <Text style={styles.menuText}>{t('headerAboutLink')}</Text>
            </View>
        </View>
    );
}

import { useCallback, useMemo } from 'react';
import { useTranslation as useI18T } from 'react-i18next';
import { getLocales } from 'expo-localization';

import { AVAILABLE_LOCALES } from 'shared/constants/localization';

import { TranslationObject } from './types';

export function useTranslation() {
    const { t: i18T } = useI18T();

    const t = useCallback(
        (key: keyof TranslationObject) => {
            return i18T(key);
        },
        [i18T],
    );

    return { t };
}

// TODO: write tests on this hook
export function useLocale() {
    const currentLocale = useMemo(() => {
        const locales = getLocales();

        const englishLanguageIndex = locales.findIndex((locale) => locale.languageCode === 'en');
        const originLanguage = locales.findIndex(
            (locale) =>
                AVAILABLE_LOCALES.includes(locale.languageCode) && locale.languageCode !== 'en',
        );

        return originLanguage >= 0 ? locales[originLanguage] : locales[englishLanguageIndex];
    }, []);

    return { currentLocale };
}

import { useCallback } from 'react';
import { useTranslation as useI18T } from 'react-i18next';

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

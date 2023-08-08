export function normaliseFilterValue(value: string) {
    const REPLACE_PAIRS = [
        ['á', 'a'],
        ['é', 'e'],
        ['í', 'i'],
        ['ó', 'o'],
        ['ú', 'u'],
        ['ñ', 'n'],
        ['ё', 'е'],
    ];

    return REPLACE_PAIRS.reduce((acc, [char, replaceChar]) => {
        return acc.replace(new RegExp(char, 'g'), replaceChar);
    }, value.toLowerCase());
}

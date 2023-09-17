import { CardData } from 'shared/types/cards';

export const wandsSix: CardData = {
    name: 'ШЕСТЁРКА ЖЕЗЛОВ',
    altNames: [
        'шестерка жезлов',
        'шестерка палок',
        'шестерка посохов',
        'шестерка скипетров',
        'шестёрка жезлов',
        'шестёрка палок',
        'шестёрка посохов',
        'шестёрка скипетров',
    ],
    arcana: { type: 'minor', suit: 'wands' },
    subTitle: 'Победа',
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Успех, победа, триумф, завершение',
                'Вознаграждение, признание, похвала, одобрение, гордость',
                'Лидерские качества, мудрые решения',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Неудача, отсутствие признания, отсутствие вознаграждения, отсутствие достижений',
                'Неприятности, предательство, провал, поражение',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: ['Успех в романтическом плане', 'Достижение целей в отношениях'],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Чувство несоответствия желаемого с действительным',
                'Чувствовать себя нелюбимым, что им пренебрегают, что его не замечают',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: ['Карьерные достижения, вознаграждение', 'Удачное завершение проекта'],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: [
                'Неудачный рабочий проект',
                'Работа без вознаграждения',
                'Неудовлетворение работой и достижениями',
            ],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: ['Финансовая стабильность', 'Материальное вознаграждение'],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: [
                'Следует произвести анализ финансового состояния',
                'Потери, неудачные инвестиции, неудовлетворение покупкой',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Успешное разрешение долгосрочного проекта',
                'Необходимость принять серьезное и неотложное решение для благоприятного исхода',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Сомнения в себе, недостаток материальных средств, череда неприятных мелочей',
            ],
        },
    ],
};

import { CardData } from 'shared/types/cards';

import { getFullHost } from 'src/services';

export const pentaclesKing: CardData = {
    name: 'КОРОЛЬ ПЕНТАКЛЕЙ',
    altNames: ['король пентаклей', 'король монет', 'король денариев'],
    arcana: { type: 'minor', suit: 'pentacles' },
    subTitle: 'Светский успех',
    image: `${getFullHost()}/images/pentaclesKing/images/pentaclesKing.png`,
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Изобилие, процветание',
                'Безопасность, амбициозный, чувственный, надежный',
                'Бизнесмен, кормилец',
                'Инстинкт, ум, хорошее чутьё',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Жадность, материалистичность, расточительность, фанатизм',
                'Плохие финансовые решения, азартный игрок',
                'Эксплуататор, собственник, гнев',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Серьёзное отношение',
                'Щедрый кормилец',
                'Эмоциональный комфорт и достаток',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Материалистичный, жадный любовник, который может вас использовать',
                'Контроль, манипуляции',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Успех и амбициозность',
                'Ободряющий наставник, партнёр',
                'Хорошая репутация',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: ['Неудачи на работе, плохая репутация', 'Уныние, тирания'],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: [
                'Достижение некого финансового рубежа',
                'Инвестирование, сбережения',
                'Поддержка близких, щедрость',
            ],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: ['Финансовые потери, плохие финансовые решения, долги', 'Скупость'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Cпocoбнocть пpeoбpaзoвывaть внутpeнний pecуpc вo внeшний',
                'Paвнoцeнный oбмeн энepгиями, ведущий k пpopыву или pocту',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Cepьёзныe oшибки, нeпpaвильнo пepeдaнныe мыcли',
                'Концентрация на материальном в ущерб морали и других сфер жизни',
            ],
        },
    ],
};

import { CardData } from 'shared/types/cards';

export const hermit: CardData = {
    name: 'ОТШЕЛЬНИК',
    altNames: ['отшельник', 'старец', 'искатель', 'пилигрим'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Путеводитель',
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Самоанализ, созерцание',
                'Осознание приоритетов',
                'Зрелость, мудрость, рассудительность',
                'Благоразумие, осторожность',
                'Одиночество',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Неосторожность, незрелость',
                'Опрометчивость, растерянность',
                'Отвержение',
                'Одиночество, изоляция',
                'Возвращение в общество',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Отстранение от отношений для самопознания',
                'Разговор с партнёром об общих целях и планах',
                'Крепкие отношения, наполненные взаимопониманием',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Чувство отдаления одного из партнёров в отношениях',
                'Романтическое отвержение, благодаря которому можно будет сосредоточиться на себе и своих желаниях',
                'Эгоизм одного из партнёров',
                'Проверка отношений на прочность и возможное расставание',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Стабильность, обдумывание следующих шагов в своём карьерном пути',
                'Обучение, наставничество',
                'Достижение целей при минимальном контакте с людьми',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: [
                'Переосмысление карьеры в соответствии с внутренними целями',
                'Неумение работать в команде, чувство отстранения от коллектива',
            ],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: [
                'Переосмысление приоритета финансов в жизни',
                'Низкий доход, нарушение договоренностей',
            ],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: [
                'Нужда и бедность из-за отсутствия работы',
                'Материальная ответственность за кого-то',
                'Лучшее понимание своего материального положения',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Самостоятельное погружение в ситуацию, длительный анализ ошибок и поиск решение без помощи других',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Завершение этапа одиночества',
                'Возможность того, что ситуация решится сама собой',
            ],
        },
    ],
};

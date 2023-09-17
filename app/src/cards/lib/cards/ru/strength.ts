import { CardData } from 'shared/types/cards';

export const strength: CardData = {
    name: 'СИЛА',
    altNames: ['сила'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Сила духа',
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Мужество, спокойствие',
                'Уверенность в себе, внутренняя сила',
                'Сострадание, доверие',
                'Оптимизм, движущая сила',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Страх, слабость, отсутствие уверенности в себе',
                'Напористость, запугивание',
                'Тщеславие',
                'Болезнь',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Чувственные отношения (может быть как любовь и страсть, так и гнев и ревность)',
                'Сострадание и сочувствие станут ключом к большему пониманию друг друга',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Созависимые отношения, связанные с низкой самооценкой одного из партнеров или проявлением власти)',
                'Чрезмерная эмоциональность в отношениях, отсутствие искренности',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Внутренняя уверенность и смелость помогут направить собственные эмоции в продуктивность',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: ['Неуверенность в себе мешает проявить себя', 'Синдром самозванца'],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: [
                'При контроле за импульсивными тратами сулит спокойствие в финансовом плане',
                'Можно присмотреться к крупным обдуманным покупкам',
            ],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: [
                'Импульсивные и навязанные траты сейчас могут принести ощутимый вред',
                'Нерешительность в вопросах финансов',
                'Неуверенность в своих финансовых силах',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Способность управлять другими мягко, без применения давления',
                'Необходимость действовать, проявляя чуткость и внимательность',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Отсутствие собственного мнения, жёсткий контроль над действиями гадающего',
                'Решить проблему получится, если основательно взяться за неё и перестать пускать дело на самотек',
            ],
        },
    ],
};

import { CardData } from 'shared/types/cards';

export const swordsSeven: CardData = {
    name: 'СЕМЁРКА МЕЧЕЙ',
    altNames: ['семёрка мечей', 'семёрка шпаг', 'семерка мечей', 'семерка шпаг'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Кража',
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Ложь, хитрость, интрига',
                'Стратегия, изворотливость',
                'Коварство, хитрость',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: ['Признание, совесть, сожаление', 'Злонамеренность, обман, сокрытие истины'],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Ложь, подозрительность, измена',
                'Стоит быть осторожным в отношениях и честно оценивать свои действия, если обман исходит от вас',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: ['Ложь раскрыта, признание', 'Отказ от притворства, честность'],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Сплетни, саботаж',
                'Стоит быть осторожным в доверии, предательство может произойти от того, от кого не ждёшь',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: [
                'Разоблачение лжецов',
                'Принятие последствий',
                'Изменение подхода, старые методы больше не работают',
            ],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: ['Сомнительные деловые сделки', 'Мошенничество, воровство, аферы'],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: [
                'Последствия нечестности в финансовой сфере',
                'Стоит погасить долги, заплатить налоги, проверить не обманываете ли вы кого-то',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Heтpивиaльнocть, нecтaндapтный пoдxoд, умeниe извopaчивaтьcя',
                'Oбxoд пpaвил, нeoбычный плaн, снижение накала aгpeccии, злобы',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Oбмaн, пpeдaтeльcтвo близкиx людeй, зaвиcтливocть и мecть',
                'Oтcутcтвиe этики, чecти',
            ],
        },
    ],
};

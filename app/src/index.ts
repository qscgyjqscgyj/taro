import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';

import { success } from 'shared/types/remoteData';
import { Locale } from 'shared/types/localization';

import { initializeCardsData } from 'src/cards/services';

dotenv.config();
const app: Express = express();
app.use(express.json());
app.use(cors());

app.use('/images', express.static(`${__dirname}/cards/lib`));

app.get('/cards', (req: Request, res: Response) => {
    const { name, locale } = req.query;
    const cards = initializeCardsData(locale as Locale);

    let filteredCards = cards;

    if (typeof name === 'string' && name !== '') {
        filteredCards = cards.filter((card) => {
            const includesInName = card.name.toLowerCase().includes(name.toLowerCase());

            if (includesInName) {
                return true;
            }

            const includesInAltNames = card.altNames.some((altName) =>
                altName.toLowerCase().includes(name.toLowerCase()),
            );

            return includesInAltNames;
        });
    }

    return res.status(200).json(success(filteredCards));
});

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

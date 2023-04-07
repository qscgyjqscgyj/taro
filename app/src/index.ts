import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';

import { success } from 'shared/types/remoteData';

import { initializeCardsData } from 'src/cards/services';

dotenv.config();

const app: Express = express();

app.use(express.json());

app.use(cors());

app.use('/images', express.static(`${__dirname}/cards/lib`));

app.get('/cards', (_req: Request, res: Response) => {
    const cards = initializeCardsData();

    return res.status(200).json(success(cards));
});

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

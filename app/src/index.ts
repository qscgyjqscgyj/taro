import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';

import { CardData } from 'shared/types/cards';

import { initializeGardsData } from 'src/cards/services';

import { createResponseData } from './services';

dotenv.config();

const app: Express = express();

app.use(express.json());

app.use(cors());

app.use('/images', express.static(`${__dirname}/cards/lib`));

app.get('/cards', (_req: Request, res: Response) => {
    const cards = initializeGardsData();

    return res.status(200).json(createResponseData<CardData[]>(cards));
});

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

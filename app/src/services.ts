import { RemoteData, success } from 'aidbox-react';

const PORT = process.env.PORT ?? 4000;

export function getFullHost() {
    return `http://localhost:${PORT}`;
}

export function createResponseData<T>(data: T): RemoteData<T> {
    return success(data);
}

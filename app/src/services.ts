const PORT = process.env.PORT ?? 4000;

export function getFullHost() {
    return `http://localhost:${PORT}`;
}

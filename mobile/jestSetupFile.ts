export {};

jest.mock('@react-native-async-storage/async-storage', () =>
    require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

afterEach(() => {
    jest.clearAllMocks();
});

afterAll(() => {
    jest.clearAllTimers();
});

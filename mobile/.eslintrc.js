module.exports = {
    plugins: ['react-hooks', 'import'],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/no-unresolved': 'error',
    },
    ignorePatterns: ['.expo/', 'node_modules/', '*.config.js'],
};

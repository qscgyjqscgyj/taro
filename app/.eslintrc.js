module.exports = {
    plugins: ['import'],
    rules: {
        'import/no-unresolved': 'error',
    },
    ignorePatterns: ['dist/', 'node_modules/'],
};

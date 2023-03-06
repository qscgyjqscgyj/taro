const path = require('path');

const sharedPath = path.join(__dirname, '..', 'shared');

const extraNodeModules = {
    shared: sharedPath,
};

const watchFolders = [sharedPath];

module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
    resolver: {
        extraNodeModules: new Proxy(extraNodeModules, {
            get: (target, name) => {
                return name in target
                    ? target[name]
                    : path.join(process.cwd(), `node_modules/${name}`);
            },
        }),
    },
    watchFolders,
};

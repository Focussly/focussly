const fs = require('fs');
const path = require('path');
const packageParent = require('../../package.json');

const root = path.resolve(__dirname, '../../');

const package = {
    name: packageParent.name,
    version: packageParent.version,
    description: packageParent.description,
    author: packageParent.author,
    license: packageParent.license,
    main: 'process.js',
    keywords: packageParent.keywords,
    dependencies: packageParent.dependencies,
};

fs.writeFileSync(path.resolve(root, 'dist/package.json'), JSON.stringify(package, null, 2));

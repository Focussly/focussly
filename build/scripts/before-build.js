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

fs.mkdirSync(path.resolve(root, 'dist/views/'));
fs.mkdirSync(path.resolve(root, 'dist/views/main/'));
fs.mkdirSync(path.resolve(root, 'dist/views/main/css'));
fs.mkdirSync(path.resolve(root, 'dist/views/main/js'));

fs.createReadStream(path.resolve(root, 'src/views/main/index.html')).pipe(fs.createWriteStream(path.resolve(root, 'dist/views/main/index.html')));
fs.createReadStream(path.resolve(root, 'src/views/main/css/styles.css')).pipe(fs.createWriteStream(path.resolve(root, 'dist/views/main/css/styles.css')));
fs.createReadStream(path.resolve(root, 'src/views/main/js/app.js')).pipe(fs.createWriteStream(path.resolve(root, 'dist/views/main/js/app.js')));

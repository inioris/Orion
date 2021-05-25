const path = require('path');
const glob = require('glob');

/* masiveImportUtils, import multiple file sent by the string format assigned for searching file
* from: string formatted for searching multiple files Ex: 'src\**\*.module.js'
* return: file imported array
*/
const masiveImport = (from) => {
    // array for adding files
    const importedFiles = [];
    // do an array of directories an run it
    glob.sync(from).forEach((fileName) => {
        // import the file
        const file = require(path.resolve(fileName));

        if (file['default']) {
            const instance = file['default'];
            importedFiles.push(instance);
        }
    });
    return importedFiles;
}

module.exports = masiveImport;

/**
    * Get data from temtem api : https://github.com/maael/temtem-api
**/

const request = require('request');
const fs = require('fs');

// Generic http request function
function getRequest(url, filename, callback) {
    request(url, { json: true }, (err, _, body) => {
        if (err) { return console.log(err); }

        const response = callback(body);
        fs.writeFile(filename, response, function (err) { console.log(err) });
    });
}

// Create the types.ts file
function getTypes() {
    getRequest('https://temtem-api.mael.tech/api/types', 'src/app/models/types.ts', function (body) {
        const types = [];
        for (const type of body) {
            types.push(type.name);
        }

        return 'export const TYPES = ' + JSON.stringify(types) + ';\n';
    });
}

// Create the temtem.ts file
function getTemtem() {
    getRequest('https://temtem-api.mael.tech/api/temtems', 'src/app/models/temtem.ts', function (body) {
        const temtems = {};
        for (const temtem of body) {
            temtems[temtem.name] = temtem.types;
        }

        return 'export const TEMTEMS = ' + JSON.stringify(temtems) + ';\n';
    });
}

function getAllTypesImages() {
    const url = 'https://temtem-api.mael.tech/images/icons/types/';
    const types = ["Neutral", "Fire", "Water", "Nature", "Electric", "Earth", "Mental", "Wind", "Digital", "Melee", "Crystal", "Toxic"];

    for (const type of types) {
        const filename = type + '.png';
        download(url + filename, 'src/assets/types/' + filename, () => {
            console.log('✅ Done!')
        })
    }
}

function getAllTemtemImages() {
    request('https://temtem-api.mael.tech/api/temtems', { json: true }, (err, _, body) => {
        if (err) { return console.log(err); }

        const temtems =  {};
        for (const temtem of body) {
            temtems[temtem.name] = temtem.portraitWikiUrl;
        }

        for (const [name, url] of Object.entries(temtems)) {
            download(url, 'src/assets/temtem/' + name + '.png', () => {
                console.log('✅ Done!')
            })
        }
    });
}

const download = (url, path, callback) => {
    request.head(url, (err, res, body) => {
        request(url)
            .pipe(fs.createWriteStream(path))
            .on('close', callback)
    })
}


if (require.main === module) {
    // getTypes();
    // getTemtem();
    // getAllTypesImages();
    // getAllTemtemImages();
}

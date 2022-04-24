/**
    * Get data from temtem api : https://github.com/maael/temtem-api
**/

const request = require('request');
const fs = require('fs');
const API_PATH = 'https://temtem-api.mael.tech/api/';
const TYPES_IMAGE_PATH = 'src/assets/types/';
const TEMTEMS_IMAGE_PATH = 'src/assets/temtem/';

// Generic http request function
function getRequest(url, filename, callback) {
    request(url, { json: true }, (err, _, body) => {
        if (err) return console.log(err)

        const response = callback(body);
        fs.writeFile(filename, response, function (err) { console.log(err) });
    });
}

// Create the types.ts file
function getTypes() {
    getRequest(`${API_PATH}types`, 'src/app/models/types.ts', function (body) {
        const types = [];
        for (const type of body) {
            types.push(type.name);
        }

        return 'export const TYPES = ' + JSON.stringify(types) + ';\n';
    });
}

// Create the temtem.ts file
function getTemtem() {
    getRequest(`${API_PATH}temtems`, 'src/app/models/temtem.ts', function (body) {
        const temtems = {};
        for (const temtem of body) {
            temtems[temtem.name] = {
                types: temtem.types,
                tv: temtem.tvYields
            };
        }

        return 'export const TEMTEMS = ' + JSON.stringify(temtems) + ';\n';
    });
}

function getAllTypesImages() {
    const url = 'https://temtem-api.mael.tech/images/icons/types/';
    const types = ["Neutral", "Fire", "Water", "Nature", "Electric", "Earth", "Mental", "Wind", "Digital", "Melee", "Crystal", "Toxic"];

    for (const type of types) {
        const filename = type + '.png';
        download(`${url}${filename}`, `${TYPES_IMAGE_PATH}${filename}`, () => {
            console.log(`✅ ${filename} Done!`)
        })
    }
}

function getAllTemtemImages() {
    request(`${API_PATH}temtems`, { json: true }, (err, _, body) => {
        if (err) return console.log(err)

        const temtems = {};
        for (const temtem of body) {
            temtems[temtem.name] = temtem.portraitWikiUrl;
        }

        for (const [name, url] of Object.entries(temtems)) {
            download(url, `${TEMTEMS_IMAGE_PATH}${name}.png`, () => {
                console.log(`✅ ${name} Done!`)
            })
        }
    });
}

function getAllNewTemtemImages() {
    request(`${API_PATH}temtems`, { json: true }, (err, _, body) => {
        if (err) return console.log(err)

        const currentTemtems = getNewTemtems();
        const temtems = {};
        for (const temtem of body) {
            temtems[temtem.name] = temtem.portraitWikiUrl;
        }

        for (const [name, url] of Object.entries(temtems)) {
            if (!currentTemtems.includes(name)) {
                download(url, `${TEMTEMS_IMAGE_PATH}${name}.png`, () => {
                    console.log(`✅ ${name} Done!`)
                })
            }
        }
    });
}

function getNewTemtems() {
    const temtems = [];
    fs.readdirSync(TEMTEMS_IMAGE_PATH).forEach(file => {
        const temtem = file.split('.')[0];
        temtems.push(temtem);
    });
    return temtems;
}

function download(url, path, callback) {
    request.head(url, (err, res, body) => {
        if (err) return console.log(err)
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
    getAllNewTemtemImages();
}

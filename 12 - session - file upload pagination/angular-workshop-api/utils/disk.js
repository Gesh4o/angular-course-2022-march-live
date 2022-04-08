const { google } = require('googleapis');
const crypto = require("crypto");
const fs = require('fs');

const auth = new google.auth.GoogleAuth({
    keyFile: './config/disk-su-demo-d390ef6b6111.json',
    scopes: ['https://www.googleapis.com/auth/drive'],
});

const drive = google.drive({
    version: 'v3',
    auth: auth
});

/**
 * 
 * @param {File} file 
 * @returns {Promise<string>}
 */
function uploadFile(file) {
    var fileMetadata = {
        name: `${crypto.randomBytes(20).toString('hex')}.png`,
        parents: ['1UBNlhRw6bnJsEGwLkNf3HFEjhT5y7Neg'],

    };
    var media = {
        mimeType: 'image/png',
        body: fs.createReadStream(file.path)
    };

    return drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: 'id'
    }).then(file => {
        console.log('File Id: ', file.data.id);
        return file.data.id;
    }).catch((err) => console.error(err));
}


module.exports = {
    uploadFile
}
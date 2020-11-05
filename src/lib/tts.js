const stream = require('stream');
const {
    promisify
} = require('util');
const fs = require('fs');
const got = require('got');

const pipeline = promisify(stream.pipeline);
const FormData = require('form-data');

module.exports = {
    async getTTS(text) {
        const form = new FormData();
        form.append('fileType', 'mp3')
        form.append('text', text);

        await pipeline(
            got.stream.post('http://192.168.12.205:8003/ginapi/xf/createTTS', {
                body: form,
            }),
            fs.createWriteStream('/Users/tqcenglish/SrcCode/Demo/wfd-vue-asterisk-ivr/test/tts.mp3'),
        );
    }
}
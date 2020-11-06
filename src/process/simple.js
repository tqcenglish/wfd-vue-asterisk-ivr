const utils = require('../lib/utils');

const handler = (context) => {
    let{idExten, presValuesId} = utils.parseWfd();
    // 生成 ivr tts
    
    return context.streamFile('/music/ivr/ivr')
        .then(() => {
            return context.waitForDigit(5000);
        }).then((data) => {
            if (parseInt(data.result) > 48) {
                let number = parseInt(data.result) - 48;
                let id = presValuesId[number];
                if(idExten[id]){
                    return context.exec('dial', `sip/${idExten[id]}`)
                }
            }
        });
};

module.exports = {
    handler,
}
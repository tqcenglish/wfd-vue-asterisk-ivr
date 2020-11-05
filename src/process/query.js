const AGIServer = require('ding-dong');

const handler = (context) => {
    return context.streamFile('/music/ivr/ivr')
        .then(() => {
            return context.waitForDigit(8000);
        }).then((data) => {
            if (parseInt(data.result) > 48) {
                let number = parseInt(data.result) - 48;
                if(number == 8){
                    return context.sayDigits(number).then(() => {
                        return module.exports.handlerInputText(context);
                    });
                }
                return module.exports.handler(context);
            }
        });
};

const handlerInputText = (context) => {
    return context.getData('/music/ivr/input_phone', 10000).then((data) => {
        console.log('handlerInputText', data);
        if(data.result == '-1'){
            console.log('你没有输入');
            return module.handler(context);
        }else{
            console.log('你输入是', data.result);
            // 转到分机
            return context.exec('dial', 'sip/5004')
        }
    })
}

module.exports = {
    handler,
    handlerInputText
}
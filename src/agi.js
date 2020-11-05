const AGIServer = require('ding-dong');
const query = require('./process/query');
const common = require('./process/common');

const handler = (context) => {
    context.onEvent('variables', (vars) => {
        console.log('variables', vars);
    });
    common.answer(context).then(() => {
        switch (context.variables['agi_arg_1']) {
            case "ivr":
                return query.handler(context)
                    .then(() => {
                        return common.hangup(context);
                    })
                    .catch((err) => {
                        console.error(err);
                    });;
            default:
                return common.hangup(context);
        }
    })
};

module.exports = {
    startAGIServer: () => {
        let agi = new AGIServer(handler, {
            port: 8004,
            debug: true
        });
        agi.init();
    }
}


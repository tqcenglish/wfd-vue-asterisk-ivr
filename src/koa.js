const Koa = require('koa');
const serve = require('koa-static');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const utils = require('./lib/utils')

const app = new Koa();
const router = new Router();

router.post('/ivr', (ctx, next) => {
    console.log(ctx.request.body.jsonData);
    utils.saveWfd(ctx.request.body.jsonData);
    ctx.status = 200;
    ctx.body = {
        message: 'success',
    }

});
router.get('/ivr', (ctx, next) => {
    ctx.status = 200;
    ctx.body = {
        message: 'success',
        wfd: utils.readWfd()
    }
});

let staticPath = __dirname + '/../web/ivr';
console.info(`staticPath ${staticPath}`);
app
    .use(cors())
    .use(serve(staticPath))
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

    
module.exports = {
    startKoaServer: () => {
        app.listen(3300);
        console.log('koa server on 3300 listen');
    }
}
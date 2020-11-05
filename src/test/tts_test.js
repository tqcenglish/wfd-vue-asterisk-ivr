const tts = require('../../tts')

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
tts.getTTS('你好这是测试')
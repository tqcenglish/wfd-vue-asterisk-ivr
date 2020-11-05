const fs = require("fs");
module.exports = {
    async delay(time){
        await new Promise(resolve => {
          setTimeout(() => {
            resolve(true);
          }, time);
        })
      },
    readWfd(){
      return fs.readFileSync(__dirname + '/../../wfd.json', "utf-8")
    },
    saveWfd(data){
      fs.writeFileSync(__dirname + '/../../wfd.json', JSON.stringify(data))
    }
}

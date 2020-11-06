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
    },
    parseWfd(){
      let data = JSON.parse(fs.readFileSync(__dirname + '/../../wfd.json', "utf-8"));
      let idExten = {};
      data.nodes.forEach(item => {
        if(item.exten){
          idExten[item.id] = item.exten;
        }
      });
      let presValuesId = {};
      data.edges.forEach((item) => {
        if(item.pressValue){
          presValuesId[item.pressValue] = item.target;
        }
      })

      let presLabelExten = {};
      data.edges.forEach((item) => {
        if(item.label && idExten[item.target]){
          presLabelExten[item.label] = idExten[item.target]['exten']
        }
      })
      let ivrStr;
      for (const key in presLabelExten) {
        ivrStr += `${key} 到 ${presLabelExten[key]}`;
      }


      return {idExten, presValuesId, ivrStr}
    }
}

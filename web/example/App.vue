<template>
  <div id="app">
    <el-button size="small" style="float:right;margin-top:6px;margin-right:6px;"
      @click="()=>{this.$refs['wfd'].graph.saveXML()}">导出XML</el-button>
    <el-button size="small" style="float:right;margin-top:6px;margin-right:6px;" @click="saveJson">保存</el-button>
    <el-button size="small" style="float:right;margin-top:6px;margin-right:6px;"
      @click="()=>{this.$refs['wfd'].graph.saveImg()}">导出图片</el-button>
    <wfd-vue ref="wfd" :data="wfdData" v-if="wfdData.nodes" :height="600" :lang="lang" />
  </div>
</template>

<script>
import WfdVue from "../src/components/Wfd";
export default {
  name: "app",
  components: {
    WfdVue,
  },
  data() {
    return {
      lang: "zh",
      wfdData: {},
    };
  },
  beforeMount(){
    this.loadJson();
  },
  mounted() {
  },
  methods: {
    saveJson() {
      let jsonData = this.$refs["wfd"].graph.save();
      fetch("http://127.0.0.1:3300/ivr", {
        body: JSON.stringify({ jsonData }),
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        method: "POST", // *GET, POST, PUT, DELETE, etc.
      }).then((response) => console.log(response));
    },

    loadJson() {
      fetch("http://127.0.0.1:3300/ivr", {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let wfd = JSON.parse(data.wfd);
          this.wfdData = wfd;
        });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

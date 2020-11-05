<template>
    <div :data-clazz="model.clazz">
        <div class="panelTitle">{{i18n['startEvent']}}</div>
        <div class="panelBody">
          <DefaultDetail :model="model" :onChange="onChange" :readOnly="readOnly" />
          <div class="panelRow">
            <div>名称：</div>
            <el-input style="width:90%; font-size:12px"
              :value="model.name"
              @input="change"
            />
          </div>
          <div class="panelRow">
            <div>号码：</div>
            <el-input style="width:90%; font-size:12px"
              :value="model.number"
              @input="(value) => {onChange('number', value)}"
            />
          </div>
          <div class="panelRow">
            <div>语音：</div>
            <el-input style="width:90%; font-size:12px"
              :value="model.music"
              @input="(value) => {onChange('music', value)}"
            />
          </div>
          <div class="panelRow">
            <div>播放次数：</div>
            <el-input-number style="width:90%; font-size:12px"
              :value="model.count"
              @input="(value) => {onChange('count', value)}"
            />
          </div>
        </div>
    </div>
</template>
<script>
  import DefaultDetail from "./DefaultDetail";
  export default {
    inject: ['i18n'],
    components: {
      DefaultDetail
    },
    props: {
      model: {
        type:Object,
        default: ()=>({}),
      },
      onChange: {
        type: Function,
        default: ()=>{}
      },
      readOnly:{
        type: Boolean,
        default: false,
      }
    },
    methods: {
      change(value){
        this.onChange('name', value)
        this.onChange('label', value)
      }
    }
  }
</script>

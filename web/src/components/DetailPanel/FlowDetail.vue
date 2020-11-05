<template>
  <div :data-clazz="model.clazz">
    <div class="panelTitle">{{i18n['sequenceFlow']}}</div>
    <div class="panelBody">
      <DefaultDetail :model="model" :onChange="onChange" :readOnly="readOnly" />
      <div class="panelRow">
        <div>按钮：</div>
        <el-select :value="model.pressValue" @change="change" placeholder="请选择" class="width_90">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item">
          </el-option>
        </el-select>
      </div>
      <div class="panelRow">
        <div>{{i18n['sequenceFlow.expression']}}：</div>
        <el-input style="width:90%; font-size:12px" type="textarea" :rows="4" :disabled="readOnly"
          :value="model.conditionExpression" @input="(value) => {onChange('conditionExpression', value)}" />
      </div>
      <div class="panelRow">
        <div>{{i18n['sequenceFlow.seq']}}：</div>
        <el-input style="width:90%; font-size:12px" :disabled="readOnly" :value="model.seq"
          @input="(value) => {onChange('seq', value)}" />
      </div>
      <div class="panelRow">
        <el-checkbox @change="(value) => onChange('reverse', value)" :disabled="readOnly" :value="!!model.reverse">
          {{i18n['sequenceFlow.reverse']}}</el-checkbox>
      </div>
    </div>
  </div>
</template>
<script>
  import DefaultDetail from "./DefaultDetail";
  export default {
    data(){
       return {
         options: [{
          value: '1',
          label: '按1'
        }, {
          value: '2',
          label: '按2'
        }, {
          value: '3',
          label: '按3'
        }, {
          value: '*',
          label: '按*'
        }, {
          value: '#',
          label: '按#'
        }]
       }
      },
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
      change(item) {
        this.onChange('pressValue', item.value)

        // 根据按键设标题
        this.onChange('label', item.label)
      }
    }
  }
</script>
<style scoped>
.width_90 {
  width: 90%;
}
</style>

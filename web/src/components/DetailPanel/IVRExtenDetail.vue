<template>
    <div :data-clazz="model.clazz">
        <div class="panelTitle">分机节点</div>
        <div class="panelBody">
            <DefaultDetail :model="model" :onChange="onChange" :readOnly="readOnly" />
            <div class="panelRow">
              <div>分机号：</div>
              <el-input style="width:90%; font-size:12px"
                :value="model.exten"
                @input="change"
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
      exten: {
        type: String,
        default: '1000',
      },
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
        this.onChange('exten', value);
        this.onChange('label', value);
      }
    }
  }
</script>

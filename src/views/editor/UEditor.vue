<template>
  <div style="height:100%">
    <vue-ueditor-wrap v-model="value" :config="myConfig" style="height:100%"></vue-ueditor-wrap>
  </div>
</template>
<script>
import VueUeditorWrap from 'vue-ueditor-wrap'
export default {
  components:{
    VueUeditorWrap,
  },
  data () {
    return {
      value: '这是我调用vue-ueditor-wrap的案例',
      myConfig: {
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: '100%',
        // 初始容器宽度
        initialFrameWidth: '100%',
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        serverUrl: 'http://api.velocitypublic.top/index.php/api/general/upload_binary',
        // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
        UEDITOR_HOME_URL: '/UEditor/'
      }
    }
  }
}
</script>

<style>
.edui-default{height: 100%;}
.edui-editor-iframeholder.edui-default{
height: calc(100% - 112px) !important;
}
</style>
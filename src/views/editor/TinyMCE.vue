<template>
  <div>
    <tinymce_editor v-model="msg"  :disabled="disabled"  @onClick="onClick" ref="editor"></tinymce_editor>
    {{msg}}
  </div>
</template>

<script>
import TinyMce from '../../components/Tinymce' 
export default {
  components:{tinymce_editor: TinyMce},
  data(){
    return{
        disabled: false,
        msg:"欢迎来到全新编辑器",
    }
  },
  methods:{
    onClick(e, editor) {
      console.log('Element clicked');
      console.log(e);
      console.log(editor);
    },

  }
}
</script>

<style>

</style>
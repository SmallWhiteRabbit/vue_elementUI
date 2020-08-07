<template>
  <div>
    <textarea id="editor" name="editor"></textarea>
  </div>
</template>

<script>
export default {
  data(){
    return {
      editor:""
    }
  },
  mounted(){
    this.editor = new Jodit('#editor', {
       theme: "summer",
  });
  }
}
</script>

<style>

</style>
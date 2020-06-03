<template>
  <div id="app">
    <router-view></router-view>
  </div>
  <!-- //npm  install sass-loader --save-dev
npm install node-sass --sava-dev -->
</template>

<script>

export default {
  name: 'App',

}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
html,body,#app,#app>div{
  width: 100%;
  height: 100%;
}
</style>

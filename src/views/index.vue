<template>
  <div class="home">
    <Menu class="menudemo" :menuList="menuList"></Menu>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from '../views/elementUI/menu'
export default {
  computed:{
    menuList(){
      return this.$router.options.routes.filter(function (routes) {
        return !routes.meta.hidden
      })
    }
  },
  methods:{
    menuLink (child) {
      this.$router.push({path: child.path})
    },
  },
  components:{Menu}
}
</script>

<style lang="scss">
.home{
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .menudemo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
    display: inline-block;
  }
  .content{
    width: calc(100% - 200px);
    height: 100%;
    >div{
      padding: 20px;
    }
  }
}

</style>
<template>
  <div class="home">
    <el-menu class="menudemo" >
      <el-submenu v-for="(item,index) in menuList" :key="index" :index="index +'1'" collapse-transition="true" @click="menuLink(item)">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{item.meta.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item  v-for="(menu, idx) in item.children" :index="index +'-'+ idx" :key="idx" @click="menuLink(menu)">{{menu.meta.title}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
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
  }
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
<template>
   <el-menu :collapse="isCollapse" class="menu"   background-color="#596c61"
      text-color="#fff"
      active-text-color="#ffd04b" :default-active="$route.path" :unique-opened="true">

    <component v-for="(item,index) in menuList" :key="item.path" 
    :is="(item.children&&item.children.length>0)?'el-submenu':'el-menu-item'" :index="item.path">
      <template slot="title" :index="index" v-if="item.children&&item.children.length>0"> 
        <!-- <i :class="'iconfont '+item.icon"></i> -->
        <span slot="title">{{item.meta.title}}</span>
<!-- {{menuList}} -->
      </template>
      <!-- 无子菜单的不应配置 slot="title" 会导致折叠时图标不显示-->
        <template  :index="index" v-else> 
        <i :class="'iconfont '+item.icon"></i>
        <span slot="title">{{item.meta.title}}</span>
      </template>
      <template v-if="item.children&&item.children.length>0" >
        <el-menu-item-group>
          <el-menu-item :class="{'is-active':$route.path==menu.path}"  v-for="(menu,idx) in item.children" :index="menu.path" :key="idx" 
          @click="menuLink(menu)" >{{menu.meta.title}}</el-menu-item>
        </el-menu-item-group>
      </template>
    </component>
    
  </el-menu>
</template>

<script>
export default {
  data(){
    return{
      isCollapse:false
    }
  },
  props:['menuList'],
  mounted(){
    console.log(this.menuList)
  },
  methods:{
     menuLink (child) {
      this.$router.push({path: child.path})
    },
  }
}
</script>

<style>
 .el-menu-item-group>ul{
   left: -2px;
    position: relative;
 }
</style>
<template>
<!-- 多级菜单 -->
  <el-menu :collapse="isCollapse" class="menu" mode="horizontal" background-color="#596c61"
      text-color="#fff"
      active-text-color="#ffd04b" :default-active="$route.path" :unique-opened="true">
    <component v-for="(item) in menuList" :key="item.path" 
    :is="(item.children&&item.children.length>0)?'el-submenu':'el-menu-item'" :index="item.path"  @click="menuLink(item)">
      <template slot="title" :index="item.name" v-if="item.children&&item.children.length>0"> 
        <!-- <i :class="'iconfont '+item.icon"></i> -->
        <span slot="title">{{item.meta.title}}</span>
      </template>
      <!-- 无子菜单的不应配置 slot="title" 会导致折叠时图标不显示-->
      <template  :index="item.name" v-else> 
        <i :class="'iconfont '+item.icon"></i>
        <span slot="title">{{item.meta.title}}</span>
      </template>
      <NavMenu :menuList="item.children" v-if="item.children&&item.children.length>0" ></NavMenu>

    </component>
    
  </el-menu>
</template>

<script>
//  mode="horizontal" 引入此组件时必须的
import NavMenu from './menuDetail'
export default {
  data(){
    return{
      isCollapse:false
    }
  },
  components:{NavMenu},
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

<style lang="scss">
.menu{
  .el-menu{
    padding-left: 5px;
    width: calc(100% - 5px); 
  }
}

</style>
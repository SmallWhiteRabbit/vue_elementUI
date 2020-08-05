<template>
    <div>
      <component v-for="(item) in menuList" :key="item.path" :is="(item.children&&item.children.length>0)?'el-submenu':'el-menu-item'" :index="item.path"  @click="menuLink(item)">
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
    </div>
</template>

<script>
export default {
  name:'NavMenu',
  props:['menuList'],
  methods:{
     menuLink (child) {
      this.$router.push({path: child.path})
    },
  }
}
</script>

<style>

</style>
<template>
<div>
  <Menu :menuList="menuList"  class="menudemo" style="height:20%"></Menu>
  <MenuHorizontal :menuList="menuArray"  class="menudemo" style="height:20%;width:100%"></MenuHorizontal>

  <MenuCascader  :options="listOptions"></MenuCascader>
  </div>
</template>

<script>
import Menu from '../../components/menu'
import MenuCascader from '../../components/menuCascader'
import MenuHorizontal from '../../components/menuHorizontal'

export default {
  data(){
    return{
      listOptions:[
        {
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }]
          }]
        }
      ],
      menuArray: [{
        path: '/',
        component:() => import('../index'),
        meta: { title: 'ElementUI',hidden:false},
        children: [
          {
            path: '/table',
            name: 'table',
            component: () => import('./table'),
            meta: { title: 'table',hidden:false },
          },
          {
            path: '/menu',
            name: 'menu',
            component: () => import('./menu.vue'),
            meta: { title: 'menu',hidden:false }
          },
        ]
      },
      {
        path: '/html',
        component:() => import('../index'),
        meta: { title: 'HTML',hidden:false},
        children: [
          {
            path: '/iframe',
            name: 'iframe',
            component: () => import('../HTML/iframe'),
            meta: { title: 'iframe',hidden:false },
            children: [
              {
                path: '/percent',
                name: 'percent',
                component: () => import('../HTML/percent'),
                meta: { title: 'percent',hidden:false }
              }
            ]
          },
          {
            path: '/percent',
            name: 'percent',
            component: () => import('../HTML/percent'),
            meta: { title: 'percent',hidden:false }
          },
        ]
      }]
    }
  },
  components:{Menu, MenuCascader,MenuHorizontal},
  mounted(){

  },
  computed:{
    menuList(){
      return this.$router.options.routes.filter(function (routes) {
        return !routes.meta.hidden
      })
    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
 .el-menu-item-group>ul{
   left: -2px;
    position: relative;
 }
.menudemo{
   height: 50%;
 }
</style>
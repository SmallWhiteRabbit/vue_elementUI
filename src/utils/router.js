import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/',  component:Index, meta: { title: 'ElementUI',hidden:false},
      children: [
        { path: '/table',name: 'table', component: () => import('../views/elementUI/table.vue'),  meta: { title: '表格',hidden:false }, },
        { path: '/menuTree', name: 'menuTree', component: () => import('../views/elementUI/menuTree.vue'), meta: { title: 'menuTree',hidden:false }, },
        { path: '/menu',  name: 'menu', component: () => import('../views/elementUI/menu.vue'), meta: { title: '菜单',hidden:false }},
      ]
    },
    { path: '/html', component:Index, meta: { title: 'HTML',hidden:false},
      children: [
        { path: '/iframe', name: 'iframe', component: () => import('../views/HTML/iframe.vue'), meta: { title: 'iframe',hidden:false }},
        { path: '/percent',  name: 'percent',  component: () => import('../views/HTML/percent.vue'), meta: { title: 'percent',hidden:false } },
      ]
    },
    { path:'/editor',component:Index,meta: { title: '富文本编辑器',hidden:false},
      children: [
        { path: '/ueditor',name: 'ueditor', component: () => import('../views/editor/UEditor.vue'),meta: { title: 'ueditor',hidden:false }, },
        { path: '/editorTiptap', name: 'editorTiptap', component: () => import('../views/editor/tiptap.vue'),meta: { title: 'tiptap',hidden:false },},
        { path: '/vueQuillEditor', name: 'vueQuillEditor', component: () => import('../views/editor/vue_quill_editor.vue'),meta: { title: 'vueQuillEditor',hidden:false }, },
        { path: '/TinyMCE', name: 'TinyMCE', component: () => import('../views/editor/TinyMCE.vue'), meta: { title: 'TinyMCE',hidden:false }, },
        { path: '/Jodit', name: 'Jodit', component: () => import('../views/editor/Jodit.vue'), meta: { title: 'Jodit',hidden:false }, }, 
      ]
    },
    { path:'/dragger',component:Index,meta: { title: '拖拽组件',hidden:false},
      children: [
        { path: '/vuedraggable',name: 'vuedraggable', component: () => import('../views/dragger/vuedraggable.vue'),meta: { title: 'vuedraggable',hidden:false }, },
        { path: '/awe-dnd',name: 'awe-dnd', component: () => import('../views/dragger/awe-dnd.vue'),meta: { title: 'awe-dnd',hidden:false }, },

      ]
    },

]
})
export default router
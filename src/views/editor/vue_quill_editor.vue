<template>
<div>
    <div class="edit_container">
        <quill-editor  style="    height: 80%;"
            v-model="form.goods_desc" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
    </div>
    {{form.goods_desc}}
</div>
    
</template>
<script>
import { quillEditor, Quill } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
// import imageResize from 'qui'
import ImageResize from 'quill-image-resize-module'
import { container, ImageExtend, QuillWatch } from 'quill-image-extend-module'
Quill.register('modules/imageResize', ImageResize )
Quill.register('modules/ImageExtend', ImageExtend )

export default {
    components: {
        quillEditor
    },
    data() {
        return {
            form:{
                goods_desc: ''
            },
            editorOption: {
                placeholder: "此处输入新闻内容",
                modules: {
                    //    ----------------自定义上传图片，将图片转换成想要的类型，不是quill自带的base64
                     ImageExtend: {
                       loading: true,
                       name: "img",
                       action: "", //上传的服务器地址
                       response: res => {
                         return res.data;
                       }
                     },//高亮部分，需要添加,设置拖拽
                    imageResize: {
                        displayStyles: {
                            backgroundColor: "black",
                            border: "none",
                            color: "white"
                        },
                        modules: ["Resize", "DisplaySize", "Toolbar"]
                    },
                    toolbar: {
                        container: container,
                        handlers: {
                            image: function(value) {
                                if (value) {
                                    // document.querySelector("#upload").click();
                                } else {
                                    this.quill.format("image", false);
                                }
                            }
                        },
                        
                    },
                }
            },
        }
    },
    methods: {
        onEditorReady(editor) { // 准备编辑器
 
        },
        onEditorBlur(){
            console.log(this.form)
        }, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
    }
}
</script>

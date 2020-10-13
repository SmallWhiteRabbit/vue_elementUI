<template>
  <!-- <el-table ref="table" :data="tableData" style="width: 100%"  @select-all="handleSelectAll"
   @selection-change="handleSelectionChange" @select="handleSelect"
  :tree-props="{children: 'children', hasChildren: 'hasChildren'}"  row-key="id">
    <el-table-column type="selection" width="55"> </el-table-column>
    <el-table-column label="商品 ID" prop="id"></el-table-column>
    <el-table-column label="商品名称" prop="name"> </el-table-column>
    <el-table-column label="描述" prop="desc"> </el-table-column>
    <el-table-column label="操作" >
      <template slot-scope="scope">
        <span @click="expand(scope.row)">展开</span>
        <span @click="btn_select_all(scope.row)" style="margin-left:25px">全选</span>
      </template>  
    </el-table-column>
  </el-table> -->
  <el-table ref="table" :data="tableData" style="width: 100%" >

  </el-table>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  export default {
    name: 'menuTree',
    data() {
      return {
        tableData: [ {
          id: 1,
          name:'基础资料',
          category: '',
          path: '/manage',
          desc: 1, 
          address:'normal', 
          shop: '张俊容',
          shopId: '10333',
          children: [{
            id: 2,
            name:'基础资料',
            category: '',
            path: '/manage',
            desc: 1, 
            address:'normal', 
            shop: '张俊容',
            shopId: '10333',
            children: [{
              id: 3,
              name:'菜单管理删除',
              category: '',
              path: '/manage/menu/del',
              desc: 1, 
              address:'normal', 
              shop: '张俊容',
              shopId: '10333'
            }]
          }]
        }],
        selectList:[],

      }
    },
    methods:{
      expand(row){
        // this.$refs.table.toggleRowExpansion(row)
      },
      handleSelectAll(selection){
        // selection当前选中项是数组
        console.log(this.$refs.table.data)
        this.$refs.table.data.map((items) => {
          if(!items.isCheck){
            this.$refs.table.toggleRowSelection(items, true); //行变为选中状态
            item.isCheck = true
          }else{

          }
          item.isCheck = !item.isCheck

          if(item.children){}
        })
        console.log('selectAll', selection)
      },
      handleSelectionChange(selection){
        // selection当前选中项是数组
        console.log('handleSelectionChange', selection)
        // this.$refs.table.toggleRowSelection(this.selectList)
      },
      handleSelect(selection, row){
        console.log('handleSelect', selection,row)
        // this.selectList.push(row)
      },
      btn_select_all(){
        console.log(this.$refs.table)
        this.$refs.table.toggleAllSelection()
      }, 
    }
  }
</script>
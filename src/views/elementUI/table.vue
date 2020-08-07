<template>
  <div ref="tableContent" >

    <el-table :data="tableList" ref="tableList" border :height="tableHeight" header-row-class-name="tableHeader"  :row-class-name="tableRow" >
        <el-table-column prop="username"  label="用户名"></el-table-column>
        <el-table-column prop="status"  label="菜单名称" > </el-table-column>
        <el-table-column prop="isMenu"  label="操作" ></el-table-column>
        <el-table-column prop="desc"  label="操作时间" width="200px"></el-table-column>
        <el-table-column prop="desc"  label="操作时间" width="200px"></el-table-column>
        <el-table-column prop="desc"  label="操作时间" width="200px"></el-table-column>
        <el-table-column prop="desc"  label="操作时间" width="200px"></el-table-column>
        <el-table-column prop="desc"  label="操作时间" width="200px"></el-table-column>
        <el-table-column prop="desc"  label="操作时间" width="200px"></el-table-column>
        <el-table-column prop="desc"  label="操作时间" width="200px"></el-table-column>
        <el-table-column prop="desc"  label="操作时间" width="200px"></el-table-column>
        <el-table-column prop="desc"  label="操作时间" ></el-table-column>
        <el-table-column prop="desc"  label="操作时间" ></el-table-column>
        <el-table-column prop="desc"  label="操作时间" ></el-table-column>
        <el-table-column prop="desc"  label="操作时间" ></el-table-column>
        <el-table-column prop="desc"  label="操作时间" ></el-table-column>
        <el-table-column prop="desc"  label="操作时间" ></el-table-column>
        <el-table-column prop="desc"  label="操作时间" ></el-table-column>
        <el-table-column prop="desc"  label="操作时间" ></el-table-column>
        <el-table-column  label="详情" ></el-table-column>
      </el-table>
      <el-pagination ref="pagination" background @current-change="curPageChange" @size-change="sizeChange"
      :current-page="current_page" :page-sizes="page_sizes" :page-size="page_size" 
      :layout="total >= 6 ? 'prev, pager, next, total, sizes,  jumper':'pager, next, total, sizes,  jumper'"  
      :total="total">
      </el-pagination>
  </div>
</template>

<script>
// import mock from '../../mock/table'
import http from '../../api/index'

export default {
  data(){
    return{
      tableList:[
        {username:'junrong'}
      ],
      tableHeight: null,
      page_sizes:[10,25,50,100],
      page_size:10,
      current_page:1,
      total:20
    }
  },
  created(){
    // this.getTable()
  },
  mounted(){
    this.setTableHeight()
  },
  methods:{
    curPageChange(){},
    sizeChange(){},
    setTableHeight(){
      let manageMenuHeight = this.$refs.tableContent.offsetHeight;
      let paginationHeight = 0
      if(this.$refs.pagination){
        paginationHeight = this.$refs.pagination.$el.offsetHeight +15
      }
      this.tableHeight = manageMenuHeight - paginationHeight - 30 +'px'
      console.log(this.$refs.pagination ,paginationHeight)
    },
    getTable(){
      http.get('/table').then(res=>{
        console.log(res)
      })
    },
    tableRow(){}
  }
}
</script>

<style lang="scss">
//滚动条的宽度
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
//滚动条的滑块
::-webkit-scrollbar-thumb {
  background-color: #CCCCCC;
  border-radius: 6px;
}
.tableHeader th{
  text-align: center;
  font-weight: bolder;
  color: #333;
  background-color: #dddddd;
}
.el-pagination{
  margin-top: 15px;
  text-align: right;
}
</style>
<template>
  <div>table

    <el-table :data="tableList" ref="tableList" border :height="tableHeight" header-row-class-name="tableHeader"  :row-class-name="tableRow" >
        <el-table-column prop="name"  label="用户名"></el-table-column>
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
  </div>
</template>

<script>
export default {
  data(){
    return{
      tableList:[],
      tableHeight:"500"
    }
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
}
</style>
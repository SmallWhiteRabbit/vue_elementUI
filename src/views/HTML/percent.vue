<template>
  <div>
    <div class="father">
      <p class="son"></p>
    </div>
    <div class="posFather">
      <p class="posSon"></p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.father{
  width: 100px;
  height: 150px;
  padding: 2px;
  border: 1px solid ;
  display: inline-block;
}
.son{
  width: 50%;
  height: 50%;
  margin: 5%; 
  /* 百分比相对block元素的content宽度 与position的值无关 */
  border: 1px solid;
}

.posFather{
  width: 100px;
  height: 150px;
  border:1px solid;
  position: inherit;
}
.posSon{
  width: 20%;
  height: 25%;
  border:1px solid;
  position: relative;
  /* 子元素  position: absolute; 最近父元素属性为 position：absolute | fixed | relative | sticky 百分比取值*/
}
</style>
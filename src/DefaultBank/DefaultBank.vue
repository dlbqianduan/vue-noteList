<template>
<div>
 <div class="logoName">
      <span :style="{color:changeColor()}">随</span>
      <span :style="{color:changeColor()}">风</span>
      <span :style="{color:changeColor()}">笔</span>
      <span :style="{color:changeColor()}">记</span>
      <span :style="{color:changeColor()}">即</span>
      <span :style="{color:changeColor()}">刻</span>
      <span :style="{color:changeColor()}">记</span>
      <span :style="{color:changeColor()}">录</span>
    </div>
    <MyFoot></MyFoot>
</div>
</template>


<script>
import MyFoot from '@/components/MyFoot'
export default {
  name:'DefaultBank',
  components:{
    MyFoot
  },
  computed:{
     changeColor:function(){
       return function(){
          var rgb = "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")"
          return rgb
       }
     }
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
.logoName{
  padding: 10px 0;
  box-shadow: 0 0 8px #ddd;
  font-size:18px;
}

</style>

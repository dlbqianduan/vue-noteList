<template>
  <div class="foot">
    <router-link>笔记</router-link>
    <router-link>我的</router-link>
  </div>
</template>

<style>
  .foot{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:10px;
    position: fixed;
    bottom:0;
    left:0;
    width:100%;
    box-shadow: 0 0 8px #ddd;
  }
</style>

<script>
export default {
  name:'MyFoot'
}
</script>

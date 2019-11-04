<template>
  <div class="foot">
    <router-link to="/note">笔记</router-link>
    <div @click="addNote">+</div>
     <router-link to="/user">我的</router-link>
  </div>
</template>


<style>
  .foot{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:12px;
    width:100%;
    box-sizing: border-box;
    background-color: #fff;
    border-top:1px solid #ccc;
    z-index: 300;
  }
  .foot div{
    text-align: center;
    box-shadow:inset 0 0 2px #ddd;
    border-radius: 20px;
    padding:4px 0;
    text-align: center;
    color:#999;
  }
  a{
    text-decoration: none;
    color:#333;
  }
  .router-link-activer{
    color:#409EFF;
  }
  .router-link-exact-active{
    color:#409EFF;
  }
</style>


<script>
export default {
  name: 'MyFoot',
  methods:{
    addNote(){
      console.log(222)
      this.$store.state.showInput = true;
    }
  }
}
</script>

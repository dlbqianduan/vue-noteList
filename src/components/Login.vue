<template>
  <div>
      <el-button type="primary" @click="login">登陆</el-button>
  </div>
</template>
<style scoped>

</style>
<script>
export default {
  name:'Login',
  methods:{
    login(){
     document.cookie = 'login=true'
    }
  }
}
</script>

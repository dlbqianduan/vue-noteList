<template>
  <div>
    <div class="logoName" :style="Bg">
      <span :style="{color:changeColor()}">随&nbsp;风&nbsp;笔&nbsp;记&nbsp;</span>
      <span :style="{color:changeColor()}">随&nbsp;风&nbsp;笔&nbsp;记</span>
    </div>
    <router-view></router-view>
    <MyFoot class="myfoot"></MyFoot>
    <div class="enterInput" v-if="$store.state.showInput">
      <div class="mask" @click="qx"></div>
      <div class="content">
        <el-input v-model="input" placeholder="请输入内容" style="width:75%;"></el-input>
        <el-button type="primary" style="width:25%;padding:12px 20px" @click="btn">增加</el-button>
      </div>
    </div>
    <el-button type="text" @click="opentc"></el-button>
  </div>
</template>


<script>
import MyFoot from "@/components/MyFoot";
import Note from "@/components/Note";
import User from "@/components/User";
export default {
  name: "DefaultBank",
  components: {
    MyFoot,
    Note,
    User
  },
  data(){
     return {
       input:'',
       inpp:[],
        Bg:{
        backgroundImage:'url('+require('@/assets/bigbg.jpg')+')',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'0 -241px'
      }
     }
  },
  methods:{
    btn(e){
      if(this.input){
         this.$store.commit('addInfo',this.input);
      }
         this.input= ''
    },
    qx(){
       this.$store.state.showInput = false
    },
     opentc() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
     }
  },
  computed: {
    changeColor: function() {
      return function() {
        var rgb =
          "rgb(" +
          Math.random() * 255 +
          "," +
          Math.random() * 255 +
          "," +
          Math.random() * 255 +
          ")";
        return rgb;
      };
    }
  }
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
}
.logoName {
  padding: 20px 0;
  font-size: 18px;
}
.logoName span{
  text-shadow: 1 1 1px #fff;
}
.myfoot {
  position: fixed;
  bottom: 0;
  left: 0;
}
.enterInput{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:300;
}
.enterInput .content{
  display:flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
  padding:10px;
  box-sizing: border-box;
  position:absolute;
  top:50%;
  left:0;
}
.enterInput .mask{
  width:100%;
  height:100%;
  position: absolute;
  top:0;
  left:0;
  background:rgba(0, 0, 0, 0.5);
}
</style>

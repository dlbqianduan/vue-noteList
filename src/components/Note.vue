<template>
  <div class="notePage">
    <div class="note-item" @click="xz(item.id)" v-for="(item ,index) in inp" :class="{ active : item.id == idx,delActive : item.delShow }">
      <div><p class="note-cont">{{item.cParagraph}}</p><p class="time">{{getNowTime}}</p></div>
     <el-checkbox class="checkbox" v-model="item.delShow"></el-checkbox>
      <transition name="el-zoom-in-center">
       <el-button type="primary" icon="el-icon-delete" v-if="item.delShow" @click="del(index)"></el-button>
      </transition>
    </div>
  </div>
</template>

<style>
.notePage{
  box-sizing: border-box;
  padding:10px;
  color:#666;
  margin: 0 0 40px;
}
.note-item.active{
 box-shadow: 0 0 4px #fff;
}
.delActive{
  text-decoration: line-through;
  color:#999;
}
.note-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  background-color: #fff;
  box-shadow: 0 0 6px #ddd;
  border-radius: 6px;
}
.note-item div{
  width:80%;
  text-align: left;
}
.checkbox{
  width:26px;
}
.note-item p{
  padding:6px 10px;
}
.note-item .el-button.el-button--primary{
  padding:4px 6px;
  width:30px;
  margin-right:4px;
}
.note-item p.note-cont{
  width:100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.note-item p.time{
  font-size:14px;
}
</style>

<script>
import Axios from 'axios'
require('@/mock')
export default {
  name: 'Note',
  data:function() {
    return {
      checked: false,
      idx:'',
      idn:'',
      inpId:''
    }
  },
  computed:{
     inp:function(){
        return this.$store.state.inputArr
     },
     getNowTime:function(){
       var date = new Date()
           ,time = ''
           ,year = date.getFullYear()
           ,month = date.getMonth()+1
           ,day = date.getDate();
        time = ""+year+"."+month+"."+day;
        return time;
     }
  },
  methods:{
    testReq(state){
            Axios.post('/api/test').then((res) => {
              console.log(res.data)
                this.$store.state.inputArr = res.data
              }).catch((err) => {
                console.log(err)
              })
        },
    xz(id){
      this.idx = id
    },
    del(index){
      this.$store.commit('dell',index)
    }
  },
  created:function(){
    this.testReq();
  }
}
</script>

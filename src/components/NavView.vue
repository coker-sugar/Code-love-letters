<template>
  <!-- 最顶部 -->
  <el-row class="top">
    <!-- 左侧图片 -->
    <el-col :span="6" class="left">
      <div class="Flag_img"></div>
      <div class="title">格物致知 叩问苍穹</div>
    </el-col>
  <!-- 右侧标题 -->
    <el-col :span="18" class="right">
      <router-link to="/index">
        <!-- <img src="../assets/首页（登录前）/shouye.jpg" alt=""> -->
       航天成就
      </router-link>
  
      <router-link to="/china">
        <!-- <img src="../assets/首页（登录前）/chengyuan.jpg" alt=""> -->
        航天历程
      </router-link>
  
      <router-link to="/giant">
      
        <!-- <img src="../assets/首页（登录前）/chengguo.jpg" alt=""> -->
        航天英雄
      </router-link>
    
      <router-link to="/future">
        <!-- <img src="../assets/首页（登录前）/jiaru.jpg" alt=""> -->
        航天未来
      </router-link>
      </el-col>
    </el-row>
  </template>
  
  <script>
  // import { reactive } from "vue";
  import { onMounted } from 'vue';
  export default {
    name: 'AppNav',
  }
  </script>
  
  <style scoped lang="less">

  .top {
    margin: 0 auto;
    width: 98vw;
    height: 1.5rem;
    background-image: linear-gradient(to right,@leftColor,@rightColor);
 .left {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .Flag_img {
    width: 1.5rem;
    height: 1.5rem;
    position: relative;
    left: -12px;
    background-image: url(../assets/index/spaceman.png);
    // 图片自适应
    -moz-background-size:100% 100%; background-size:100% 100%;
    }
    .title {
      font-size: .45rem;
      margin-left: .5rem;
      font-family: '楷体';
      color:#FFF;
    }
 }

  .right {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  perspective:10rem;
  a {
    width: 3rem;
    height: .75rem;
    line-height: .75rem;
    text-align: center;
    color: @matchColor;
    background-color: 	#F5F5DC;
    font-size: .45rem;
    border-radius: .2rem;
    &:hover{
    transform: translateZ(.2rem);
    transition: all .5s;
    }
    &:first-child:hover,&:last-child:hover {
      transform: translateZ(.1rem);
    }
   }
 }
}
  </style>
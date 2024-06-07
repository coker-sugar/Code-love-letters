<template>
    <div class="block text-center" m="t-4">
      <el-carousel trigger="click" height="573.104px" :autoplay="false" arrow="never">

        <el-carousel-item v-for="item in achivements" :key="item" class="small justify-center" style="" text="2xl">
          <el-row :gutter="20" class="small justify-center" text="2xl">
              <el-col  :span="12" >
                <div id="left">
                  <!-- <h4>阶段</h4> -->
                  <h1>{{item.name}}</h1>
                  <h3>{{item.system}}</h3>
                 
                  <p>
                    {{ item.brief }}
                  </p>
                  <h4>未来计划</h4>
                  <p>
                    {{ item.achive.one }}<br/>
                    {{ item.achive.two }}<br/>
                    {{ item.achive.three }}<br/>
                    {{ item.achive.four }}
                  </p>
                  <!-- <h4>项目成员</h4> -->
                  <h5>
                    {{ item.member }}
                  </h5>
                </div>
              </el-col>
              <el-col id="right" :span="12">
               <div class="block text-center" m="t-4">
                <el-carousel trigger="click" height="374px" arrow="never"> 
                  <el-carousel-item v-for="i in item.picture" :key="i">
                    <img :src="i.view" alt="">
                  </el-carousel-item>
                </el-carousel>
                </div>
              </el-col>        
          </el-row>
          
        </el-carousel-item>

      </el-carousel>
    </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup(){
    let achivements = reactive({
      first: {
            name: "第一个阶段",
            system: "2035年 我国迈向航天强国前列",
            brief: "“祝融”探火、“羲和”逐日、“天和”遨游星辰，重大工程成就举世瞩目。航天科技实现跨越式发展，航天发射能力显著提升，空间科学、空间技术、空间应用全面突破，航天强国建设迈出坚实步伐。",
            achive: {
                one: "1.2028年长征九号首飞",
              two: "2.新一代空间基础设施建设:2028年太阳发电站初见规模“逐日工程”",
              three: "3.新的卫星、空间建设,第一期空间站已经建成,新的卫星、空间站已经建成，第一期空间站已经建成",
                four:"4.探月工程和载人登月,2030年前实现载人登月"
            },
            // member: "王维杰、张雨甜、黄冠联、周超",
        picture: [
          { id: 0, view: require("@/assets/futrue/长征9号.jpg") },
           {id:1,view: require("@/assets/futrue/卫星.jpg")  } ]
      },second: {
        name: "第二个阶段",
        system: "2045年 全面建成航天强国",
        brief: "”一代代航天人将赓续传承、接力奋斗，在浩瀚太空留下越来越多的中国身影。这也激励着更多航天人锐意进取，托举起中华民族的航天强国梦想，汇聚起实现中国梦的蓬勃力量。",
        achive: {
          one: "1.载人登陆火星:建成环绕火星的空间站、建成非化学能源载人火箭、建设全火星返回火箭、建成简单火星基地",
          two: "2.国际月球科研站,目标2035年建成，2045年具备采矿运输功能",
          three: "3.天地往返运输",
          four:"4.行星星际穿越"
        },
        member: "",
        picture: [
          { id: 0, view: require("@/assets/futrue/火星.jpg") },
           {id: 1,view: require("@/assets/futrue/星际穿越.jpg")  } ]
      },
    });
    return {
      achivements,
      // winHeight
    }
  }
}
</script>

<style lang="less" scoped>
* {
  padding: 0rem;
  margin: 0px;
  font-size: 24px;
}
img {
  border-radius: 50%;
  z-index: -99;
}
.el-carousel {
  height: 100%;
.el-carousel__item  {
    height: 100%;
    padding-top: 40.8px;
    // opacity: 0.75;
    margin: 0;
  .el-row  {
    height: 100%;
    #left {
      position: relative;
      left: 27.2px;
      #left-top {
        position: absolute;
        height:100%;
        width: 85%;
        margin: 0 auto;
        width: 34px;
        height: 34px;
        top: -13.6px;
        left:-34px;
      }
      #left-bottom{
        position: absolute;
        bottom: -306px;
        left: -181.56px;
        width: 380.8px;
        height:  380.8px;
        z-index: -99;
        overflow: hidden;
      }
      h1 {
        font-size: 28px;
      }
      // background-color:gray;
      h3 {
        margin: 13.6px 0 27.2px 0;
        font-size: 24px;
      }
      h4 {
        font-size: 20px;
      }
      p {
        margin: 10.2px 0 34px 0;
      }
      h5 {
        margin-top: 10.2px;
        
      }
    }
    #right {
      width: 100%;
      height: 90%;
      margin-top: 2%;
      position: relative;
      #right-top {
        position: absolute;
        width: 81.6px;
        height: 81.6px;
        top: 2.04px;
        right: 42.16px;
      }
      #right-bottom{
        position: absolute;
        bottom: 23.8px;
        right: 85px;
        width: 68px;
        height: 68px;
        overflow: hidden;
      }
      // background-color: pink;
      .el-carousel  {
      // background-color: pink;
        /deep/ ul {
       position: relative;
       top: -13.6px;
      //  left: 400px;
          width: 44.88px;
           li {
             button {
               width: 12.24px;
               height: 12.24px;
               background: none;
               background-color: #bd99ff!important;
               box-shadow: 0 0 0rem #bd99ff;
               border-radius: 50%;
             }
             &::before {
               width:0rem ;
               height: 0rem;
             } 
           }
          }
          overflow: hidden;
        }
      img {
        width: 65%;
        height: 300px;
        margin-left: 16%;
        border-radius: 30.6px;
      }
    }
  }
}
// 用 /deep/ 穿透,修改element样式
/deep/ ul {
  overflow-y: auto;
  overflow-x: auto;
  width: 3.2rem;
  display: flex;
  justify-content: space-between;
  // background-color: blue;
  li {
      // width: 1.0588rem;
      // height: 1.0588rem;
    button {
      width: 1rem;
      height: 1rem;
      box-shadow: 0 0 8.16px gray;
      border-radius: 50%;
      background-repeat: no-repeat;
    }
    // &::before {
    //   content: '';
    //   position: absolute;
    //   top: 48%;
    //   width:44.88px ;
    //   height: 4.76px;
    //   background-color:#e8eaf2;
    // } 
    &:nth-child(1){
      button {
        background: url(../../assets/public/火箭.png);
        background-size: 1rem  1rem;
      }
      &::before {
        left: 20%;
      }
    }
    &:nth-child(2){
      button {
        background: url(../../assets/public/火箭.png);
        background-size:  1rem  1rem;
      }
      &::before {
      left: 34%;
      }
    }
    &:nth-child(3){
      button {
        background: url(../../assets/public/火箭.png);
        background-size:  48.96px  48.96px;
      }
      &::before {
      left: 34%;
      }
    }
    &:nth-child(4){
      button {
        background: url(../../assets/public/火箭.png);
        background-size:  48.96px  48.96px;
      }
      &::before {
     right: 34%;
      }
    }
    &:nth-child(5){
      button {
        background: url(../../assets/public/火箭.png);
        background-size:  48.96px  48.96px;
      }
      &::before {
      right:12%;
      }
    }
  }
}
}
</style>
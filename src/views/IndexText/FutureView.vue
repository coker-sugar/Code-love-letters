<template>
    <div class="outer">
      <nav-view/>
      <router-view/>

    </div>
  </template>
  
  <script>
  import BottomView from '../../components/BottomView.vue'
  import NavView from '../../components/NavView.vue'
  export default {
      name: 'FutureView',
      components: {
          NavView,
          BottomView
      },
      setup() {
            let msg = [
                  {
                      id: "1",
                      name: "第一个阶段",
                      text: "2035年我国迈向航天强国前列:",
                      textone: "一、重型运载火箭2028年长征九号首飞",
                      texttwo: "二、新一代空间基础设施建设:2028年太阳发电站初见规模“逐日工程”",
                      texthree: "三、自己的空间站新的卫星、空间建设第一期空间站已经建成,新的卫星、空间站已经建成，第一期空间站已经建成",
                      textfour: "四、探月工程和载人登月,2030年前实现载人登月",
                  },
                  {
                    id: "2",
                      name: "第二个阶段",
                      text: "2045年全面建成航天强国",
                      textone: "一、载人登陆火星:建成环绕火星的空间站建成非化学能源载人火箭建设全火星返回火箭建成简单火星基地",
                      texttwo: "二、国际月球科研站:目标2035年建成，2045年具备采矿运输功能",
                      texthree: "三、天地往返运输",
                      textfour: "四、行星际穿越",
            }
        ]
      }
  }
  </script>
  
  <style lang="less" scoped>
  .outer {
      width: 100vw;
  }
  </style>
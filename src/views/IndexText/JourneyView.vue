<template>
    <div class="outer">
      <nav-view/>
      <journrey/>
    </div>
  </template>
  
  <script>
  import BottomView from '../../components/BottomView.vue'
  import NavView from '../../components/NavView.vue'
  import journrey from '../../components/journey/index.vue'
  export default {
      name: 'JourneyView',
      components: {
          NavView,
          BottomView,
          journrey
      },
      setup() {
            let journey = [
                  {
                      id: 0,
//                       神舟五号飞船搭载航天员杨利伟于北京时间2003年10月15日9时整在酒泉卫星发射中心发射升空，在轨飞行14圈，历时21小时23分，顺利完成各项预定操作任务后，其返回舱于北京时间2003年10月16日6时23分返回内蒙古主着陆场，其轨道舱留轨运行半年
// [1] 
                text:"2003年10月15日、我国第一艘载人飞船神舟五号成功发射",
                  },
                  {
                        id: 1,
                    text:"2005年10月12日我国第二艘载人神舟关雩成功发射"
                  },
                  {
                      id: 2,
                text:"1970年4月14日，“东方红”一号发射"
                  }, {
                        id: 3,
                text:"2021年6月17日9时22分，搭载神舟十二号载人飞船的长征二号F遥十二运载火箭，在酒泉卫星发射中心准时点火发射，"
            }
        ]
      }
  }
  </script>
  
  <style lang="less" scoped>
  .outer {
      width: 98vw;
      margin: 0 auto;
  }
  </style>
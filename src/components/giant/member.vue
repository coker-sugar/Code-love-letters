
<template>
<div class="out">
        <!-- 1、左上角标题 -->
        <!-- <div id="member-group" >
      航天英雄
     </div>
   -->
     <!-- 2、中间部分 -->
  <div id="member-middle">
      <!-- (1)成员介绍 -->
    <div id="circle-text"
      v-show="yin==1">
      <!-- （1.1）左侧图片+文字 -->
      <div id="circle-tu-wen">
        <img src="@/assets/giant/杨利伟.png" alt="">
        <h3>{{pasttext.first.name}}</h3>
      </div>
      <!-- (1.2)右侧介绍 -->
      <div id="member-text-middle">
        <!-- <h4> 职位：</h4> -->
          <!-- {{pasttext.first.occupation}}<br/> -->
        <div style="margin-bottom:10px;"></div>
        <!-- <h4>个性签名：</h4> -->
          {{pasttext.first.signature}}
      </div>
    </div>
      <!-- (2)成员介绍 -->
    <div id="circle-text"
      v-show="yin==2">
      <!-- （2.1）左侧图片+文字 -->
      <div id="circle-tu-wen">
        <img src="@/assets/giant/翟志刚.png" alt="">
        <h3>{{pasttext.second.name}}</h3>
      </div>
      <!-- (2.2)右侧介绍 -->
      <div id="member-text-middle">
        <!-- <h4> 职位：</h4> -->
          <!-- {{pasttext.second.occupation}}<br/> -->
        <div style="margin-bottom:10px;"></div>
        <!-- <h4>个性签名：</h4> -->
          {{pasttext.second.signature}}
      </div>
    </div>
        <!-- (3)成员介绍 -->
        <div id="circle-text"
      v-show="yin==3" >
      <!-- （3.1）左侧图片+文字 -->
      <div id="circle-tu-wen">
        <img src="@/assets/giant/费俊龙.png" alt="">
        <h3>{{pasttext.third.name}}</h3>
      </div>
      <!-- (3.2)右侧介绍 -->
      <div id="member-text-middle">
        <!-- <h4> 职位：</h4>
          {{pasttext.third.occupation}}<br/> -->
        <div style="margin-bottom:10px;"></div>
        <!-- <h4>个性签名：</h4> -->
        <div style="font-size:18px;">&nbsp;&nbsp;{{pasttext.third.signature}}</div>
      </div>
    </div>
    <!-- (4)成员介绍 -->
      <div id="circle-text"
        v-show="yin==4">
        <!-- （4.1）左侧图片+文字 -->
        <div id="circle-tu-wen">
          <img src="@/assets/giant/聂海胜.png" alt="">
          <h3>{{pasttext.forth.name}}</h3>
        </div>
        <!-- (4.2)右侧介绍 -->
        <div id="member-text-middle">
          <!-- <h4> 职位：</h4>
            {{pasttext.forth.occupation}}<br/> -->
          <div style="margin-bottom:10px;"></div>
          <!-- <h4>个性签名：</h4> -->
        {{pasttext.forth.signature}}
        </div>
      </div>
      <div id="circle-text"
        v-show="yin==5">
        <!-- （4.1）左侧图片+文字 -->
        <div id="circle-tu-wen">
          <img src="@/assets/giant/王亚平.png" alt="">
          <h3>{{pasttext.fivth.name}}</h3>
        </div>
        <!-- (4.2)右侧介绍 -->
        <div id="member-text-middle">
          <!-- <h4> 职位：</h4>
            {{pasttext.forth.occupation}}<br/> -->
          <div style="margin-bottom:10px;"></div>
          <!-- <h4>个性签名：</h4> -->
        {{pasttext.fivth.signature}}
        </div>
      </div>
      <div id="circle-text"
        v-show="yin==6">
        <!-- （4.1）左侧图片+文字 -->
        <div id="circle-tu-wen">
          <img src="@/assets/giant/景海鹏.png" alt="">
          <h3>{{pasttext.sixth.name}}</h3>
        </div>
        <!-- (4.2)右侧介绍 -->
        <div id="member-text-middle">
          <!-- <h4> 职位：</h4>
            {{pasttext.forth.occupation}}<br/> -->
          <div style="margin-bottom:10px;"></div>
          <!-- <h4>个性签名：</h4> -->
        {{pasttext.sixth.signature}}
        </div>
      </div>
      <div id="circle-text"
        v-show="yin==7">
        <!-- （4.1）左侧图片+文字 -->
        <div id="circle-tu-wen">
          <img src="@/assets/giant/刘旺.png" alt="">
          <h3>{{pasttext.seventh.name}}</h3>
        </div>
        <!-- (4.2)右侧介绍 -->
        <div id="member-text-middle">
          <!-- <h4> 职位：</h4>
            {{pasttext.forth.occupation}}<br/> -->
          <div style="margin-bottom:10px;"></div>
          <!-- <h4>个性签名：</h4> -->
        {{pasttext.seventh.signature}}
        </div>
      </div>
      <div id="circle-text"
        v-show="yin==8">
        <!-- （4.1）左侧图片+文字 -->
        <div id="circle-tu-wen">
          <img src="@/assets/giant/叶光富.png" alt="">
          <h3>{{pasttext.eighth.name}}</h3>
        </div>
        <!-- (4.2)右侧介绍 -->
        <div id="member-text-middle">
          <!-- <h4> 职位：</h4>
            {{pasttext.forth.occupation}}<br/> -->
          <div style="margin-bottom:10px;"></div>
          <!-- <h4>个性签名：</h4> -->
        {{pasttext.eighth.signature}}
        </div>
      </div>
  
    <!-- (5)按钮模块 -->
  <ul class="circle">
    <li>
      <button @click="showone(1)"
      :class="yin===1? 'active':''" >
        <img src="@/assets/giant/杨利伟.png" alt="">
      </button>
    </li>
    <li>
      <button @click="showone(2)"
      :class="yin===2? 'active':''" >
        <img src="@/assets/giant/翟志刚.png" alt="">
      </button>
    </li>
    <li>
      <button @click="showone(3)"
      :class="yin===3? 'active':''" >
        <img src="@/assets/giant/费俊龙.png" alt="">
      </button>
    </li>
    <li>
      <button @click="showone(4)"
      :class="yin===4? 'active':''" >
        <img src="@/assets/giant/聂海胜.png" alt="">
      </button>
    </li>
    <li>
      <button @click="showone(5)"
      :class="yin===5? 'active':''" >
        <img src="@/assets/giant/王亚平.png" alt="">
      </button>
    </li>
    <li>
      <button @click="showone(6)"
      :class="yin===6? 'active':''" >
        <img src="@/assets/giant/景海鹏.png" alt="">
      </button>
    </li>
    <li>
      <button @click="showone(7)"
      :class="yin===7? 'active':''" >
        <img src="@/assets/giant/刘旺.png" alt="">
      </button>
    </li>
    <li>
      <button @click="showone(8)"
      :class="yin===8? 'active':''" >
        <img src="@/assets/giant/叶光富.png" alt="">
      </button>
    </li>
  </ul>
  
  </div>

  <introduce/>
</div>
  
  </template>
  
  <script>
  import { reactive, } from 'vue'
  import introduce from "@/components/giant/introduce.vue"
  export default {
    components: {
      introduce
    },
      data () {
      return {
        // 控制切换按钮后按钮改变样式
        yin: 1,
        // 控制点击按钮后子组件显示，再次点击隐藏
        shi: true,
        // 设置禁用
        // isDisabled1: false,
      }
    },
    methods: {
      showone (value) {
        this.yin === value ? this.shi = !this.shi : this.shi = true
        this.yin = value
      },
    },
    setup() {
  
      let pasttext = reactive({
  
  first: {
    name: '杨利伟',
    occupation: '实验室负责人，后端开发',
    signature:'中国第一代航天员中国进入太空的第一人，这象征着中国太空事业向前迈进一大步，起到了里程碑的作用'
  },
  third: {
    name: '费俊龙',
    occupation: '后端组长,后端开发',
    signature:'完成了一系列安全和后勤实验,包括在返回舱和轨道舱之间转移、更换航天服以及在两个舱内运动。'
  },
  forth: {
    name: '聂海胜',
    occupation: '后端开发',
    signature:'成功完成中国第一次有人参与的空间科学实验,使中国实现了“多人多天”太空飞'
  },
  second: {
    name: '翟志刚',
    occupation: '后端开发',
    signature:'实现了中国历史上航天员的第一次太空漫步，翟志刚在舱外飘在太空长达19分35秒'
          },
      
  fivth: {
    name: '王亚平',
    occupation: '后端开发',
    signature:'2021年10月14日,王亚平成为中国首位进行出舱活动的女航天员。'
          },
          sixth: {
    name: '景海鹏',
    occupation: '后端开发',
    signature:'三度飞天的航天员,先后圆满执行神舟七号载人飞行任务、天宫一号与神舟载人交会对接任务'
  },
          eighth: {
    name: '叶光富',
    occupation: '在轨驻留六个月',
    signature:'2021年12月26日，神舟十主号航天员乘组叶光富进行了神舟十主号的第二次出舱活动。'
          },
          seventh: {
    name: '刘旺',
    signature:'2012年6月22日12时许，刘旺操作飞船姿态控制手柄，对组合体飞行姿态进行控制试验。'
  },
  });
  
      return {
          pasttext
        }
    }
  }
  </script>
  
  <style lang="less" scoped>
  .out {
    // margin:0 auto;
    // box-sizing: border-box;
    // padding-left: 40px;
    margin-left: 10vw;
    width: 90vw;
    padding-top: 40px;
    display:flex;
  justify-content: space-around;
  align-items: center;
  }
   // 左上角标题
   #member-group {
      position: absolute;
      left: -2.8rem;
      top: -1.1rem;
      width: 4.65rem;
      height: .55rem;
      text-align: center;
      line-height: .55rem;
      // margin: .30rem 0 0 -0.16rem;
      box-shadow: 0 0 .08rem rgba(0, 0, 0, 0.349019607843137);
      border-radius: .10rem;
      font-size:20px
    }
    #member-middle {
        width: 8.00rem;
        height:8.00rem;
        // background-color: green;
        padding:.10rem;
        box-sizing: border-box;
        border-radius: 50%;
        position: relative;
        // scroll:;
        // margin: 0 auto;
        #circle-text {
            width: 4.6rem;
            height: 3.00rem;
            // background-color: pink;
            
            position: absolute;
            // background-color: pink;
            left:1.75rem;
            top: 2.7rem;
            z-index: 999;
            display: flex;
            justify-content: space-between;
            #circle-tu-wen {
              margin-top: -3px;
              display: flex;
              align-items: center;
              flex-direction: column;
              // margin-right: 20px;
              img {
              width: 1.2rem;
              height: 1.2rem;
              border-radius: 50%;
              padding-top: -3px;
              // margin: auto;
              margin: 0px 0 15px 0;
              box-shadow: 0 0 .08rem #f0effc;
              margin-bottom: 20px;
          }
          h3 {
            width:70px;
            height:28px;
            // border-radius: 50%;
            line-height: 28px;
            text-align: center;
            box-shadow: 0 0 .01rem rgba(0, 0, 0, 0.349019607843137);
          }
            }
          h4 {
            margin-bottom: 4px;
            font-size: 18px;
          }
            #member-text-middle {
              width: 3.0rem;
              // background-color: pink;
              height: 2.60rem;
              font-size: 20px;
              // margin-top: .10rem;
            }
        }
  ul,li {
    margin: 0;
    padding: 0;
  }
  ul {
    width:8rem;
    height: 8rem;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    transform-origin: 4rem 4rem;
    box-shadow: 0 0 .28rem #f0effcfe;
    animation: tf 34s linear infinite;
    li {
      width: 1.6rem;
      height: 1.6rem;
      z-index: 999;
      position: absolute;
      border-radius: 50%;
      box-shadow: 0 0 .08rem rgba(0, 0, 0, 0.349019607843137);
      line-height: 1.00rem;
      text-align: center;
      left: 50%;
      margin-left: -0.50rem;
      margin-top:-0.50rem;
      //旋转点自身高度的一半，父亲宽度的一半+自身宽度的一半
      transform-origin: .8rem 4.5rem;
      // animation: tf reverse 34s linear infinite;
      button {
        width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      border: 0px;
      //反向旋转
      animation: tf reverse 34s linear infinite;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        // transform-origin: .50rem 3.90rem;
      }
      &:nth-of-type(1) {
        transform: rotate(45deg);
        img {
          transform: rotate(-45deg);
        }
      }
      &:nth-of-type(2) {
        transform: rotate(90deg);
        img {
          transform: rotate(-90deg);
        }
      }
      &:nth-of-type(3){
        transform: rotate(135deg);
        img {
          transform: rotate(-135deg);
        }
      }
      &:nth-of-type(4){
        transform: rotate(180deg);
        img {
          transform: rotate(-180deg);
        }
      }
      &:nth-of-type(5){
        transform: rotate(225deg);
        img {
          transform: rotate(-225deg);
        }
      }
        &:nth-of-type(6){
          transform: rotate(270deg);
          img {
            transform: rotate(-270deg);
          }
        }   
        &:nth-of-type(7){
          transform: rotate(315deg);
          img {
            transform: rotate(-315deg);
          }
        }   
        &:nth-of-type(8){
          transform: rotate(360deg);
          img {
            transform: rotate(-360deg);
          }
        }   
    }
  }
  @keyframes tf {
  0%{
    transform:rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
      }
   
  </style>
<template>

  <div class="outer">
    <a name="goTop"></a>
    <NavView/>

    <level/>
    
    <div style="position: relative;font-size:26px;font-weight:600;">
      歌颂航空
    </div>
    <div class="pic">
      <div class="surface">
        <img src="@/assets/public/flight1.jpg" alt="">
      </div>
      <div class="surface">
        <img src="@/assets/public/flight2.jpg" alt="">
      </div>
      <div class="surface">
        <img src="@/assets/public/flight3.jpg" alt="">
      </div>

    </div>
    

    <div style="position: relative;font-size:26px;font-weight:600;">航空小故事</div>
    <div class="container">
        <div class="card">
            <div class="img">
                <a href="https://www.jcgov.gov.cn/mljc/lswh/whys/whhd/">
                    <img src="@/assets/index/火箭按.jpg" width="257" height="182">
                </a>
            </div>
            <div class="content">
                <h2>
                  力箭一号
                </h2>
                <p>&emsp;&emsp;
                  　　“力箭一号”运载火箭由中国科学院“十四五”重大项目支持，是中国科学院在空天科技领域的又一次创新性尝试。面向空间科学和空间技术发展需求，以“工程科学”思想为指导，以创新、先进、高效为设计思路，发展创新性、先进性、经济性运载火箭，对于推动我国运载技术和研制模式的变革和创新、推动空间科学发展具有重要意义。
                </p>
            </div>
        </div>
        <div class="card">
            <div class="img">
                <a href="https://www.jcgov.gov.cn/mljc/lswh/fwzwhyc/">
                    <img src="@/assets/index/探测月球车.jpg" width="257" height="182">
                </a>
            </div>
            <div class="content">
                <h2>
                    月球探测器
                </h2>
                <p>&emsp;&emsp;
                  中国探月工程（China Lunar Exploration Project，CLEP），是嫦娥工程的一部分，是中国国家航天局启动的第一个探月工程，于2003年3月1日正式启动。首先是发射绕月卫星，继而是发射无人探测装置，实现月面软着陆探测，最后为运输机器人上月球建立观测点，并且采取样本返回地球；整个计划将会历时20年，并为载人登月的长期目标作出准备。
                </p>
            </div>
        </div>


    </div>
    <div style="position: relative;font-size:26px;font-weight:600;">
      歌颂航空
    </div>
<div class="pic">
  

  <div class="surface">
        <img src="@/assets/public/flight4.jpg" alt="">
      </div>
      <div class="surface">
        <img src="@/assets/public/flight5.jpg" alt="">
      </div>
      <div class="surface">
        <img src="@/assets/public/flight6.jpg" alt="">
      </div>
</div>

<a href="javascript:window.scrollTo(0,0)" style="position:fixed;top:85vh;right:3vw;">
  <img src="@/assets/public/火箭.png" alt="" style="width:80px;height:80px;">
</a>
</div>
</template>

<script>
import BottomView from '../../components/BottomView.vue'
import NavView from '../../components/NavView.vue'
import level from '../../components/index/level.vue'
import dbclick from '../../components/index/dbclick.vue'
import {ref} from "vue"
export default {
    name: 'IndexView',
    components: {
        NavView,
      BottomView,
      level,
      dbclick
  },
  setup() {
    let msg = ref({
      first: {
        id: 0,
        url: "@/assets/public/flight.png"
      },
      second: {
        id: 1,
        url: "@/assets/public/flight.png"
      }
    })
    return {
      msg
    }
  }
}
</script>

<style lang="less" scoped>
.outer {
  // margin: auto;
  width: 97vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .pic {
    width: 80vw;
      height: 75vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    .surface {
      width: 20vw;
      height: 65vh;
      margin:0 2vw;
      border-radius: 30px;
       overflow: hidden;
       img {
        width: 20vw;
        height: 65vh;
       }
      img:hover {
        transition: 1s;
      transform: scale(1.1);
    }
    }
  }
}

.container {
    width: 1200px;
    margin-right: 10vw;
    display: flex;
    align-items: center;
    padding: 30px;
    border-radius: 10px;
    margin-left: 175px;
}

.card {
    position: relative;
    width: 500px;
    height: 330px;
    background: #b19067;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.8);
    transition: 0.3s all;
    overflow: hidden;
    margin: 50px;
    border: 3px #FFFFFF solid;

}

.card:hover {
    box-shadow: 4px 4px 10px rgba(255, 255, 255, 0.5);
}

.img {
    position: absolute;
    width: 100%;
    height: 300px;
    overflow: hidden;
    top: 0;
    left: 0;
}

.img img {
    width: 100%;
    height: 100%;
    height: 340px;
    transition: all 0.5s;
}

.card:hover .img img {
    transform: scale(1.2);
    filter: blur(1px);
}

.container .card .content {
    position: absolute;
    bottom: -200px;
    width: 100%;
    transition: 0.5s;
    background: #b19067;
    height: 200px;
    left: 0px;
}

.card:hover .content {
    bottom: 0px;
}

.content h2 {
    color: #FFF;
    text-align: center;
    line-height: 45px;
}

.content p {
    padding: 0 30px;
    font-family: "宋体";
    font-size: 14px;
    color: #FFF;
    margin: 10px;
    font-weight: 700;
}


</style>
<template>
  <div class="out">
    <div class="slider-container">
      <div class="left-slide">
        <div style="background-image: url('http://rtrz9uulj.hn-bkt.clouddn.com/jouryney/1682585188778.jpg');background-repeat: no-repeat;background-size: cover;">
        <!-- <div style="background-image: url('http://rtrz9uulj.hn-bkt.clouddn.com/jouryney/1682585122211.jpg');background-repeat: no-repeat;background-size: cover;"> -->
          <h1>神舟五号</h1>
          <p>2003年10月15日、我国第一艘载人飞船神舟五号成功发射.神舟五号飞船搭载航天员杨利伟于北京时间2003年10月15日9时整在酒泉卫星发射中心发射升空，在轨飞行14圈，历时21小时23分，顺利完成各项预定操作任务后，其返回舱于北京时间2003年10月16日6时23分返回内蒙古主着陆场，其轨道舱留轨运行半年</p>
        </div>
        <div style="background-image: url('http://rtrz9uulj.hn-bkt.clouddn.com/jouryney/1682585122211.jpg');background-repeat: no-repeat;background-size: cover;">
          <h1>长征一号</h1>
          <p>长征一号（代号：CZ-1/LM-1 [4] [22] ）是20世纪70年代初期中国研制的一型三级运载火箭，为发射中国第一颗人造地球卫星而立项研制 [3] 。</p>
        </div>
        <div style="background-image: url('http://rtrz9uulj.hn-bkt.clouddn.com/jouryney/1682585165203.jpg');background-repeat: no-repeat;background-size: cover;">
          <h1>墨子号</h1>
          <p>2016年8月16日1时40分，卫星于酒泉卫星发射中心搭载长征二号丁运载火箭发射升空，成为全球第一颗设计用于进行量子科学实验的卫星，被授予2018年度克利夫兰奖[1]。</p>
        </div>
        <div style="background-image: url('http://rtrz9uulj.hn-bkt.clouddn.com/jouryney/1682585249482.jpg');background-repeat: no-repeat;background-size: cover;">
          <h1>嫦娥五号</h1>
          <p>2020年11月24日，长征五号遥五运载火箭搭载嫦娥五号探测器成功发射升空并将其送入预定轨道 [4] 。嫦娥五号（Chang'e 5），由国家航天局组织实施研制，是中国首个实施无人月面取样返回的月球探测器，为中国探月工程的收官之战。 [1-3]</p>
        </div>
      </div>
      <div class="right-slide">
        <div style="background-image: url('http://rtrz9uulj.hn-bkt.clouddn.com/jouryney/%E5%AB%A6%E5%A8%A5%E4%BA%94%E5%8F%B7.jpg')"></div>
        <div style="background-image: url('http://rtrz9uulj.hn-bkt.clouddn.com/jouryney/%E5%A2%A8%E5%AD%90%E5%8F%B7.jpg')"></div>
        <div style="background-image: url('http://rtrz9uulj.hn-bkt.clouddn.com/jouryney/%E7%81%AB%E7%AE%AD%E5%8F%91%E5%B0%84.jpg')"></div>
        <div style="background-image: url('http://rtrz9uulj.hn-bkt.clouddn.com/jouryney/%E7%99%BB%E6%9C%88.jpg')"></div>
      </div>
      <div class="action-buttons">
        <button class="down-button">
          <i class="fas fa-arrow-down"><img src="@/assets/journey/下箭头-填充.png" alt=""></i>
        </button>
        <button class="up-button">
          <i class="fas fa-arrow-up"><img src="@/assets/journey/上箭头-填充.png" alt=""></i>
        </button>
      </div>
    </div>
  </div>
</template>



<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const sliderContainer = ref(null);
    const slideRight = ref(null);
    const slideLeft = ref(null);
    const upButton = ref(null);
    const downButton = ref(null);
    const slidesLength = ref(0);
    const activeSlideIndex = ref(0);

    const changeSlide = (direction) => {
      const sliderHeight = sliderContainer.value.clientHeight;
      if (direction === 'up') {
        activeSlideIndex.value++;
        if (activeSlideIndex.value > slidesLength.value - 1) {
          activeSlideIndex.value = 0;
        }
      } else if (direction === 'down') {
        activeSlideIndex.value--;
        if (activeSlideIndex.value < 0) {
          activeSlideIndex.value = slidesLength.value - 1;
        }
      }

      slideRight.value.style.transform = `translateY(-${activeSlideIndex.value * sliderHeight}px)`;
      slideLeft.value.style.transform = `translateY(${activeSlideIndex.value * sliderHeight}px)`;
    };

    onMounted(() => {
      sliderContainer.value = document.querySelector('.slider-container');
      slideRight.value = document.querySelector('.right-slide');
      slideLeft.value = document.querySelector('.left-slide');
      upButton.value = document.querySelector('.up-button');
      downButton.value = document.querySelector('.down-button');
      slidesLength.value = slideRight.value.querySelectorAll('div').length;

      slideLeft.value.style.top = `-${(slidesLength.value - 1) * 100}vh`;

      upButton.value.addEventListener('click', () => changeSlide('up'));
      downButton.value.addEventListener('click', () => changeSlide('down'));
    });

    return {
      sliderContainer,
      slideRight,
      slideLeft,
      upButton,
      downButton,
    };
  },
};
</script>


<style lang="less" scoped>
// @import url('https://fonts.googleapis.com/css?family=Open+Sans');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.out {
  font-family: 'Open Sans', sans-serif;
  width: 98vw;
  height:90vh;
}

.slider-container {
  position: relative;
  overflow: hidden;
  width: 98vw;
  height:100vh;
}

.left-slide {
  height: 100%;
  width: 35%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s ease-in-out;
}

.left-slide > div {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.left-slide h1 {
  font-size: 40px;
  margin-bottom: 10px;
  margin-top: -30px;
}

.right-slide {
  height: 100%;
  position: absolute;
  top: 0;
  left: 35%;
  width: 65%;
  transition: transform 0.5s ease-in-out;
}

.right-slide > div {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
}

button {
  background-color: #fff;
  border: none;
  color: #aaa;
  cursor: pointer;
  font-size: 16px;
  padding: 15px;
}

button:hover {
  color: #222;
}

button:focus {
  outline: none;
}

.slider-container .action-buttons button {
  position: absolute;
  left: 35%;
  top: 50%;
  z-index: 100;
}

.slider-container .action-buttons .down-button {
  transform: translateX(-100%);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.slider-container .action-buttons .up-button {
  transform: translateY(-100%);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

p {
  width: 25vw;
  // position: absolute;
  // top: 20vh;
}
.fas {
  display: inline-block;
  background-color: #fff;
  width: 30px!important;
  height: 30px!important;
  // overflow: hidden;
  img {
    width: 30px;
    height:30px;
  }
}

</style>
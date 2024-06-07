<template>
<div class="out">
    <div class="wrapper">
           <!-- left -->
        <div class="container" id="c2">
            <!-- 上半部图片 -->
            <div class="image" id="i2">
                <img style="width:94%;height: 100%;" src="../../assets/index/fire.png" alt="">
            </div>
            <div class="story" id="s2">
                <div class="info">
                    <!-- 标题 -->
                <h3>神州十三号</h3>
                <!-- 内容 -->
                <p style="position:relative;left:30px;padding-left:4px;width:16vw">大鹏一日同风起,扶摇直上九万里。假令风歇时下来,犹能簸却沧溟水。世人见我恒殊调,闻余大言皆冷笑。宣父犹能畏后生,丈夫未可轻年少。唐代·李白《上李邕》</p>
             </div>
            </div>
        </div>

        <div class="container" id="c0">
            <div class="image" id="i2">
                <img style="width:94%;height: 100%;" src="../../assets/index/sallite.png" alt="">
            </div>
            <div class="story" id="s0">
                <div class="info info2">
                    <h3 style="position:relative;left: -22px;">天问一号</h3>
                        <p style="position:relative;left:-30px;">日月安属?列星安陈?<br/>——先秦·屈原《天问》<br/><br/>宇宙浩然气,久已铭心脾。<br/>清代·陈裴之《夏内史诗》</p>
                </div>
            </div>
        </div>
    
        <div class="container" id="c1">
            <div class="image" id="i2">
                <img style="width:94%;height: 100%;" src="../../assets/index/example.png" alt="">
            </div>
            <div class="story" id="s1">
                <div class="info info3" style="position: relative;left: -1px;">
                <h3>北方卫星</h3>
                <p>揽慧星以为於兮,举斗柄以为麾。<br/>先秦·屈原《远游》<br/><br/>天高地迥,觉宇宙之无穷;<br/>兴尽悲来,识盈虚之有数。<br/>唐代·王勃《滕王阁序》</p>
                </div>
            </div>
        </div>
    <!-- 底部 -->
    <div class="page">
        <h4>中国航天</h4>
            <ul>
                <li> &lt;&lt;&lt;</li>
                <li>&gt;&gt;&gt; </li>
            </ul>
    </div>

    </div>
  </div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  
  export default {
    setup() {
      window.console = window.console || function(t) {};
      if (document.location.search.match(/type=embed/gi)) {
        window.parent.postMessage("resize", "*");
      }
  
      onMounted(() => {
      });
    },
  };
  
  </script>
  
  <style lang="less" scoped>
  /* body {
    font-family: 'Raleway', sans-serif;
    background:#eee;
  } */
  
  .out {
    width: 90vw;
    margin: 0 auto;
    margin-bottom: 100px;
  }
  .wrapper {
    position: relative;
    top: 20%;
    left: 40%;
    width: 300px;
    height: 500px;
    perspective: 900px;
  }
  
  .container {
    position: absolute;
    top: 5%;
    width: 100%;
    height: 100%;
    transition: .5s all ease;
    transform: rotateX(60deg) scale(0.7);
    perspective: 900px;
    box-shadow: 0px 20px 50px #555;
    animation: entry 1s linear 1;
  }
  
  #c0 {
    position: absolute;
    top: 5%;
    width: 100%;
    height: 100%;
    background:#d4cdb8;
    z-index: 300;
    box-shadow: 0px 20px 100px #555;
  }
  
  #c1 {
    background: #d8cfc0;
    box-shadow: 0px 20px 100px #555;
    left: 100%;
    z-index: 0;
  }
  
  #c2 {
    left: -100%;
    z-index: 0;
    background:#d8cfc0;
    box-shadow: 0px 20px 100px #555;
  }
  
  .container:hover {
    cursor: pointer;
    transform: rotate(0deg) scale(1) translateY(10px);
    transition: .5s all ease;
    z-index: 400;
  }
  
  .image {
    position: absolute;
    top: 2%;
    left: 6%;
    width: 94%;
    height: 65%;
    background: #d8cfc0;
  }
  
  
  span {
    position: absolute;
    top: 0%;
    left: 55%;
    border-radius: 100%;
    background-color: #fff;
    z-index: 10;
  }
  
  .story {
    position: absolute;
    top: 65%;
    // left: 3%;
    height:33%;
    width: 97%;
    background: #d8cfc0;
    z-index: 30;
  }
  
  .info {
    position: absolute;
    top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* text-align: center; */
  }
  .info2 {
    left: 15%;
    p {
        width: 222px;
    }
  }
  .info3 {
    left: 9%;
    p {
        width: 260px;
    }
  }
  h3 {
    text-align: center;
    text-shadow: 0px 0px 10px #eee;
    color: #eee;
    letter-spacing: 2px;
  }
  
  h4 {
    color: #111;
    position: absolute;
    font-size: 16px;
    top: 50%;
    left: 40%;
    letter-spacing: 2px;
  }
  
  h1 {
    color: #111;
    position: fixed;
    top: 0%;
    left: 30%;
    letter-spacing: 2px;
  }
  
  p {
    margin: 0 auto;
    font-size: 14px;
    color: #fff;
    width: 94%;
    padding: 0px 20px 20px 20px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 1px;
  }
  
  .page {
    position: absolute;
    top: 80%;
    width: 100%;
    left: -5%;
    height: 20%;
    z-index: 30;
  }
  
  li {
    position: absolute;
    top: 50%;
    list-style: none;
    color: #111;
  }
  
  li:nth-child(1) {
    left: 18%;
    animation: simple1 1s linear infinite;
  }
  
  li:nth-child(2) {
    right: 18%;
    animation: simple 1s linear infinite;
  }
  
  @keyframes simple {
    50% {
      transform: translateX(10px);
      opacity: 0.5;
    }
    100% {
      transform: translateX(10px);
      opacity: 0;
    }
  }
  
  @keyframes simple1 {
    50% {
      transform: translateX(-10px);
      opacity: 0.5;
    }
    100% {
      transform: translateX(-10px);
      opacity: 0;
    }
  }
  
  @keyframes entry {
    0% {
      top: -20%;
      opacity: 0.1;
    }
    100% {
      top: 0%;
    }
  }
  </style>
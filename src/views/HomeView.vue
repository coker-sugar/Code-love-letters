<template>
  <div class="home">
    <h1>中国的航天故事</h1>
    <div class="container">

      <div class="panel active" style="background-image: url('http://rtrz9uulj.hn-bkt.clouddn.com/codelove/flightfour.jpg')">
        <h3>Rocket Launch</h3>
      </div>
      <div class="panel" style="background-image: url('http://rtrz9uulj.hn-bkt.clouddn.com/codelove/flightfive.jpg')">
        <h3>Satellite Launch</h3>
      </div>
      <div class="panel" style="background-image: url('http://rtrz9uulj.hn-bkt.clouddn.com/codelove/flightfitth.jpg')">
        <h3>Astronaut Greeting</h3>
      </div>
      <div class="panel" style="background-image: url('http://rtrz9uulj.hn-bkt.clouddn.com/codelove/moon.png')">
        <h3>Lunar Surface</h3>
      </div>

      <div class="panel" style="background-image: url('http://rtrz9uulj.hn-bkt.clouddn.com/codelove/earth.jpg')">
        <h3>Earth</h3>
      </div>
      <div class="panel" style="background-image: url('http://rtrz9uulj.hn-bkt.clouddn.com/codelove/Galaxy.jpg')">
        <h3>Galaxy</h3>
      </div>

    </div>
    <click/>
    <!-- <router-link to="/index">
      dianji  
    </router-link> -->
  </div>
</template>

<script>
import click from "@/components/click.vue"
import { ref, onMounted } from 'vue'

export default {
  components: {
    click
  },
  setup() {
    const panels = ref(null)

    function removeActiveClasses() {
      panels.value.forEach(panel => {
        panel.classList.remove('active')
      })
    }

    onMounted(() => {
      panels.value = document.querySelectorAll('.panel')

      panels.value.forEach(panel => {
        panel.addEventListener('click', () => {
          removeActiveClasses()
          panel.classList.add('active')
        })
      })
    })

    return {
      panels
    }
  }
}

</script>

<style lang="less" scoped>

/* 设置标题样式 */
h1 {
  font-size: .6rem;
  color: #fff;
  text-align: center;
  margin-top: 20px;
  letter-spacing: 10px;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0af, 0 0 70px #0af, 0 0 80px #0af, 0 0 100px #0af, 0 0 150px #0af;
  animation: glowing 2s infinite;
}

/* 添加动画效果 */
@keyframes glowing {
  0% {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0af, 0 0 70px #0af, 0 0 80px #0af, 0 0 100px #0af, 0 0 150px #0af;
  }
  50% {
    text-shadow: 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0af, 0 0 70px #0af, 0 0 80px #0af, 0 0 100px #0af, 0 0 150px #0af, 0 0 200px #0af;
  }
  100% {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0af, 0 0 70px #0af, 0 0 80px #0af, 0 0 100px #0af, 0 0 150px #0af;
  }
}
// @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

* {
  box-sizing: border-box;
}

body {
  font-family: 'Muli', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  // height: 100vh;
  overflow: hidden;
  margin: 0;
}

.container {
  display: flex;
  width: 90vw;
  height: 100vh;
  margin: 0 auto;
}

.panel {
  background-size: cover;
  // background-size: 9rem 16rem;
  background-repeat: no-repeat;
  height: 75vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;
  -webkit-transition: all 700ms ease-in;
}

.panel h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
}

.panel.active {
  flex: 6;
}

.panel.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}

@media (max-width: 480px) {
  .container {
    width: 100vw;
  }

  .panel:nth-of-type(6),
  .panel:nth-of-type(5) {
    display: none;
  }
}

</style>

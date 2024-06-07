<template>
<div class="out">
    <div class="counter">
      <div class="nums">
        <span class="in">3</span>
        <span>2</span>
        <span>1</span>
        <span>0</span>
      </div>
      <h4>Get Ready</h4>
    </div>

    <div class="final">
      <h1>GO</h1>
      <router-link to="/index">
        <button id="replay">
            <span>Start</span>
        </button>
    </router-link>
    </div>
</div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const nums = ref([])
    const counter = ref(null)
    const finalMessage = ref(null)
    const replay = ref(null)

    const runAnimation = () => {
      nums.value.forEach((num, idx) => {
        const nextToLast = nums.value.length - 1

        num.addEventListener('animationend', (e) => {
          if (e.animationName === 'goIn' && idx !== nextToLast) {
            num.classList.remove('in')
            num.classList.add('out')
          } else if (e.animationName === 'goOut' && num.nextElementSibling) {
            num.nextElementSibling.classList.add('in')
          } else {
            counter.value.classList.add('hide')
            finalMessage.value.classList.add('show')
          }
        })
      })
    }

    const resetDOM = () => {
      counter.value.classList.remove('hide')
      finalMessage.value.classList.remove('show')

      nums.value.forEach((num) => {
        num.classList.value = ''
      })

      nums.value[0].classList.add('in')
    }

    onMounted(() => {
      nums.value = document.querySelectorAll('.nums span')
      counter.value = document.querySelector('.counter')
      finalMessage.value = document.querySelector('.final')
      replay.value = document.querySelector('#replay')

      runAnimation()

      replay.value.addEventListener('click', () => {
        resetDOM()
        runAnimation()
      })
    })
  }
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'); */

* {
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  height: 100vh;
  overflow: hidden;
}

h4 {
  font-size: 20px;
  margin: 5px;
  text-transform: uppercase;
}

.counter {
  position: fixed;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.counter.hide {
  transform: translate(-50%, -50%) scale(0);
  animation: hide 0.2s ease-out;
}

@keyframes hide {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }

  100% {
    transform: translate(-50%, -50%) scale(0);
  }
}

.final {
  position: fixed;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  text-align: center;
}

.final.show {
  transform: translate(-50%, -50%) scale(1);
  animation: show 0.2s ease-out;
}

@keyframes show {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }

  30% {
    transform: translate(-50%, -50%) scale(1.4);
  }

  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

.nums {
  color: #3498db;
  font-size: 50px;
  position: relative;
  overflow: hidden;
  width: 250px;
  height: 50px;
}

.nums span {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(120deg);
  transform-origin: bottom center;
}

.nums span.in {
  transform: translate(-50%, -50%) rotate(0deg);
  animation: goIn 0.5s ease-in-out;
}

.nums span.out {
  animation: goOut 0.5s ease-in-out;
}

@keyframes goIn {
  0% {
    transform: translate(-50%, -50%) rotate(120deg);
  }

  30% {
    transform: translate(-50%, -50%) rotate(-20deg);
  }

  60% {
    transform: translate(-50%, -50%) rotate(10deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}

@keyframes goOut {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  60% {
    transform: translate(-50%, -50%) rotate(20deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(-120deg);
  }
}

#replay{
  background-color: #3498db;
  border-radius: 25px;
  width: 80px;
  height: 30px;
  border: none;
  color: aliceblue;
  padding: 5px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s;
}

#replay span{
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.3s;
}

#replay span:after{
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

#replay:hover span{
  padding-right: 25px;
}

#replay:hover span:after{
  opacity: 1;
  right: 0;
}


</style>
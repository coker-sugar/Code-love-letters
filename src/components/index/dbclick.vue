<template>
  <h3>Double click on the image to <i class="fas fa-heart"></i> it</h3>
    <small>You liked it <span id="times">0</span> times</small>

    <div class="loveMe"></div>
</template>

<script>
// import {ref} from "vue"
export default {
  data() {
    return {
      clickTime: 0,
      timesClicked: 0
    };
  },
  mounted() {
    const loveMe = document.querySelector(".loveMe");
    const times = document.querySelector("#times");

    loveMe.addEventListener("click", (e) => {
      if (this.clickTime === 0) {
        this.clickTime = new Date().getTime();
      } else {
        if (new Date().getTime() - this.clickTime < 800) {
          this.createHeart(e);
          this.clickTime = 0;
        } else {
          this.clickTime = new Date().getTime();
        }
      }
    });

    this.createHeart = (e) => {
      const heart = document.createElement("i");
      heart.classList.add("fas");
      heart.classList.add("fa-heart");

      const x = e.clientX;
      const y = e.clientY;

      const leftOffset = e.target.offsetLeft;
      const topOffset = e.target.offsetTop;

      const xInside = x - leftOffset;
      const yInside = y - topOffset;

      heart.style.top = `${yInside}px`;
      heart.style.left = `${xInside}px`;

      loveMe.appendChild(heart);

      times.innerHTML = ++this.timesClicked;

      setTimeout(() => heart.remove(), 1000);
    };
  }
};
</script>

<style lang="less" scoped>

* {
  box-sizing: border-box;
}

body {
  font-family: 'Oswald', sans-serif;
  text-align: center;
  overflow: hidden;
  margin: 0;
}

h3 {
  margin-bottom: 0;
  text-align: center;
}

small {
  display: block;
  margin-bottom: 20px;
  text-align: center;
}

.fa-heart {
  color: red;
}

.loveMe {
  height: 440px;
  width: 300px;
  background: url('https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')
    no-repeat center center/cover;
  margin: auto;
  cursor: pointer;
  max-width: 100%;
  position: relative;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  overflow: hidden;
}

.loveMe .fa-heart {
  position: absolute;
  animation: grow 0.6s linear;
  transform: translate(-50%, -50%) scale(0);
}

@keyframes grow {
  to {
    transform: translate(-50%, -50%) scale(10);
    opacity: 0;
  }
}

</style>
<template>
<div class="out">
    <div class="card">
    <div class="card-header animated-bg" id="header">&nbsp;<img src="@/assets/giant/钱学森.jpg" alt=""></div>

    <div class="card-content">
      <h3 class="card-title animated-bg animated-bg-text" id="title">
        &nbsp;{{ title }}
      </h3>
      <p class="card-excerpt" id="excerpt">
        &nbsp;{{ excerpt }}
        <!-- <span class="animated-bg animated-bg-text">&nbsp;</span>
        <span class="animated-bg animated-bg-text">&nbsp;</span>
        <span class="animated-bg animated-bg-text">&nbsp;</span> -->
      </p>
      <div class="author">
        <div class="" id="profile_img">&nbsp;<img src="@/assets/giant/R-C.jpg" style="width: 30px;30px;border-radius:50%;;" alt=""></div>
        <div class="author-info">
          <!-- <strong class="animated-bg animated-bg-text" id="name">&nbsp;{{  name}}</strong> -->
          <small style="width:280px;height:30px;overflow:hidden">&nbsp;{{ date }}</small>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';

export default {
  setup() {
    const header = ref('');
    const title = ref('');
    const excerpt = ref('');
    const profile_img = ref('');
    const name = ref('');
    const date = ref('');

    onMounted(() => {
      setTimeout(() => {
        header.value = '';
        title.value = '钱学森';
        excerpt.value = '钱学森对中国做的贡献:一是他构建了新中国整个军事工业的工程管理体系；二是推动我国两弹一星的发射；三是钱学森作为我国著名科学家，他光荣的事迹激励了一代又一代的青少年向他学习。';
        // profile_img.value = '钱学森对中国做的贡献:一是他构建了新中国整个军事工业的工程管理体系；二是推动我国两弹一星的发射；三是钱学森作为我国著名科学家，他光荣的事迹激励了一代又一代的青少年向他学习。';
        // name.value = '国之利器，热爱祖国；无私奉献，富有个性';
        date.value = '热爱祖国,国之利器';
      }, 1000);
    });

    return {
      header,
      title,
      excerpt,
      profile_img,
      name,
      date,
    };
  },
};
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}

.out {
    // margin-top: 100px;
    // width: 98vw;
  // background-color: #ecf0f1;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  // height: 100vh;
  overflow: hidden;
  margin: 0;
}

img {
  max-width: 100%;
}

.card {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  width: 350px;
}

.card-header {
  height: 200px;
}

.card-header img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.card-content {
  background-color: #fff;
  padding: 30px;
}

.card-title {
  height: 20px;
  margin: 0;
}

.card-excerpt {
  color: #777;
  margin: 10px 0 20px;
}

.author {
  display: flex;
}

.profile-img {
  border-radius: 50%;
  overflow: hidden;
  height: 40px;
  width: 40px;
}

.author-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
  width: 100px;
}

.author-info small {
  color: #aaa;
  margin-top: 5px;
}

.animated-bg {
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 10%,
    #f6f7f8 20%,
    #f6f7f8 100%
  );
  background-size: 200% 100%;
  animation: bgPos 1s linear infinite;
}

.animated-bg-text {
  border-radius: 50px;
  display: inline-block;
  margin: 0;
  height: 10px;
  width: 100%;
}

@keyframes bgPos {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0;
  }
}

</style>
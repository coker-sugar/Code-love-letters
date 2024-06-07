<template>
    <div class="outer">
      <nav-view/>
      <member/>
    </div>
  </template>
  
  <script>
  import BottomView from '../../components/BottomView.vue'
  import NavView from '../../components/NavView.vue'
  import member from '../../components/giant/member.vue'
  export default {
      name: 'GiantView',
      components: {
          NavView,
          BottomView,
          member
      }
  }
  </script>
  
  <style lang="less" scoped>
  .outer {
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
  </style>
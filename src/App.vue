<template>
  <div id="main">
		<router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: ''
  }
</script>

<style>
  html,
  body,
  #main {
    width: 100%;
    height: 100%;
  }

  html,
  body {
    background: #f0f0f0;
    overflow: hidden;
  }

  .ivu-layout-footer {
    padding: 10px 0;
  }
</style>

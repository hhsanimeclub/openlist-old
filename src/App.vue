<template>
  <div id="app">
    <div class="progress" style="width: 100%;"></div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  margin-top: 75px;
  overflow: hidden;
}

.progress {
  background-color: #29a6ff;
  border-radius: 0 10px 10px 0;
  height: 4px;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: width 0.3s ease, opacity 0.2s;
  width: 0;
  z-index: 99999;
}
</style>

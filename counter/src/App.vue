<template>
  <div id="app">
    <CountDown v-slot="timeObj" :time="12000">
      {{timeObj.d}}天{{timeObj.hh}}小时{{timeObj.mm}}分钟{{timeObj.ss}}秒
    </CountDown>
  </div>
</template>

<script>
import CountDown from './components/CountDown.vue';
export default {
  name: "App",
  components: {CountDown}
};
</script>

<style>
html,
body {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
}
</style>

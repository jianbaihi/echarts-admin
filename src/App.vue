<script>
import TopComp from './components/TopComp/index.vue'
import SecondComp from './components/SecondComp/index.vue'
import ThirdComp from './components/ThirdComp/index.vue'
import MapComp from './components/MapComp/index.vue'
export default {
    components: {
        TopComp,
        SecondComp,
        ThirdComp,
        MapComp,
    }
}
</script>

<template>
  <div class="app">
    <TopComp></TopComp>
    <SecondComp></SecondComp>
    <ThirdComp></ThirdComp>
    <MapComp></MapComp>
  </div>
</template>

<style lang="scss" scoped>
.app{
  padding: 20px;
  background-color: #eee;
  box-sizing: border-box;
}
</style>

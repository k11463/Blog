<template>
  <div id="app">
    <app-header></app-header>
    <router-link to="/"></router-link>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './views/Header.vue';
import Footer from './views/Footer.vue';
export default {
  components: {
    appHeader: Header,
    appFooter:Footer
  }
}
</script>


<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
.pc-1{
  width: 9%;
}
.pc-2{
  width: 19.8%;
}
.pc-3{
  width: 29%;
}
.pc-4{
  width: 39%;
}
.pc-5{
  width: 49%;
}
.pc-6{
  width: 59.8%;
}
.pc-7{
  width: 69%;
}
.pc-8{
  width: 79%;
}
.pc-9{
  width: 89%;
}
</style>

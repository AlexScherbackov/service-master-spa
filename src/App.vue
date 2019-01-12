<template>
  <div id="app">
    <top-line class="bg-base""></top-line>
    <header-top></header-top>
  </div>
</template>

<script>
import topLine from './components/topLine.vue';
import headerTop from './components/headerTop.vue';

export default {
  name: 'app',
  components:{
    'top-line': topLine,
    headerTop
  },
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss">
@import './static-style/_vars.scss';
@import './static-style/_media.scss';
@import './static-style/_fonts.scss';
@import './static-style/_base.scss'; 
@import './static-style/_forms.scss';


@import './assets/fonts/@fortawesome/fontawesome-free/css/all.min.css';

</style>

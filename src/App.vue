<template>
  <div id="app">
    <main-header></main-header>
  </div>
</template>

<script>
  import mainHeader from './components/mainHeader.vue';

export default {
  name: 'app',
  components: {
    mainHeader
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

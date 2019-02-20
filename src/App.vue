<template>
  <div id="app">
    <main-header/>
    <router-view :width="responsive.width"/>
    <main-footer />
    <fixed-form />
  </div>
</template>

<script>
  import mainHeader from './components/sections/mainHeader.vue';
  import mainFooter from './components/sections/mainFooter.vue';
  import fixedContactForms from './components/uiComponents/fixedContactForms.vue';
 
  export default {
    name: 'app',
    components: {
      mainHeader,
      mainFooter,
     'fixed-form': fixedContactForms
    },
    data () {
      return {
        responsive: {
          width: null
        }
      }
    },
    methods:{
      handleResize(){
        this.responsive.width = this.$el.clientWidth;
      }
    },
    mounted(){
      this.responsive.width = this.$el.clientWidth;
      window.addEventListener('resize', this.handleResize);
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

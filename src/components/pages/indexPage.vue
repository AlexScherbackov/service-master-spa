<template>
	<main>
		<head-slider :width="width"/>
    <why-servicemaster /> 
    <paralax-section />
    <customerSection :width="width"/>
    <paralaxBackground />
    <service-tips :width="width" />
	</main>
</template>
<script>
  
  import headSliderSection from '../sections/headSliderSection.vue'
  import whyServicemaster from '../sections/whyServicemaster.vue';
  import paralaxSection from '../sections/paralaxSection.vue';
  import customerSection from '../sections/customerSection.vue';
  import paralaxBackground from '../sections/paralaxBakground.vue';
  import servicestipsSection from '../sections/servicestipsSection.vue';
  
  export default {
  	props:{
  		width: Number
  	},
    components: {
      'head-slider': headSliderSection,
      'why-servicemaster':whyServicemaster,
      paralaxSection,
      customerSection,
      paralaxBackground,
     'service-tips': servicestipsSection,
    },
    data () {
      return {
        
      }
    },
  }
</script>
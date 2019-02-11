<template>
	<slider 
	:animation="animation" 
	:autoplay="autoplay" 
	:height="height" 
	:width="width" 
	:class="classObject"
	>
	<slider-item
	v-for="(item, index) in slides"
	:key="index"
	>
	<slot name="slide" :item="item" />
</slider-item>
</slider>
</template>
<script>
	import { Slider, SliderItem } from 'vue-easy-slider';

	export default {
		components:{
			Slider,
			SliderItem
		},
		props:{
			animation: {
				type: String
			},
			autoplay: {
				type:	Boolean
			},
			height: {
				type: String,
				required: true
			},
			width: {
				type: String,
				required: true
			},
			classObject: {
				type: String
			},
			slides: {
				type: [Object, Array],
				required: true,
				validator: function (value) {
					let result;
       		if(typeof value == 'Array'){
       			result = Object.assign({}, value);
       		} else {
       			result = value;
       		}
        return result;
      }
    }
  },
  data(){
  	return {

  	}
  },

}
</script>
<style lang="scss">

</style>
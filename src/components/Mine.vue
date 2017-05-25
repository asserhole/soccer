<template>
	<div>
		<h1>我是我的页</h1>
		<mt-button size="small">mint按钮</mt-button>
		<mt-datetime-picker
		  v-model="pickerVisible"
		  ref="picker"
		  type="datetime">
		</mt-datetime-picker>
		
		<input type="text" v-model="pickerVisible">
		<input type="button" @click="openPicker" value="选择时间">
	</div>
</template>

<script>
	export default {
	  data () {
	    return {
	      pickerVisible: '',
	      active: 'tab-container1',
	      isswip: true
	    }
	  },
	  methods: {
	    openPicker() {
	      this.$refs.picker.open();
	    }
	  }
	}
</script>

<style>
	
</style>
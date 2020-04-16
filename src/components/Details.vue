<template>
	<div id="details">
		<Form @submited="log" v-bind:canEdit="false"></Form>
	</div>
</template>

<script>
import Form from "./Form";

export default {
	name: "Details",
	components: {
		Form
	},
	methods: {
		log(formObj){
			let output = JSON.stringify(formObj);
			console.log(output);
			this.message = output;
		},
	},
	computed: {
	},
	props: {
		id: Number,
	}
};
</script>

<style>
	
</style>

<template>
	<div id="create-form">
		<Form @submited="log" v-bind:canEdit="true" v-bind:retriviedPerson="person"></Form>
	</div>
</template>

<script>
import Form from "./Form";

export default {
	name: "CreateForm",
	components: {
		Form
	},
	data() {
		return {
			person: {
				name: "vini",
				age: 21
			}
		};
	},
	methods: {
		log(formObj){
			let output = JSON.stringify(formObj);
			console.log(`loggin from create ${output}`);
			this.message = output;
		},
	},
	computed: {
	},
};
</script>

<style>
	
</style>

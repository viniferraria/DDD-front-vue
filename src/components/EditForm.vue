<template>
	<div id="edit-form">
		<Form @submited="log" :retriviedPerson="person" v-bind:canEdit="true"></Form>
	</div>
</template>


<script>
import Form from "./Form";

export default {
	name: "EditForm",
	components: {
		Form
	},
	methods: {
		log(formObj){
			let output = JSON.stringify(formObj);
			console.log(`loggin from edit ${output}`);
			this.message = output;
		},
	},
	data() {
		return {
			person: {
				name: "vini",
				age: 21
			}
		};
	},
	computed: {
	},
	props: {
		id: Number,
	},
};
</script>

<style>
	
</style>

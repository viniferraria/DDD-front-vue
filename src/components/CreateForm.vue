<template>
	<div id="create-form">
		<Form @submited="createAnimal" v-bind:canEdit="true"></Form>
	</div>
</template>

<script>
import Form from "./shared/Form";
import { createUrl } from "../helpers/constants";

export default {
	name: "CreateForm",
	components: {
		Form
	},
	methods: {
		createAnimal(formZoo){
			fetch(createUrl, {
				method: "post",
				body: JSON.stringify(formZoo), 
				headers: new Headers({"Content-Type": "application/json"})
			})
				.then(res => res.json())
				.then(data => console.log(data));
		},
	},
	computed: {
	},
};
</script>

<style>
	
</style>

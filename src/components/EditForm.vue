<template>
	<div id="edit-form">
		<Form @submited="log" :retriviedAnimal="animal" v-bind:canEdit="true"></Form>
	</div>
</template>


<script>
import Form from "./shared/Form";
import Zoo from "../models/Zoo";
import { getByIdUrl } from "../helpers/constants";

export default {
	name: "EditForm",
	components: {
		Form
	},
	created() {
		this.fetchById(this.id);
	},
	data() {
		return {
			animal: new Zoo({}),
		};
	},
	methods: {
		log(formObj){
			let output = JSON.stringify(formObj);
			console.log(`log from edit ${output}`);
			this.message = output;
		},
		fetchById(id) {
			console.log(`inside function with id: ${id}`);
			fetch(getByIdUrl({ id }))
				.then(res => res.json())
				.then(data => {
					console.log(`edit form fetched: ${JSON.stringify(data)}`);
					this.animal = data;
					console.log(`edit form data: ${JSON.stringify(this.animal)}`);
				});
		}
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

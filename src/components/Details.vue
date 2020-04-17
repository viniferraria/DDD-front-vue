<template>
	<div id="details">
		<Form v-bind:canEdit="false" :retriviedAnimal="this.animal"></Form>
	</div>
</template>

<script>
import Form from "./shared/Form";
import Zoo from "../models/Zoo";
import { getByIdUrl } from "../helpers/constants";

export default {
	name: "Details",
	data() {
		return {
			animal: new Zoo({}),
		};
	},
	components: {
		Form
	},
	created() {
		console.log(this.id);
		this.fetchById(this.id);
	},
	methods: {
		fetchById(id) {
			fetch(getByIdUrl({ id }))
				.then(res => res.json())
				.then(data => {
					this.animal = data;
				})
				.catch(err => console.log(`An error occurred: ${err}`));
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

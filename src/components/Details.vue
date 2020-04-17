<template>
	<div id="details">
		<div v-if="isLoading" class="d-flex justify-content-center">
			<div class="spinner-border" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		</div>
		<div v-else id="details-form">
			<Form v-bind:canEdit="false" :retriviedAnimal="this.animal"></Form>
		</div>
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
			isLoading: false,
		};
	},
	created() {
		this.fetchById(this.id);
	},
	components: {
		Form
	},
	methods: {
		async fetchById(id) {
			try {
				this.isLoading = true;
				let res = await fetch(getByIdUrl({ id: id }));
				let data = await res.json();
				this.animal = data;
			} catch (err) {
				console.log(err);
			} finally {
				this.isLoading = false;
			}
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

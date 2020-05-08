<template>
	<div id="create">
		<div v-show="!isEmpty">
			<div v-for="(error, index) in errors" class="alert alert-danger alert-dismissible fade show" role="alert" :key="error">
				{{ error }}
				<button type="button" class="close" @click="popError(index)" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		</div>
		<div v-show="isComplete">
			<div class="alert alert-success alert-dismissible fade show">
				Created
				<button type="button" class="close" @click="removeMessage" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		</div>
		<div id="create-form">
			<Form @submited="createAnimal" v-bind:canEdit="true"></Form>
		</div>
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
	data() {
		return {
			errors: [],
			isComplete: false,
		};
	},
	methods: {
		async createAnimal(formZoo) {
			try {
				let res = await fetch(createUrl, {
					method: "post",
					body: JSON.stringify(formZoo), 
					headers: new Headers({"Content-Type": "application/json"})
				});
				console.log(await res.json());
				this.isComplete = true;
				// this.$router.router.back()
				// setTimeout(this.$router.replace("/"), 3);
			} catch (err) {
				this.errors.push(err);
			}
		},
		popError(index) {
			this.errors.splice(index, 1);
		},
		removeMessage() {
			this.isComplete = !this.isComplete;
		},
	},
	computed: {
		isEmpty() {
			return this.errors.length === 0;
		}
	},
};
</script>

<style>
	
</style>

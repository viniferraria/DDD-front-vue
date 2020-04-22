<template>
	<div id="create">
		<div v-show="!isEmpty">
			<div v-for="error in errors" class="alert alert-success" role="alert" :key="error">
				{{ error }}
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
				setTimeout(this.$router.replace("/"), 3);
			} catch (err) {
				this.errors.push(err);
			}
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

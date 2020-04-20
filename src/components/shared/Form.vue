<template>
	<div id="form">
		<p v-if="errors.length > 0">
		<b>Please correct the following error(s):</b>
		<ul>
			<li v-for="(error, index) in errors" v-bind:key="index">{{ error }}</li>
		</ul>
		</p>
		<form @submit.prevent="onSubmit">
			<fieldset>
				<div class="form-group">
					<label for="name">Name</label>
					<input :readonly="!canEdit" type="text" id="name" placeholder="Name" v-model="animal.name" autocomplete="false"/>
				</div>
				<div class="form-group">
					<label for="specie">Specie</label>
					<input :readonly="!canEdit" type="text" id="specie" placeholder="Specie" v-model="animal.specie" autocomplete="false"/>
				</div>
				<button v-if="canEdit" type="submit" :disabled="!isValidForm" :class="isValidForm ? 'btn btn-primary' : 'btn btn-primary disabled'">Submit</button>
			</fieldset>
		</form>
	</div>
</template>


<script>
import Zoo from "../../models/Zoo";

export default {
	name: "Form",
	data() {
		return {
			animal: null,
			errors: [
			],
		};
	},
	created() {
		this.animal = this.retriviedAnimal || new Zoo({});
	},
	methods: {
		onSubmit() {
			if(this.isValidForm) {
				this.$emit("submited", this.animal);
			} 
			/* else { */
			// 	if(!this.isValidName) this.errors.push("Name required");
			// 	if(!this.isValidSpecie) this.errors.push("Specie required");
			// }
		},
	},
	computed: {
		isValidName() {
			return this.animal.name.length >= 4;
		},
		isValidSpecie() {
			return this.animal.specie.length >= 4;
		},
		isValidForm() {
			return this.isValidName && this.isValidSpecie;
		},
	},
	props: {
		canEdit: {
			type: Boolean
		},
		retriviedAnimal: {
			type: Object
		},
	},
};
</script>

<style>
	
</style>
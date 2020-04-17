<template>
	<div id="form">
		<p v-if="errors.length">
		<b>Please correct the following error(s):</b>
		<ul>
			<li v-for="(error, index) in errors" v-bind:key="index">{{ error }}</li>
		</ul>
		</p>
		<form @submit.prevent="onSubmit">
			<fieldset>
				<div class="form-group">
					<label for="name">Name</label>
					<input :readonly="!canEdit" type="text" id="name" placeholder="Name" v-model="this.animal.name" required autocomplete="false"/>
				</div>
				<div class="form-group">
					<label for="specie">specie</label>
					<input :readonly="!canEdit" type="text" id="specie" placeholder="specie" v-model="this.animal.specie" required autocomplete="false"/>
				</div>
				<button v-if="canEdit" type="submit" :disabled="!isValidForm" class="btn btn-primary">Submit</button>
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
			animal: new Zoo({}),
			errors: [
			],
		};
	},
	created() {
		console.log(`form received ${JSON.stringify(this.retriviedAnimal)}`);
		this.animal = this.retriviedAnimal || new Zoo({name: "", specie: ""});
		console.log(`Form created with: ${this.props}, ${JSON.stringify(this.retriviedAnimal)}`);
	},
	methods: {
		onSubmit() {
			if(this.isValidForm) {
				this.$emit("submited", this.animal);
			} else {
				if(!this.isValidName) this.errors.push("Name must be bigger");
				if(!this.isValidSpecie) this.errors.push("specie required");
			}
		},
	},
	computed: {
		isValidForm() {
			return this.isValidName && this.isValidSpecie;
		},
		isValidName() {
			return this.animal.name.length > 4;
		},
		isValidSpecie() {
			return  this.animal.specie > 4;
		},
		name() {
			return this.animal.name || " ";
		},
		specie() {
			return this.retriviedAnimal.specie || " ";
		}
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
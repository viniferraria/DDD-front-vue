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
					<input :readonly="!canEdit" type="text" id="name" placeholder="Name" v-model="person.name" required autocomplete="false"/>
				</div>
				<div class="form-group">
					<label for="age">Age</label>
					<input :readonly="!canEdit" type="number" id="age" placeholder="Age" v-model="person.age" required autocomplete="false"/>
				</div>
				<button v-if="canEdit" type="submit" :disabled="!validForm" class="btn btn-primary">Submit</button>
			</fieldset>
		</form>
	</div>
</template>


<script>
export default {
	name: "Form",
	data() {
		return {
			person: {
				name: this.retriviedPerson && this.retriviedPerson.name || "",
				age: this.retriviedPerson && this.retriviedPerson.age || "",
			},
			errors: [
			],
		};
	},
	methods: {
		onSubmit() {
			if(this.validForm) {
				this.$emit("submited", this.person);
			} else {
				if(!this.person.name.legnth > 4) this.errors.push("Name must be bigger");
				if(!this.person.age) this.errors.push("Age required");
			}
		},
	},
	computed: {
		validForm() {
			return this.person.name.length > 4 && this.person.age;
		}
	},
	props: {
		canEdit: {
			type: Boolean
		},
		retriviedPerson: {
			type: Object
		},
	},
};
</script>

<style>
	
</style>
<template>
	<div id="form">
		<div v-if="isLoading" class="d-flex justify-content-center">
			<div class="spinner-border" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		</div>
		<div v-else-if="!isEmpty">
			<div v-for="error in errors" class="alert alert-danger" role="alert" :key="error">
				{{ error }}
			</div>
			<div class="alert alert-danger">
				<a href="/"> Go home </a>
			</div>
		</div>
		<div v-else id="form">
			<form @submit.prevent="onSubmit">
				<div class="form-row align-items-center">
					<fieldset>
						<div class="col-auto">
							<label class="sr-only" for="name">Name</label>
							<input :readonly="!canEdit" class="form-control mb-2" type="text" id="name" placeholder="Name" v-model="animal.name" autocomplete="false"/>
						</div>
						<div class="col-auto">
							<label class="sr-only" for="specie">Specie</label>
							<input :readonly="!canEdit" :class="(!canEdit)? 'form-control mb-2': 'form-control mb-2'"  type="text" id="specie" placeholder="Specie" v-model="animal.specie" autocomplete="false"/>
						</div>
						<div class="col-auto">
							<button v-if="canEdit" type="submit" :disabled="!isValidForm" :class="(isValidForm) ? 'btn btn-primary' : 'btn btn-primary disabled'">Submit</button>
						</div>
					</fieldset>
				</div>
			</form>
		</div>
	</div>
</template>


<script>
import { getByIdUrl } from "../../helpers/constants";

export default {
	name: "Form",
	data() {
		return {
			isLoading: false,
			animal: {
				id: this.$route.params.id,
				name: "",
				specie: ""
			},
			errors: [],
		};
	},
	mounted() {
		if(this.animal.id){
			this.fetchById(this.animal.id);
		}
	},
	methods: {
		onSubmit() {
			if(this.isValidForm) {
				this.$emit("submited", this.animal);
			} 
		},
		async fetchById(id) {
			try {
				this.isLoading = true;
				const res = await fetch(getByIdUrl({ id: id }));
				const data = await res.json();
				if(data.name && data.specie)
					this.animal = data;
				else 
					throw "Animal not found";
			} catch (err) {
				this.errors.push(err);
			} finally {
				this.isLoading = false;
			}
		}
	},
	computed: {
		isValidName() {
			if(this.animal.name) 
				return this.animal.name.length > 0;
			return false;
		},
		isValidSpecie() {
			if(this.animal.specie)
				return this.animal.specie.length > 0;
			return false;
		},
		isValidForm() {
			return this.isValidName && this.isValidSpecie;
		},
		isEmpty() {
			return this.errors.length === 0;
		}
	},
	props: {
		canEdit: {
			type: Boolean
		},
	},
};
</script>

<style>
</style>
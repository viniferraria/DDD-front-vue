<template>
	<div>
		<div v-if="isLoading" class="d-flex justify-content-center">
			<div class="spinner-border" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		</div>
		<div v-else id="edit-form">
			<Form @submited="log" :retriviedAnimal="animal" v-bind:canEdit="true"></Form>
		</div>
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
	mounted() {
		this.fetchById(this.id);
	},
	data() {
		return {
			animal: new Zoo({}),
			isLoading: false
		};
	},
	methods: {
		//TODO redirect to route
		log(formObj){
			let output = JSON.stringify(formObj);
			console.log(`log from edit ${output}`);
		},
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





// computed: {
//   fullName: {
//     // getter
//     get: function () {
//       return this.firstName + ' ' + this.lastName
//     },
//     // setter
//     set: function (newValue) {
//       var names = newValue.split(' ')
//       this.firstName = names[0]
//       this.lastName = names[names.length - 1]
//     }
//   }
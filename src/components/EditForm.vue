<template>
	<div>
		<div v-show="isComplete">
			<div class="alert alert-success alert-dismissible fade show">
				Successful
				<button type="button" class="close" @click="removeMessage" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		</div>
		<div v-show="!isEmpty">
			<div v-for="(error, index) in errors" class="alert alert-danger alert-dismissible fade show" :key="index">
				{{ error }}
				<button type="button" class="close" @click="popError(index)" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		</div>
		<div id="edit-form">
			<button class="btn btn-primary" @click="enableEdit">Edit</button>
			<Form @submited="submitEdit" v-bind:canEdit="this.canEdit"></Form>
		</div>
	</div>
</template>

<script>
// import Vue from "vue";
import Form from "./shared/Form";
import { editUrl } from "../helpers/constants";

// let eventBus = new Vue();

export default {
	name: "EditForm",
	components: {
		Form
	},
	data() {
		return {
			isComplete: false,
			errors: [],
			canEdit: false
		};
	},
	methods: {
		async submitEdit(zooObj) {
			try {
				// eslint-disable-next-line no-unused-vars
				const res = await fetch(editUrl(zooObj), {
					method: "put",
					body: JSON.stringify(zooObj),
					headers: new Headers({
						"Content-type": "application/json"
					})
				});
				this.isComplete = true;
			} catch (err) {
				this.errors.push(err);
			}
		},
		popError(index) {
			this.errors.splice(index, 1);
		},
		removeMessage() {
			this.isComplete = false;
		},
		enableEdit() {
			this.canEdit = !this.canEdit;
		}
	},
	computed: {
		isEmpty() {
			return this.errors.length === 0;
		}
	}
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
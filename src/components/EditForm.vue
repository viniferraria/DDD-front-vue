<template>
	<div>
		<div id="edit-form">
			<Form @submited="submitEdit" v-bind:canEdit="true"></Form>
		</div>
	</div>
</template>

<script>
import Form from "./shared/Form";
import { editUrl } from "../helpers/constants";

export default {
	name: "EditForm",
	components: {
		Form
	},
	methods: {
		async submitEdit(zooObj) {
			const res = await fetch(editUrl(zooObj), {
				method: "put",
				body: JSON.stringify(zooObj),
				headers: new Headers({
					"Content-type": "application/json"
				})
			});
			await res.json();
		},
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
<template>
	<div id="file">
		<div v-show="!isEmpty">
			<div v-for="(error, index) in errors" class="alert alert-danger alert-dismissible fade show" :key="index">
				{{ error }}
				<button type="button" class="close" @click="popError(index)" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		</div>
		<div v-show="isComplete">
			<div class="alert alert-success alert-dismissible fade show">
				File Uploaded
				<button type="button" class="close" @click="removeMessage" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		</div>
		<div id="form">
			<form @submit.prevent="onSubmit">
				<div class="form-group">
					<input type="file" class="form-control-file" @change="handleFileUpload">
				</div>
				<div class="form-group">
					<button class="btn btn-primary" type="submit">Submit</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { bulkUrl } from "../helpers/constants";
export default {
	name: "File",
	data() {
		return {
			file: null,
			errors: [],
			isLoading: false,
			isComplete: false,
		};
	},
	methods: {
		async onSubmit() {
			try {
				if(!this.file) {
					throw "Missing file";
				}
				let formData = new FormData();
				formData.append("file", this.file);
				this.isLoading = true;
				const res = await fetch(bulkUrl, {
					method: "post",
					body: formData,
				});
				console.log(res.status);
				this.isComplete = true;
			} catch (err) {
				this.errors.push(err);
			} finally {
				this.isLoading = false;
				// this.file = null;
			}
		},
		handleFileUpload({ target }) {
			this.file = target.files[0];
		},
		popError(index) {
			this.errors.splice(index, 1);
		},
		removeMessage() {
			this.isComplete = false;
		},
	},
	computed: {
		isEmpty(){
			return this.errors.length === 0;
		},
	}
};
</script>


<style scoped>

</style>
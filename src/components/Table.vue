<template>
	<div id="tableapp">
		<div v-if="isLoading" class="d-flex justify-content-center">
			<div class="spinner-border" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		</div>
		<div v-else-if="list.length > 0" class="table-responsive">
			<table class="table table-striped table-bordered table-hover table-dark">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>          
						<th>Specie</th>          
						<th colspan="2">Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="{ id, name, specie } in list" v-bind:key="id">
						<td>{{ id }}</td>
						<td>{{ name }}</td>
						<td>{{ specie }}</td>
						<td>
							<button @click="pushDetails({ id: id })" class="btn btn-info">Details</button>
							<button v-on:click="pushEdit({id: id })" class="btn btn-primary">Edit</button>
							<button @click="deleteById({ id })" class="btn btn-danger">Delete</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div v-else class="no-data">
			<h3 class="text-center"> No data </h3>
		</div>
	</div>
</template>

<script>
import { fetchTableUrl, deleteUrl } from "../helpers/constants";

export default {
	name: "Table",
	created() {
		this.fetchTable();
	},
	data() {
		return {
			list: [],
			isLoading: false
		};
	},
	methods: {
		pushEdit({ id }) {
			this.$router.push({path: `edit/${id}`});
		},
		pushDetails({ id  }) {
			this.$router.push({path: `details/${id}`});
		},
		async deleteById({ id: deleteId }) {
			try {
				const res = await fetch(deleteUrl({ id: deleteId }), {
					method: "delete",
				});
				if (res.status === 200)
					this.list = this.list.filter( ({ id }) => id !== deleteId );
			} catch (err) {
				console.log(err);
			}
		},
		async fetchTable() {
			try {
				this.isLoading = true;
				const res = await fetch(fetchTableUrl);
				const data = await res.json();
				this.list = data;
			} catch (err) {
				console.log(err);
			} finally {
				this.isLoading = false;
			}
		},
		capitalize(string) {
			return `${string.charAt(0).toUpperCase()}${string.substring(1)}`;
		},
	},
	computed: {
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
#table-app {
	background-color: #000000
}

button {
	margin-right: 3px;
	margin-left: 3px;
}
</style>

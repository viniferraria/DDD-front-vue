<template>
  <div id="tableapp">
    <div class="table-responsive" v-if="list.length > 0">
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
            <th>{{ id }}</th>
            <th>{{ name }}</th>
            <th>{{ specie }}</th>
            <th colspan="2">
              <button v-on:click="logId({ id: id })" class="btn btn-primary">Edit</button>
              <button @click="deleteById({ id: id })" class="btn btn-danger">Delete</button>
              <button v-on:click="logId({ id: id })" class="btn btn-info">Details</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
	<div class="no-data" v-else>
		<h3 class="text-center"> No data </h3>
	</div>
  </div>
</template>

<script>
import { fetchTableUrl, deleteById } from "../helpers/constants";
// import Zoo from "../models/Zoo";
export default {
	name: "Table",
	created() {
		this.fetchTable();
	},
	data() {
		return {
			list: []
		};
	},
	methods: {
		logId({ id }) {
			console.log(id);
		},
		deleteById({ id: paramId }) {
			console.log(paramId);
			deleteById;
			// fetch(deleteById({id: paramId}), {
			// 	method: "delete",
			// })
			// 	.then(res => res.json())
			// 	.then(json => console.log(json));
		},
		capitalize(string) {
			return `${string.charAt(0).toUpperCase()}${string.substring(1)}`;
		},
		fetchTable() {
			fetch(fetchTableUrl)
				.then(res => res.json())
				.then(data => {
					this.list = data;
				});
		}
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

<template>
  <div id="tableapp">
    <div class="table-responsive" v-if="list.length > 0">
      <table class="table table-striped table-bordered table-hover table-dark">
        <thead>
          <tr> 
            <th v-for="key in properties" :key="key">{{ capitalize(key) }}</th>            
            <th colspan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="{ id, name, age } in list" v-bind:key="id">
            <th> {{ id }}</th>
            <th> {{ name }}</th>
            <th> {{ age }}</th>
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
export default {
	name: "Table",
	data() {
		return {
			list: [
				{
					id: 1,
					name: "Rick",
					age: 67
				},
				{
					id: 2,
					name: "Morty",
					age: 15
				}
			]
		}
	},
	methods: {
		logId({ id }) {
			console.log(id);
		},
		deleteById({ id: paramId }) {
			console.log(`clicked with id: ${paramId}`);
			this.list = this.list.filter( ({ id }) => id !== paramId);
		},
		capitalize(string) {
			return `${string.charAt(0).toUpperCase()}${string.substring(1)}`;
		}
	},
	computed: {
		properties() {
			return Object.keys(this.list[0]) ;
		},
	},
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

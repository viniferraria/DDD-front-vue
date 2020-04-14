<template>
  <div class="table-responsive">
    <table class="table table-striped table-bordered table-hover table-dark">
      <thead>
        <tr> 
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in list" v-bind:key="person.id">
          <th> {{ person.id }}</th>
          <th> {{ person.name }}</th>
          <th> {{ person.age }}</th>
          <button>hey</button>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";

export default {
	name: "Table",
	data: () => ({
		list: [
			{id: 1, name: "Rick", age: 67},
			{id: 2, name: "Morty", age: 15}  
		]
	})
	// props: {
	//   msg: String
	// },
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
</style>

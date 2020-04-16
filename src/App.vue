<template>
  <div id="app" class="text-center">
	<div id="sidenav">
		<h1>{{ message }}</h1>
	</div>
    <div id="Table">
		<Table></Table>
		<br>
    </div>
    <div id="edit">
		<h1>Edit</h1>
		<EditForm v-bind:id="1"></EditForm>
		<br>
    </div>
    <div id="create">
		<h1>Create</h1>
		<CreateForm></CreateForm>
		<br>
    </div>
    <div id="edit">
		<h1>Details</h1>
		<Details v-bind:id="1"></Details>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Table from "./components/Table.vue";
import EditForm from "./components/EditForm.vue";
import CreateForm from "./components/EditForm.vue";
import Details from "./components/EditForm.vue";

export default {
	name: "App",
	data() {
		return {
			message: "Hello",
		};
	},
	components: {
		Table,
		EditForm,
		CreateForm,
		Details
	},
	methods: {
	}
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

</style>

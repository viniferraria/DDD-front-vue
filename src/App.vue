<template>
  <div id="app" class="text-center">
	<div id="sidenav">
		<h1>{{ message }}</h1>
	</div>
    <div id="table">
      <EditForm @submited="log" id=1></EditForm>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
// import Table from "./components/Table.vue";
import EditForm from "./components/EditForm.vue";

export default {
	name: "App",
	data() {
		return {
			message: "Hello",
		};
	},
	components: {
		// Table,
		EditForm
	},
	methods: {
		log(formObj){
			let output = JSON.stringify(formObj);
			console.log(output);
			this.message = output;
		},
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

<template>
  <div id="app" class="text-center">
	<div id="sidenav">
		<h1>{{ message }}</h1>
	</div>
	<ul class="nav nav-pills">
		<li class="nav-item">
			<router-link to="/" v-slot="{ href }">
				<a class="nav-link" :class="{active: isActive}" :href="href">
					Home
				</a>
			</router-link> 
		</li>
		<li class="nav-item">
			<router-link to="/add" v-slot="{ href }">
				<a class="nav-link" :class="{active: !isActive}" :href="href">
					Create
				</a>
			</router-link> 
		</li>
	</ul>
	<br>
	<div>
		<router-view></router-view>
	</div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

export default {
	name: "App",
	data() {
		return {
			message: "Zoo - DDD",
		};
	},
	computed: {
		isActive() {
			return this.$router.currentRoute.path === "/";
		}
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

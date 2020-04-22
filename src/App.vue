<template>
  <div id="app" class="text-center">
	<div id="sidenav">
		<h1>{{ message }}</h1>
	</div>
	<ul class="nav nav-pills">
		<li class="nav-item"
			v-for="(tab, index) in tabs"
			:key="index"
			@click="selectedTab = tab.path">
			<router-link :to="tab.path" v-slot="{ href }">
				<a class="nav-link"
					:class="{active: selectedTab === tab.path}" 
					:href="href">
					{{ tab.name }}</a>
			</router-link> 
		</li>
	</ul>
	<br>
	<!-- <div v-show="selectedTab === '/'"> -->
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
			tabs: [
				{ name: "Home", path: "/"},
				{ name: "Create", path: "/add"}
			],
			selectedTab: this.$router.currentRoute.path
		};
	},
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

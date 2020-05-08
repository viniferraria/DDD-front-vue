import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
Vue.config.productionTip = false;

import App from "./App.vue";
import Table from "./components/Table.vue";
import EditForm from "./components/EditForm.vue";
import CreateForm from "./components/CreateForm.vue";
// import Details from "./components/Details.vue";
import File from "./components/File.vue";

const routes = [
	{ path: "/", component: Table },
	{ path: "/edit/:id", component: EditForm },
	{ path: "/add/", component: CreateForm },
	// { path: "/details/:id", component: Details },
	{ path: "/upload", component: File }
];

const router = new VueRouter({
	mode: "history",
	base: "/",
	routes
});


new Vue({
	router,
	render: h => h(App),
}).$mount("#app");
<template>
	<div id="edit-form">
		<form>
			<fieldset>
				<label for="name">Name</label>
					<input type="text" id="name" placeholder="Name" v-bind:value="getById(id).name"/>
				<label for="age">Age</label>
					<input type="text" id="age" placeholder="Age" v-bind:value="getById(id).age"/>
			</fieldset>
		</form>
	</div>
</template>


<script>
export default {
	name: "EditForm",
	data: () => ({
		person: {
			name: "Timmy",
			age: 21,
		},
		db: [
			this.person, 
		]
	}),
	methods: {
		getById({ id }) {
			return this.db[id-1];
		}
		
	},
	// computed: {
		
	// },
	props: {
		id: Number,
	},
};
</script>

<style>
	
</style>
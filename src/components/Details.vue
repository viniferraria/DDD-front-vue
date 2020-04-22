<template>
	<div id="details">
		<div id="details-form">
			<Form v-bind:canEdit="false"></Form>
		</div>
	</div>
</template>

<script>
import Form from "./shared/Form";

export default {
	name: "Details",
	components: {
		Form
	},
};
</script>

<style>
	
</style>

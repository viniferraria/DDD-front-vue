// let port = 5001;
let baseUrl = "https://animalback.azurewebsites.net/zoo";

module.exports = {
	fetchTableUrl: `${baseUrl}`,
	bulkUrl: `${baseUrl}/read`,
	createUrl: `${baseUrl}/add`,
	deleteUrl({ id }) { return `${baseUrl}/${id}`; },
	editUrl: ({ id }) => `${baseUrl}/update/${id}`,
	getByIdUrl: ({ id }) => `${baseUrl}/${id}`,
};
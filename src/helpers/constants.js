let port = 44318;
let baseUrl = `https://localhost:${port}/zoo`;

module.exports = {
	fetchTableUrl: `${baseUrl}`,
	bulkUrl: `${baseUrl}/read`,
	createUrl: `${baseUrl}/add`,
	deleteUrl({ id }) { return `${baseUrl}/${id}`; },
	editUrl: ({ id }) => `${baseUrl}/update/${id}`,
	getByIdUrl: ({ id }) => `${baseUrl}/${id}`,
};
const resolvers = {
	Query: {
		author: () => ({
			id: 1,
			firstname: "Vaibhav",
			lastname: "Satam"
		})
	},
	Author: {
		posts: ({ id }, _) => [
			{
				id: 1,
				title: "Hello world",
				text: "Hello world program"
			}
		]
	},
	Post: {
		authors: () => [
			{
				id: 1,
				firstname: "Vaibhav",
				lastname: "Satam"
			},
			{
				id: 1,
				firstname: "Rohit",
				lastname: "Natekar"
			}
		]
	}
};

module.exports = resolvers;

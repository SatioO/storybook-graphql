const resolvers = {
	Query: {
		author: () => ({
			id: 1,
			firstname: "Vaibhav",
			lastname: "Satam"
		})
	},
	Author: {
		posts: () => {
			return [
				{
					id: 1,
					title: "Hello world",
					text: "Hello world program"
				}
			];
		}
	}
};

module.exports = resolvers;

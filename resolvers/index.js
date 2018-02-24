const resolvers = {
	Query: { author: () => ({ id: 1, firstname: "Vaibhav", lastname: "Satam" }) }
};

module.exports = resolvers;

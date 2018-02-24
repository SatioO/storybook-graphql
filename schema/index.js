const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("../resolvers");

const typeDefs = `
  type Query { 
    books: String 
  }
`;

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

module.exports = schema;

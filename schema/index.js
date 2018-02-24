const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("../resolvers");

const typeDefs = `
  type Author {
    id: Int
    firstname: String
    lastname: String
  }

  type Query { 
    author: Author 
  }
`;

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

module.exports = schema;

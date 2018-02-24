const { makeExecutableSchema } = require("graphql-tools");

const typeDefs = `
  type Query { 
      hello: String 
    }
`;

const schema = makeExecutableSchema({
	typeDefs
});

module.exports = schema;

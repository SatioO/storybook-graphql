const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("../resolvers");

const typeDefs = `
  type Author {
    id: Int
    firstname: String
    lastname: String
    posts: [Post]
  }

  type Post {
    id: Int
    title: String
    text: String
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

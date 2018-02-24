const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("../resolvers");

const typeDefs = `
  type Author {
    id: Int
    name: String @deprecated
    firstname: String
    lastname: String
    posts: [Post]
  }

  type Post {
    id: String
    title: String
    text: String
    authors: [Author]
  }

  union SearchResult = Post | Author

  type Query { 
    author: Author
    posts: [Post] 
    search(text: String!): [SearchResult]!
  }
`;

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

module.exports = schema;

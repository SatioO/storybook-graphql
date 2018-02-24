const { Author, Post } = require("../controllers");

const resolvers = {
	Query: {
		author: async () => await Author.findOne(),
		posts: async () => await Post.find(),
		search: async (_, { text }) => {
			return [];
		}
	},
	Author: {
		posts: async (author, _) => await Post.findById(author)
	},
	Post: {
		authors: async (post, _) => await Author.find(post)
	}
};

module.exports = resolvers;

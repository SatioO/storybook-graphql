const { Author, Post } = require("../controllers");

const resolvers = {
	Query: {
		author: async () => await Author.findOne()
	},
	Author: {
		posts: async (author, _) => await Author.find(author)
	},
	Post: {
		authors: async (post, _) => await Post.find(post)
	}
};

module.exports = resolvers;

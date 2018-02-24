class Post {
	constructor() {}

	static find() {
		return [
			{
				id: "bk101",
				title: "XML Developer's Guide",
				text: `An in-depth look at creating applications with XML.`
			},
			{
				id: "bk102",
				title: "Midnight Rain",
				text:
					"A former architect battles corporate zombies, an evil sorceress, and her own childhood to become queen of the world."
			}
		];
	}

	static findById({ id: authorId }) {
		return [
			{
				id: "bk101",
				title: "XML Developer's Guide",
				text: `An in-depth look at creating applications with XML.`
			},
			{
				id: "bk102",
				title: "Midnight Rain",
				text:
					"A former architect battles corporate zombies, an evil sorceress, and her own childhood to become queen of the world."
			}
		];
	}
}

module.exports = Post;

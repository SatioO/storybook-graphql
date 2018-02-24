class Author {
	constructor() {}

	static find({ id: postid }) {
		return [
			{
				id: 1,
				title: "Hello world",
				text: "Hello world program"
			}
		];
	}

	static findOne() {
		return {
			id: 1,
			firstname: "Vaibhav",
			lastname: "Satam"
		};
	}
}

module.exports = Author;

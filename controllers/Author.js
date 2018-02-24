class Author {
	constructor() {}

	static findOne() {
		return {
			id: 1,
			name: "Glynnis Campbell",
			firstname: "Vaibhav",
			lastname: "Satam"
		};
	}

	static find() {
		return [
			{
				id: 1,
				name: "Glynnis Campbell",
				firstname: "Glynnis",
				lastname: "Campbell"
			},
			{
				id: 2,
				name: "John Scalzi",
				firstname: "John",
				lastname: "Scalzi"
			}
		];
	}

	static findById({ id: postid }) {
		return [
			{
				id: 1,
				name: "Glynnis Campbell",
				firstname: "Glynnis",
				lastname: "Campbell"
			},
			{
				id: 2,
				name: "John Scalzi",
				firstname: "John",
				lastname: "Scalzi"
			}
		];
	}
}

module.exports = Author;

const express = require("express");
const bodyParser = require("body-parser");
const DataLoader = require("dataloader");
const graphQLHTTP = require("express-graphql");
const schema = require("./schema");
const { Author } = require("./controllers");
const app = express();
const PORT = 3009;

const authorLoader = new DataLoader(async urls => await Author.find(urls));

const loaders = {
	author: authorLoader
};

app.use(
	graphQLHTTP({
		schema,
		graphiql: true,
		context: { loaders }
	})
);

app.listen(PORT, _ => console.log(`App started listening on PORT ${PORT}`));

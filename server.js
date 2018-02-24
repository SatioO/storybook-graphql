const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("graphql-server-express");
const schema = require("./schema");

const app = express();
const PORT = 3009;

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema: schema }));

// GraphiQL, a visual editor for queries
app.use("/", graphiqlExpress({ endpointURL: "/graphql" }));

app.listen(PORT, _ => console.log(`App started listening on PORT ${PORT}`));

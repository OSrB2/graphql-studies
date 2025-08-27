import { ApolloServer, gql } from "apollo-server";

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID! # ! -> define que um campo não pode ser null.
      name: String
      age: Int
      average: Float
      married: Boolean!
      arrayString: [String]
    }
  `,
  resolvers: {
    Query: {
      id: () => '127adf98-sdf98',
      name: () => 'Pedro Oliveira',
      age: () => 38,
      average: () => 3.23,
      married: () => true,
      arrayString: () => ['A', 'B'] // -> Pode ser um array vazio.
    }
  }
});

server.listen(4003).then(({ url }) =>  {
  console.log(`Server listening on url ${url}`);
});

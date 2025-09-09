import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema';
import { context } from './graphql/context';
import { PostsApi } from './graphql/post/datasources';
import { UserApi } from './graphql/user/datasources';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources: () => {
    return {
      postApi: new PostsApi(),
      userApi: new UserApi(),
    }
  }
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});

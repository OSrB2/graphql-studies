// QUERY RESOLVERS
const post = async (_, { id }, { dataSources }) => {
  const post = dataSources.postApi.getPost(id);
  return post;
};

const posts = async (_, { input }, { dataSources }) => {
  const posts = dataSources.postApi.getPosts(input);
  return posts;
};

// MUTATION RESOLVERS
const createPost = async (_, { data }, { dataSources }) => {
  return dataSources.postApi.createPost(data);
};

// FIELD RESOLVERS

const user = async ({ userId }, _, { dataSources }) => {
  return dataSources.userApi.batchLoadById(userId);
};

export const postResolvers = {
  Query: { post, posts },
  Mutation: { createPost },
  Post: { user },
};

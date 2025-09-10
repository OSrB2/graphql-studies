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
const createPost = async (_, args, { dataSources }) => {
  console.log(args);
  return {
      "id": "607",
      "title": "Laborum optio sunt aut ut ut ut.",
      "body": "Sit sed deserunt libero nulla in culpa.",
      "userId": "439",
      "indexRef": 24,
      "createdAt": "2019-02-12T01:13:25.622Z"
    };
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

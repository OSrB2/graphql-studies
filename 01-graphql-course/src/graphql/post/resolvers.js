const posts = async (_, __, { getPosts }) => {
  const posts = await getPosts();
  return posts.json();
}

const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);
  const post = await response.json();
  return post;
}

export const postResolvers = {
  Query: { post, posts },
  Post: {
    unixTimestamp: ({ createdAt }) => {
      const timestamp = new Date(createdAt).getTime() / 1000;
      return Math.floor(timestamp);
    }
  }
}

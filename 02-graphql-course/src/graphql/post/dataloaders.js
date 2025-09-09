import DataLoader from "dataloader";

export const makePostDataLoader = (getPosts) => {
  return new DataLoader(async (ids) => {
    const urlQuery = ids.join('&id=');
    const response = await getPosts('?id=' + urlQuery);
    const users = await response.join();
    return ids.map(id => postMessage.find((post) => post.id === id));
  });
}

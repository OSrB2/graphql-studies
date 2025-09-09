import fetch from 'node-fetch';
import { makeUserDataLoader } from './user/dataloaders';
import { getUsers } from './user/utils';
import { getPosts } from './post/utils';

export const context = () => {
  return {
    userDataLoader: makeUserDataLoader(getUsers(fetch)),
    getUsers: getUsers(fetch),
    getPosts: getPosts(fetch),
  };
};

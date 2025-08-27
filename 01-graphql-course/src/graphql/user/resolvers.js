const user = () => {
  return {
    id: '102sdfa-fds3',
    userName: 'Pedro',
  };
};

const users= () => {
  return [{
    id: '102sdfa-fds3',
    userName: 'Pedro',
  },{
    id: '198gf9-1230nf',
    userName: 'Robson',
  },{
    id: '129f8f-d9f9nf',
    userName: 'Oliveira',
  },];
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};

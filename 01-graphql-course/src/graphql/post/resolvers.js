const post = () => {
  return {
    id: '1jf39nf-229f',
    title: 'First Post'
  }
}

const posts = () => {
  return [{
    id: '1jf39nf-229f',
    title: 'First Post'
  },{
    id: '193rf3-f2jf32',
    title: 'Second Post'
  },{
    id: 'd108d89-jd01d',
    title: 'Third Post'
  }]
}

export const postResolvers = {
  Query: {
    post,
    posts
  }
}

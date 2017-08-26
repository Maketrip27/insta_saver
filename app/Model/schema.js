import Realm from 'realm';

class FavUser {}

FavUser.schema = {
  name: 'FavUser',
  properties: {
    name:  'string',
    username: 'string',
    id: 'string',
    profile: 'string'
  },
};

class Search {}

Search.schema = {
  name: 'Search',
  properties: {
    name:  'string',
    username: 'string',
    id: 'string',
    profile: 'string'
  },
};

class Feed {}

Feed.schema = {
  name: 'Feed',
  primaryKey: 'id',
  properties: {
    name:  'string',
    username: 'string',
    id: 'string',
    profile: 'string',
    tag_text: 'string',
    images: 'string',
    likes: 'string',
    comments: 'string',
    is_video: 'bool'
  },
};

class Post {}

Post.schema = {
  name: 'Post',
  properties: {
    name:  'string',
    username: 'string',
    id: 'string',
    profile: 'string',
    tag_text: 'string',
    images: 'string',
    likes: 'string',
    comments: 'string'
  },
};

export default new Realm({schema: [FavUser, Search, Feed, Post]});
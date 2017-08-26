import React, { Component,Video } from 'react';

import { Container, Content, Text, Body,Left,Right,Header,Title } from 'native-base';

import { connectRealm } from 'react-native-realm';

import { Feed } from '../components/feed.js';

const  url = "https://www.instagram.com/";
const post_data = {}

export class Home extends Component {


componentWillMount(){
  this._deleteLastFeeds();
  this._getFeeds();
  // this._loadFeeds('https://www.instagram.com/mtv.splitsvilla10/?__a=1')
}

_getFeeds(){
  this.props.fav_users.map((data) => {
    params = data.username+'/?__a=1';
    console.log(url+params)
    this._loadFeeds(url + params);
  })
}

async _loadFeeds(url){
  console.log(url, "-------------------------------->")
  try{
       let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
        })
       let responseData = await response.json();

            // console.log(responseData);
            data = responseData.user;
            if (!data.is_private){
            post_data.profile = data.profile_pic_url;
            post_data.username = data.username;
            post_data.full_name = data.full_name;
            post_data.image_url = data.media.nodes[0].display_src;
            post_data.likes = data.media.nodes[0].likes.count;
            post_data.comments = data.media.nodes[0].comments.count;
            post_data.id = data.media.nodes[0].code
            post_data.tag_text = this._captionFormat(data.media.nodes[0].caption)
            post_data.is_video = data.media.nodes[0].is_video
            this._storeFeeds(post_data);
          }else{
            // console.log("private url", url)
          }

    }catch(error){
      console.log(error)
    }
}
_captionFormat(string){
  if (string.length > 100)
    return string.substring(0,50)+'...';
  else if(string!=null)
    return string;
  else
    return ''
}
_storeFeeds(feed){
  const { realm } = this.props;
  let r = realm.objects('Feed').filtered('id = $0', feed.id);
    realm.write(() => {
      realm.create('Feed', {
        name:  feed.full_name,
        username: feed.username,
        profile: feed.profile,
        tag_text: feed.tag_text,
        images:  feed.image_url,
        likes: feed.likes.toString(),
        comments: feed.comments.toString(),
        id: feed.id,
        is_video: feed.is_video
      },true);
    });
}
_deleteLastFeeds(){
  const { realm } = this.props;
  let feeds = realm.objects('Feed');
  if (feeds.length > 30){
    // realm.write(() => {
    //   realm.delete(feeds.slice(-10);
    // })
    console.log("Removed last 10 record from From Fav");
  }
}  
 _feeds(){ 
    feed_data = [] 
    this.props.feeds.map((data) => {
      feed_data.push(<Feed data={data} />)
    })
    return (feed_data.reverse())
  }
  render() {
    return (
     <Container>
       <Header style={{ backgroundColor: '#F5F5F5'}}>
        <Left style={{flex: 1}}>
        </Left>
        <Body style={{flex: 1}}>
          <Title style={{color: 'black'}}>Insta Saver</Title>
        </Body>
        <Right/>
      </Header>
        <Content>
          {this._feeds()}
        </Content>
      </Container>
    );
  }
}


export default connectRealm(Home, {
  schemas: ['Feed','FavUser'],
  mapToProps(results, realm) {
    // console.log(results.feeds)
    return {
      realm,
      feeds: results.feeds || [],
      fav_users: results.favUsers || [],
    };
  },
});
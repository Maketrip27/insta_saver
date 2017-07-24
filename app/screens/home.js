import React, { Component,Video } from 'react';

import { Container, Content, Text, Body,Left,Right,Header,Title } from 'native-base';

import { connectRealm } from 'react-native-realm';

import { Feed } from '../components/feed.js';

const feeds = [
{
  full_name: 'Salman khan',
  profile: 'http://media2.intoday.in/indiatoday/images/stories/salman-khan_660_042313053619_020614072820.jpg',
  username: 'beginhuman',
  image_url: 'https://shareonline.in/wp-content/uploads/2016/05/salman-khan-images-2013-kick-salman-khan-body-2013-in-kick-83-rIWhvJ.jpg',
  tag_text: 'At #IIFA rehearsals .. Choreographed by #mudassarkhan #NewYork',
  likes: '122',
  comments: '22'
},
{
  full_name: 'Dwayne Johnson',
  profile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/220px-Dwayne_Johnson_2%2C_2013.jpg',
  username: 'therock',
  image_url: 'http://pinthisstar.com/images/dwayne-johnson-hair-10.jpg',
  tag_text: 'therock Chivalrous gentleman.',
  likes: '4422',
  comments: '322'
},
{
  full_name: 'Priyanka Chopra',
  profile: 'http://starsunfolded.1ygkv60km.netdna-cdn.com/wp-content/uploads/2014/06/Priyanka-Chopra-5.jpg',
  username: 'pc',
  image_url: 'http://starsunfolded.1ygkv60km.netdna-cdn.com/wp-content/uploads/2014/06/Priyanka-Chopra-5.jpg',
  tag_text: 'Awww too sweet! Thank you for the hospitality #birthdaycontinues',
  likes: '222 k',
  comments: '222'
},
{
  full_name: 'Deepika',
  profile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Deepika_Padukone_at_Piku_event.jpg/170px-Deepika_Padukone_at_Piku_event.jpg',
  username: 'deep',
  image_url: 'http://www.planwallpaper.com/static/images/black-apple-wallpaper-hd-hd-wallpapers-landscape-animals-photo-wallpaper-hd.jpg',
  tag_text: 'Because every picture tells a story ',
  likes: '12.2 k',
  comments: '22'
}
  
]

export class Home extends Component {
 _feeds(){ 
    return feeds.map((data) => {
      return (
        <Feed data={data} />
      )
    })
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
          {this._feeds()}
        </Content>
      </Container>
    );
  }
}


export default connectRealm(Home, {
  schemas: ['Feed'],
  mapToProps(results, realm) {
    return {
      realm,
      feeds: results.feeds || [],
    };
  },
});
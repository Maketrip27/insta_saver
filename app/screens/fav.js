import React, { Component } from 'react';

import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Button,Icon } from 'native-base';
import { connectRealm } from 'react-native-realm';

const feeds = [
{
  name: 'Salman khan',
  profile: 'http://media2.intoday.in/indiatoday/images/stories/salman-khan_660_042313053619_020614072820.jpg',
  date: 'beginhuman',
  post: 'https://shareonline.in/wp-content/uploads/2016/05/salman-khan-images-2013-kick-salman-khan-body-2013-in-kick-83-rIWhvJ.jpg'
},
{
  name: 'Dwayne Johnson',
  profile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/220px-Dwayne_Johnson_2%2C_2013.jpg',
  date: 'therock',
  post: 'http://pinthisstar.com/images/dwayne-johnson-hair-10.jpg'
},
{
  name: 'Priyanka Chopra',
  profile: 'http://starsunfolded.1ygkv60km.netdna-cdn.com/wp-content/uploads/2014/06/Priyanka-Chopra-5.jpg',
  date: 'pc',
  post: 'http://starsunfolded.1ygkv60km.netdna-cdn.com/wp-content/uploads/2014/06/Priyanka-Chopra-5.jpg'
},
{
  name: 'Deepika',
  profile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Deepika_Padukone_at_Piku_event.jpg/170px-Deepika_Padukone_at_Piku_event.jpg',
  date: 'deep',
  post: 'http://www.planwallpaper.com/static/images/black-apple-wallpaper-hd-hd-wallpapers-landscape-animals-photo-wallpaper-hd.jpg'
}
  
]
export default class Fav extends Component {


  _removeFromFav(user){
    console.log(this.props,'-------------------------')
    const { realm } = this.props;
    let r = realm.objects('FavUser').filtered('username contains %@', user.username);
    if (r.length > 0){
      realm.delete(r);
      alert("Removed  From Fav");
    }
  }

   _fav_list(){ 
    return this.props.fav_users.map((data) => {
      return (
         <ListItem avatar onPress={ () =>  this.props.navigation.navigate('Profile', {name: data.name}) }>
              <Left>
                <Thumbnail small source={{ uri: data.profile }} />
              </Left>
              <Body>
                <Text>{data.name}</Text>
                <Text note>{data.username}</Text>
              </Body>
              <Right>
                <Button transparent onPress={ () => this._removeFromFav(data) }>
                  <Icon name='ios-heart' style = {{color: 'red', fontSize: 24}}/>
                </Button>
              </Right>
            </ListItem>
      )
    })
  }
  render() {
    return (
      <Container>
        <Content style = {{backgroundColor: 'white'}}>
          <List>
           {this._fav_list()}      
          </List>
        </Content>
      </Container>
    );
  }
}

export default connectRealm(Fav, {
  schemas: ['FavUser'],
  mapToProps(results, realm) {
    return {
      realm,
      fav_users: results.favusers || [],
    };
  },
});
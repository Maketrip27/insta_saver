import React, { Component } from 'react';

import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Button,Icon } from 'native-base';
import { connectRealm } from 'react-native-realm';

export class Fav extends Component {


  _removeFromFav(user){
    console.log(this.props,'-------------------------')
    const { realm } = this.props;
    let r = realm.objects('FavUser').filtered('username contains $0', user.username);
    if (r.length > 0){
      realm.write(() => {
        realm.delete(r);
      })
      ToastAndroid.showWithGravity('Removed From Favorite List.', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
  }

   _fav_list(){ 
      fav_users = []
      this.props.fav_users.map((data) => {
      fav_users.push(
         <ListItem avatar onPress={ () =>  this.props.navigation.navigate('Profile', {name: data.name}) }>
              <Left>
                <Thumbnail small source={{ uri: data.profile }} />
              </Left>
              <Body>
                <Text>{data.name}</Text>
                <Text note>{data.username}</Text>
              </Body>
              <Right>
                <Button transparent style={{height: 30}} onPress={ () => this._removeFromFav(data) }>
                  <Icon name='ios-heart' style = {{color: 'red'}}/>
                </Button>
              </Right>
            </ListItem>
      )
    })
    return( fav_users.reverse())
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
    console.log(results);
    return {
      realm,
      fav_users: results.favUsers || [],
    };
  },
});
import React, { Component } from 'react';
import { connectRealm } from 'react-native-realm';
import Loading from '../components/Loading.js';

import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Button,Icon,Item,Input } from 'native-base';

import {
  ToastAndroid,
  Keyboard
} from 'react-native';


const  url = "https://www.instagram.com/web/search/topsearch/";
 
export  class Search extends Component {
 constructor(props) {
  super(props);

    this.state = {
      loading: false,
      search: '',
      data: []
    };
  }

  _addToSearch(user){
    console.log(this.props,'-------------------------')
    const { realm } = this.props;
    let r = realm.objects('FavUser').filtered('username contains $0', user.username);
    if (r.length > 0){
      ToastAndroid.showWithGravity('Already Favorited.', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }else{
      realm.write(() => {
        realm.create('FavUser', {
          name:  user.full_name,
          username: user.username,
          id: '1',
          profile: user.profile_pic_url,
        });
      });
      ToastAndroid.showWithGravity('Added To Favorite List.', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
  }

  _search(){
    Keyboard.dismiss();
    this.setState({loading: true});
    params = '?query='+this.state.search
    try{
      fetch(url + params, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
        }).then((response) => response.json())
        .then((responseData) =>
        {
            data = responseData.users.slice(0, 30);
            this.setState({data: data, loading: false})
            console.log(data);
        })
        .catch(function(error) {
          this.setState({loading: false});
        });
    }catch(error){
      console.log(error)
      this.setState({loading: false});
    }
  }
  _userList(){
    user_list = []
    this.state.data.map((search) => 
      user_list.push(
        <ListItem avatar>
          <Left>
            <Thumbnail small source={{ uri: search.user.profile_pic_url }} />
          </Left>
          <Body>
            <Text>{search.user.full_name}</Text>
            <Text note>{search.user.username}</Text>
          </Body>
          <Right>
            <Button transparent style={{height: 30}} onPress={ () => this._addToSearch(search.user) }>
              <Icon name='ios-heart-outline' style = {{color: 'black', fontSize: 24}}/>
            </Button>
          </Right>
        </ListItem>)
    )
    return (user_list)
  }
  render() {
    return (
      <Container>
        <Header searchBar rounded style={{ backgroundColor: '#F5F5F5'}}>
          <Item>
            <Icon name="ios-search" />
            <Input onChangeText={(text) => {this.setState({search: text})}}/>
            <Button transparent onPress={ () => this._search() }>
              <Text style={{color: 'black'}} >Search</Text>
            </Button>
          </Item>
        </Header>
        {(this.state.loading)? <Loading/> :
          <Content>
            <List>
                {this._userList()}
            </List>
          </Content>
        }
      </Container>
    );
  }
}

export default connectRealm(Search, {
  schemas: ['Search','FavUser'],
  mapToProps(results, realm) {
    return {
      realm,
      searchs: results.searches || [],
      fav_users: results.favusers || [],
    };
  },
});
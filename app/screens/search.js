import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Button,Icon,Item,Input } from 'native-base';
import { connectRealm } from 'react-native-realm';
const  url = "https://www.instagram.com/web/search/topsearch/";
import Scrap  from '../config/scrap.js';
 
export  class Search extends Component {
 constructor(props) {
  super(props);

    this.state = {
      search: '',
      data: []
    };
  }

  _addToSearch(){
    console.log(this.props,'-------------------------')
    const { realm } = this.props;
    realm.write(() => {
      realm.create('Search', {
        name:  'Shailesh',
        username: 'sp',
        id: '111',
        profile: 'http://media2.intoday.in/indiatoday/images/stories/salman-khan_660_042313053619_020614072820.jpg',
      });
    });
  }

  _search(){
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
            this.setState({data: data})
            console.log(data);
        })
        .catch(function(error) {

        });
    }catch(error){
      console.log(error)
    }
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
        <Content>
          <List>
              {this.state.data.map((search) => (
                <ListItem avatar>
                <Left>
                  <Thumbnail small source={{ uri: search.user.profile_pic_url }} />
                </Left>
                <Body>
                  <Text>{search.user.full_name}</Text>
                  <Text note>{search.user.username}</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon name='ios-heart-outline' style = {{color: 'black', fontSize: 24}}/>
                  </Button>
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

export default connectRealm(Search, {
  schemas: ['Search'],
  mapToProps(results, realm) {
    return {
      realm,
      searchs: results.searches || [],
    };
  },
});
import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';


export default class Search extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded style={{ backgroundColor: '#F5F5F5'}}>
          <Item>
            <Icon name="ios-search" />
            <Input />
            <Button transparent onPress={ () => alert('ds') }>
            <Text style={{color: 'black'}} >Search</Text>
          </Button>
          </Item>

        </Header>
      </Container>
    );
  }
}

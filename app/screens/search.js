import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';


export default class Search extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
                  <Button transparent onPress={ () => alert('ds') }>
            <Text>Search</Text>
          </Button>
          </Item>

        </Header>
      </Container>
    );
  }
}

import React, { Component } from 'react';

import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Button,Icon } from 'native-base';

export default class Fav extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem avatar onPress={ () =>  this.props.navigation.navigate('Profile', {name: 'Lucy'}) }>
              <Left>
                <Thumbnail source={{ uri: 'https://www.atomix.com.au/media/2015/06/atomix_user31.png' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you </Text>
              </Body>
              <Right>
                <Button small bordered danger>
                  <Icon name='trash' />
                </Button>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://www.atomix.com.au/media/2015/06/atomix_user31.png' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what </Text>
              </Body>
              <Right>
                <Button small bordered danger>
                  <Icon name='trash' />
                </Button>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://www.atomix.com.au/media/2015/06/atomix_user31.png' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you l .</Text>
              </Body>
              <Right>
                <Button small bordered danger>
                  <Icon name='trash' />
                </Button>
              </Right>
            </ListItem>            
          </List>
        </Content>
      </Container>
    );
  }
}

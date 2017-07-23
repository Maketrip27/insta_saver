import React, { Component } from 'react';
import {
  StyleSheet,Image,ToastAndroid,ProgressBar
} from 'react-native';
import { Container, Content, Item, Input, Card, CardItem, Text, Button, Thumbnail,Body,Left,Right,Icon,Spinner,List,Header,Title } from 'native-base';

export default class Post extends Component {

  render() {
    return (
     <Container>
       <Header style={{ backgroundColor: '#F5F5F5'}}>
        <Left style={{flex: 1}}>
        </Left>
        <Body style={{flex: 1}}>
          <Title style={{color: 'black'}}>Add Post Url</Title>
        </Body>
        <Right/>
      </Header>
        <Content>
          <Card style={styles.container}>
            <CardItem>
              <Item>
                <Input placeholder="Paste Url" />
              </Item>
            </CardItem>
            <CardItem>
              <Button bordered>
                <Text>Fetch Media</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

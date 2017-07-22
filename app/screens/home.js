import React, { Component } from 'react';
import {
  StyleSheet,Image
} from 'react-native';
import { Container, Content, Item, Input, Card, CardItem, Text, Button, Thumbnail,Body,Left,Right,Icon } from 'native-base';

const feeds = [
{
  name: 'Salman khan',
  profile: 'http://media2.intoday.in/indiatoday/images/stories/salman-khan_660_042313053619_020614072820.jpg',
  data: '19-07-2017',
  post: 'https://shareonline.in/wp-content/uploads/2016/05/salman-khan-images-2013-kick-salman-khan-body-2013-in-kick-83-rIWhvJ.jpg'
},
{
  name: 'Dwayne Johnson',
  profile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/220px-Dwayne_Johnson_2%2C_2013.jpg',
  data: '20-07-2018',
  post: 'http://pinthisstar.com/images/dwayne-johnson-hair-10.jpg'
},
{
  name: 'Priyanka Chopra',
  profile: 'http://starsunfolded.1ygkv60km.netdna-cdn.com/wp-content/uploads/2014/06/Priyanka-Chopra-5.jpg',
  data: '22-07-2018',
  post: 'http://starsunfolded.1ygkv60km.netdna-cdn.com/wp-content/uploads/2014/06/Priyanka-Chopra-5.jpg'
},
{
  name: 'Deepika',
  profile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Deepika_Padukone_at_Piku_event.jpg/170px-Deepika_Padukone_at_Piku_event.jpg',
  data: '21-07-2017',
  post: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Deepika_Padukone_at_Piku_event.jpg/170px-Deepika_Padukone_at_Piku_event.jpg'
}
  
]
export default class Home extends Component {

  _feeds(){ 
    return feeds.map((data) => {
      return (
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: data.profile}} />
                  <Body>
                    <Text>{data.name}</Text>
                    <Text note>{data.date}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image resizeMode='cover' source={{uri: data.post}} style={{height: 200, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
      )
    })
  }

  render() {
    return (
     <Container>
        <Content>
          <Card style={styles.container}>
            <CardItem>
              <Item>
                <Input placeholder="Paste Url" />
              </Item>
            </CardItem>
            <CardItem>
              <Button bordered>
                <Text>Check Url</Text>
              </Button>
            </CardItem>
          </Card>
          {this._feeds()}
          {this._feeds()}
          {this._feeds()}
          {this._feeds()}

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

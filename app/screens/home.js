import React, { Component,Video } from 'react';
import {
  StyleSheet,Image,ToastAndroid,ScrollView,
} from 'react-native';
import { Container, Content, Item, Input, Card, CardItem, Text, Button, Thumbnail,Body,Left,Right,Icon,Spinner,List,Header,Title } from 'native-base';

import RNFetchBlob from 'react-native-fetch-blob'

const feeds = [
{
  name: 'Salman khan',
  profile: 'http://media2.intoday.in/indiatoday/images/stories/salman-khan_660_042313053619_020614072820.jpg',
  date: 'beginhuman',
  post: 'https://shareonline.in/wp-content/uploads/2016/05/salman-khan-images-2013-kick-salman-khan-body-2013-in-kick-83-rIWhvJ.jpg',
  tag_text: 'At #IIFA rehearsals .. Choreographed by #mudassarkhan #NewYork'
},
{
  name: 'Dwayne Johnson',
  profile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/220px-Dwayne_Johnson_2%2C_2013.jpg',
  date: 'therock',
  post: 'http://pinthisstar.com/images/dwayne-johnson-hair-10.jpg',
  tag_text: 'therock Chivalrous gentleman.'
},
{
  name: 'Priyanka Chopra',
  profile: 'http://starsunfolded.1ygkv60km.netdna-cdn.com/wp-content/uploads/2014/06/Priyanka-Chopra-5.jpg',
  date: 'pc',
  post: 'http://starsunfolded.1ygkv60km.netdna-cdn.com/wp-content/uploads/2014/06/Priyanka-Chopra-5.jpg',
  tag_text: 'Awww too sweet! Thank you for the hospitality #birthdaycontinues'
},
{
  name: 'Deepika',
  profile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Deepika_Padukone_at_Piku_event.jpg/170px-Deepika_Padukone_at_Piku_event.jpg',
  date: 'deep',
  post: 'http://www.planwallpaper.com/static/images/black-apple-wallpaper-hd-hd-wallpapers-landscape-animals-photo-wallpaper-hd.jpg',
  tag_text: 'Because every picture tells a story '
}
  
]
export default class Home extends Component {


    _getFilename(url)
    {
       if (url)
       {
          var m = url.toString().match(/.*\/(.+?)\./);
          if (m && m.length > 1)
          {
             return m[1];
          }
       }
       return "";
    }

  _download_image(url){
    let dirs = RNFetchBlob.fs.dirs
    let file_name = this._getFilename(url);
    RNFetchBlob
    .config({
      // response data will be saved to this path if it has access right.
      path : dirs.DCIMDir+'/inasta/'+file_name+'.png'
    })
    .fetch('GET', url, {
      //some headers ..
    })
    .progress({ interval : 100 }, (received, total) => {
        console.log('progress ' + Math.floor(received/total*100) + '%')
    })
    .then((res) => {
      // the path should be dirs.DocumentDir + 'path-to-file.anything'
      // alert('The file saved to '+ res.path())
      ToastAndroid.showWithGravity('file downloadedd to :- '+res.path(), ToastAndroid.SHORT, ToastAndroid.CENTER);
    })
  }
  _feeds(){ 
    return feeds.map((data) => {
      return (
            <List>
              <CardItem>
                <Left>
                  <Thumbnail small source={{uri: data.profile}} />
                  <Body>
                    <Text>{data.name}</Text>
                    <Text note>{data.date}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    {data.tag_text}
                  </Text>
                  </Body>
              </CardItem>
              <CardItem cardBody>
                <ScrollView horizontal>
                  <Image resizeMode='cover' source={{uri: data.post}} style={{height: 300,width:360, flex: 1, justifyContent:'flex-end'}}>
                  <CardItem style={{ backgroundColor: 'transparent', height: 40, backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <Left>
                      <Button transparent>
                        <Icon active name="ios-heart" style = {{color: 'red', fontSize: 24}} />
                        <Text style = {{color: 'white', fontSize: 12}}> 12 </Text>
                      </Button>
                      <Button transparent>
                        <Icon active name="ios-chatbubbles-outline" style = {{color: 'white', fontSize: 24}}/>
                        <Text style = {{color: 'white', fontSize: 12}}> 4 </Text>
                      </Button>
                    </Left>
                    <Right>
                      <Button transparent onPress={ () =>  this._download_image(data.post)}>
                        <Icon active name="ios-code-download" style = {{color: 'white', fontSize: 30}}/>
                        <Text style = {{color: 'white', fontSize: 12}}>  Save </Text> 
                      </Button>
                    </Right>
                  </CardItem>
                  </Image>
                  <Image resizeMode='cover' source={{uri: data.post}} style={{height: 300,width:360, flex: 1, justifyContent:'flex-end'}}>
                  <CardItem style={{ backgroundColor: 'transparent', height: 40, backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <Left>
                      <Button transparent>
                        <Icon active name="ios-heart" style = {{color: 'red', fontSize: 24}} />
                        <Text style = {{color: 'white', fontSize: 12}}> 12 </Text>
                      </Button>
                      <Button transparent>
                        <Icon active name="ios-chatbubbles-outline" style = {{color: 'white', fontSize: 24}}/>
                        <Text style = {{color: 'white', fontSize: 12}}> 4 </Text>
                      </Button>
                    </Left>
                    <Right>
                      <Button transparent onPress={ () =>  this._download_image(data.post)}>
                        <Icon active name="ios-code-download" style = {{color: 'white', fontSize: 30}}/>
                        <Text style = {{color: 'white', fontSize: 12}}>  Save </Text> 
                      </Button>
                    </Right>
                  </CardItem>
                  </Image>
                </ScrollView>
              </CardItem>
            </List>
      )
    })
  }
  _video(){
    return (
            <List>
              <CardItem>
                <Left>
                  <Thumbnail small source={{uri: 'http://starsunfolded.1ygkv60km.netdna-cdn.com/wp-content/uploads/2014/06/Priyanka-Chopra-5.jpg'}} />
                  <Body>
                    <Text>Pc</Text>
                    <Text note>10-2-2017</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem >
          

              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="ios-heart" style = {{color: 'red', fontSize: 24}} />
                    <Text style = {{color: 'black', fontSize: 12}}> 12 </Text>
                  </Button>
                  <Button transparent>
                    <Icon active name="ios-chatbubbles-outline" style = {{color: 'black', fontSize: 24}}/>
                    <Text style = {{color: 'black', fontSize: 12}}> 4 </Text>
                  </Button>
                </Left>
                <Right>
                  <Button transparent >
                    <Icon active name="ios-code-download" style = {{color: 'black', fontSize: 30}}/>
                    <Text style = {{color: 'black', fontSize: 12}}>  Save </Text> 
                  </Button>
                </Right>
              </CardItem>
                <Video source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}  style={styles.backgroundVideo} />
            </List>
    );
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
  backgroundVideo: {
    position: 'relative',
    height: 300,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

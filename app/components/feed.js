import React, { Component,Video } from 'react';
import {
  StyleSheet,Image,ToastAndroid,ScrollView,
} from 'react-native';
import { Container, Content, Item, Input, Card, CardItem, Text, Button, Thumbnail,Body,Left,Right,Icon,Spinner,List,Header,Title } from 'native-base';

import RNFetchBlob from 'react-native-fetch-blob'

export class Feed extends Component {

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

  render() {
    return (
            <List>
              <CardItem>
                <Left>
                  <Thumbnail small source={{uri: this.props.data.profile}} />
                  <Body>
                    <Text>{this.props.data.full_name}</Text>
                    <Text note>{this.props.data.username}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    {this.props.data.tag_text}
                  </Text>
                  </Body>
              </CardItem>
              <CardItem cardBody>
                <ScrollView horizontal>
                  <Image resizeMode='cover' source={{uri: this.props.data.image_url}} style={{height: 300,width:360, flex: 1, justifyContent:'flex-end'}}>
                  <CardItem style={{ backgroundColor: 'transparent', height: 40, backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <Left>
                      <Button transparent>
                        <Icon active name="ios-heart" style = {{color: 'red', fontSize: 24}} />
                        <Text style = {{color: 'white', fontSize: 12, marginLeft: 5}}>{this.props.data.likes}</Text>
                      </Button>
                      <Button transparent>
                        <Icon active name="ios-chatbubbles-outline" style = {{color: 'white', fontSize: 24}}/>
                        <Text style = {{color: 'white', fontSize: 12,  marginLeft: 5}}>{this.props.data.comments}</Text>
                      </Button>
                    </Left>
                    <Right>
                      <Button transparent onPress={ () =>  this._download_image(this.props.data.image_url)}>
                        <Icon active name="ios-code-download" style = {{color: 'white', fontSize: 30}}/>
                        <Text style = {{color: 'white', fontSize: 12}}>  Save </Text> 
                      </Button>
                    </Right>
                  </CardItem>
                  </Image>
                </ScrollView>
              </CardItem>
            </List>
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
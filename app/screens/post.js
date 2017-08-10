import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  ToastAndroid,
  ProgressBar,
  Clipboard,
  Keyboard,View
} from 'react-native';
import { Container, Content, Item, Input, Card, CardItem, Text, Button, Thumbnail,Body,Left,Right,Icon,Spinner,List,Header,Title } from 'native-base';

import { Feed } from '../components/feed.js';
const post_data = {}
export default class Post extends Component {

 constructor(props) {
  super(props);
    this.state = {
      post_url: '',
      data: {}
    };
  }

  _getMediaFromPost(){
    Keyboard.dismiss();
    url = this.state.post_url+"?__a=1"
    // JSON.parse( open( url ).read )["graphql"]["shortcode_media"]["display_url"]
    try{
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
        }).then((response) => response.json())
        .then((responseData) =>
        {
            // data = responseData.users.slice(0, 30);
            // this.setState({data: data})
            post_data.profile = responseData.graphql.shortcode_media.owner.profile_pic_url;
            post_data.username = responseData.graphql.shortcode_media.owner.username;
            post_data.name = responseData.graphql.shortcode_media.owner.full_name;
            post_data.images = responseData.graphql.shortcode_media.display_url;
            post_data.likes = responseData.graphql.shortcode_media.edge_media_preview_like.count;
            post_data.comments = responseData.graphql.shortcode_media.edge_media_to_comment.count;
            post_data.tag_text = responseData.graphql.shortcode_media.edge_media_to_caption.edges[0].node.text;
            console.log(post_data);
            this.setState({data: post_data});
        })
        .catch(function(error) {
          console.log(error)
        });
    }catch(error){
      console.log(error)
    }
  }
  
  async _getContent() {
    var content = await Clipboard.getString();
    if (content.indexOf('https://www.instagram.com/p/') !== -1){
      this.setState({post_url: content});
      this._getMediaFromPost()
    }
  }

  componentWillMount(){
    this._getContent();
  }
  render() {
    return (
     <Container>
        <Content>
          <View style={{flex: 1, flexDirection:'row', margin: 5,backgroundColor: '#F5F5F5'}}>  
            <Input placeholder="Paste Url" 
              onChangeText={(text) => {this.setState({post_url: text})}}
              value = {this.state.post_url}
            />
            <Button small  style={{marginTop:8, backgroundColor:'gray'}} onPress={ () => this._getMediaFromPost() }>
              <Text style={{color: 'white'}} >Fetch</Text>
            </Button>
          </View>
          <Feed data = {this.state.data}/>
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

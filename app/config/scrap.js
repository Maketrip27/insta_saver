
import React,{Component} from 'react';



exports._search_user = function(query){
  // alert(query)
  var data = []
  url = "https://www.instagram.com/web/search/topsearch/"

  params = '?query='+query
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
                data = responseData.users.slice(0 ,2);
                console.log(responseData.users.slice(0 ,2));
            })
            .catch(function(error) {

            });
        }catch(error){
        }
        return (data);
}

exports.get_user_media_nodes = function(username, max_id){
    url = "https://www.instagram.com/#{ username }/?__a=1"
    params = ""
    // params = "&max_id=#{ max_id }" if max_id

    JSON.parse( open( url + params ).read )["user"]["media"]["nodes"]
}

exports.get_user = function(username, max_id){
    url = "https://www.instagram.com/#{ username }/?__a=1"
    params = ""
    // params = "&max_id=#{ max_id }" if max_id

    JSON.parse( open( url + params ).read )["user"]
}

exports.get_media = function(username, max_id){
    url = "https://www.instagram.com/p/#{ code }/?__a=1"
    params = ""
    JSON.parse( open( url + params ).read )["graphql"]["shortcode_media"]["display_url"]
}
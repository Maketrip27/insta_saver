
import React,{Component} from 'react';



exports.search = function(query){
  url = "https://www.instagram.com/web/search/topsearch/"
  params = "?query=#{ query }"
  JSON.parse( open( url + params ).read )
}

exports.get_user_media_nodes = function(username, max_id){
    url = "https://www.instagram.com/#{ username }/?__a=1"
    params = ""
    params = "&max_id=#{ max_id }" if max_id

    JSON.parse( open( url + params ).read )["user"]["media"]["nodes"]
}

exports.get_user = function(username, max_id){
    url = "https://www.instagram.com/#{ username }/?__a=1"
    params = ""
    params = "&max_id=#{ max_id }" if max_id

    JSON.parse( open( url + params ).read )["user"]
}

exports.get_media = function(username, max_id){
    url = "https://www.instagram.com/p/#{ code }/?__a=1"
    params = ""
    byebug
    JSON.parse( open( url + params ).read )["graphql"]["shortcode_media"]["display_url"]
}
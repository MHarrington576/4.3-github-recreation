var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');
var githubToken = require('./gitapikey.js');

if(githubToken !== undefined){
  $.ajaxSetup({
    headers: {
      'Authorization': 'token ' + githubToken.token;
    }
  })
}

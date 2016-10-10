var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');
var githubToken = require('./gitapikey.js');


$.ajax('https://api.github.com/users/MHarrington576').then(displayThisAttributeList);

function displayThisAttributeList(data){
  console.log(data);

  var profileAttributes = data; // data is a single object in this case
  var $profileAttributeContainer = $('.profile-nav'); // html container where data will be appended

  var profileSource = $('#profile-nav-template').html(); // converts template into html
  var profileTemplate = Handlebars.compile(profileSource); // compiles a template so it can be executed immediately

  $profileAttributeContainer.append(profileTemplate(profileAttributes));
}

$.ajax('https://api.github.com/users/MHarrington576/orgs').then(displayOrganizations);

function displayOrganizations(data){
  var organizations = data;
  var $orgContainer = $('.org-storage');

  var orgSource = $('#organizations-template').html();
  var orgTemplate = Handlebars.compile(orgSource);

  _.each(organizations, function(org){
    $orgContainer.append(orgTemplate(org));
  });
}



$.ajax('https://api.github.com/users/MHarrington576').then(displayAttributeList);

function displayAttributeList(data){
  var attributes = data;
  var $attributeContainer = $('.sidebar');

  var source = $('#sidebar-template').html();
  var template = Handlebars.compile(source);

  $attributeContainer.append(template(attributes));
}


$.ajax('https://api.github.com/users/MHarrington576/repos').then(displayRepos);

function displayRepos(data){
  console.log(data);

  var repos = data;
  var $repoContainer = $('#repository-list');

  var source = $('#repos-template').html();
  var template = Handlebars.compile(source);

  _.each(repos, function(repo){
    $repoContainer.append(template(repo));
  });
}


if (githubToken !== undefined) {
    $.ajaxSetup({
        headers: {
            'Authorization': 'token ' + githubToken.token
        }
    });
}

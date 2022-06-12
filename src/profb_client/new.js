var profbent = require('profb-js-client');
var defaultClient = profbent.ApiClient.instance;
// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME'
basic.password = 'YOUR PASSWORD'

var api = new profbent.AuthApi()
var opts = { 
  'body': new profbent.User() // {User} A new user record to add to the system
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.registerNewUser(opts, callback)
var Reflux = require('reflux');
var $ = require('jquery');
var UserActions = require('../actions/userActions');
var environment = require('../../../utils/env/environment.js');


var UserStore = Reflux.createStore({
    listenables: UserActions,
    onAddUser : function (username,password) {
        $.ajax({
          url: environment.base_uri + '/user/add',
          type: 'POST',
          contentType: 'application/x-www-form-urlencoded',
          data: {username:username,password:password},
          dataType: "json",
          context:this,
          success: function(data) {
              console.log(data);
              document.cookie = "s=" + data['token']+ "; path=/"; //the 'path=/' make the cookie global
              document.cookie = "sid=" + data['user']+"; path=/";
              location.href = environment.base_uri;
          }
        });
    }
});

module.exports = UserStore;
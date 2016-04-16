var Reflux = require('reflux');
var $ = require('jquery');
var CityActions = require('../actions/cityActions');
var environment = require('../../../utils/env/environment.js');


var results = [];

var CityStore = Reflux.createStore({
    listenables: CityActions,
    getInitialState : function () {
            return{
                results : results
            }
    },
    onSearch : function (city) {
        var route = environment.base_uri + '/'+city;
        var route1 = "https://api.worldweatheronline.com/free/v2/weather.ashx?q="+city+"&num_of_days=5&key=63e2008bb395370c0510bbac7155b&tp=24&format=json";
        $.ajax({
          url: route1,
          type: 'POST',
          contentType: 'application/x-www-form-urlencoded',
          data: {},
          dataType: "json",
          context:this,
          success: function(data) {
            if (data) {
              console.log(data);
              results = results.concat(data);
              this.trigger(results);
              //location.href = "http://localhost:3000/city/"+city;
              location.href = environment.base_uri;
            }else{
              console.log("Search Result KO");
            }
          }
        });
    }
});

module.exports = CityStore;
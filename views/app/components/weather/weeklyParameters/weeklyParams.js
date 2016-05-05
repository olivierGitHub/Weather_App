var React = require('react');
var Highcharts = require('highcharts');


var WeeklyParams = React.createClass({
  componentDidMount : function () {

    var arrayIntHumidity = this.props.params.humidity.map(s => Number(s));
    var arrayIntVisibility = this.props.params.visibility.map(Number);

    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'paramsContainer',
            type: 'column'
        },
        title: {
            text: 'Weather parameters'
        },
        xAxis: {
            title: {
                text: 'Day'
            },
            tickInterval: 1
        },
        yAxis: {
            title: {
                text: 'Params'
            },
            tickInterval: 1
        },
        series: [{
            name: 'Humidity',
            data: arrayIntHumidity
        }, {
            name: 'Visibility',
            data: arrayIntVisibility
        }]
    });
  },
  render : function () {
    return (
      <div id="paramsContainer" className="highchartsDiv">
      </div>
      )
  }
});

module.exports = WeeklyParams;
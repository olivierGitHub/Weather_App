var React = require('react');
var Highcharts = require('highcharts');

var WeeklyEvolution = React.createClass({
  componentDidMount : function () {

    var arrayIntMax = this.props.evolution.maxtempC.map(s => Number(s));
    var arrayIntMin = this.props.evolution.mintempC.map(Number);

    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'highchartsContainer',
            type: 'areaspline'
        },
        title: {
            text: 'Temperature'
        },
        xAxis: {
            title: {
                text: 'Day'
            },
            tickInterval: 1
        },
        yAxis: {
            title: {
                text: 'Temperature'
            },
            tickInterval: 1
        },
        series: [{
            name: 'Max Temperature',
            data: arrayIntMax
        }, {
            name: 'Min Temperature',
            data: arrayIntMin
        }]
    });
  },
  render : function () {
    return (
      <div id="highchartsContainer" className="highchartsDiv">
      </div>
      )
  }
});

module.exports = WeeklyEvolution;
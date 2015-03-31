/** @jsx React.DOM */

var React = require('react');
var ReactART = require('react-art');
var Group = ReactART.Group;
var ARTText = ReactART.Text;
var Shape = ReactART.Shape;
var Surface = ReactART.Surface;
var Rectangle = require('react-art/lib/Rectangle.art');
var d3 = require('d3');

var monthScale = d3.scale.linear().domain([0, 12]).range([0, 400 - 20]);
var valueScale = d3.scale.linear().domain([0, 10]).range([{
  color: '#add8e6',
  height: 0
}, {
  color: '#4169e1',
  height: 400
}]);


class Component extends React.Component {
  handleMouseMove(d, e) {
    console.log('mousemove ', d, e.pageX, e.pageY);
  }

  getRects() {
    return this.props.data.map((d)=> {
      var value = valueScale(d.value);
      var height = value.height;
      var y = 400 - height;
      var x = monthScale(d.month);
      return <Rectangle width={10} height={height} x={x} y={y} onMouseMove={this.handleMouseMove.bind(this, d)} fill={value.color} key={d.month + ''}/>;
    });
  }

  getMonths() {
    var months = [];
    for (var i = 1; i <= 12; i++) {
      var value = monthScale(i) + 20;
      months.push(<Group x={value} y={400}>
        <ARTText stroke="#000" font={{fontSize: 20}}>{i + ''}</ARTText>
      </Group>);
    }
    return months;
  }

  getMarkers() {
    var texts = [];
    for (var i = 1; i <= 10; i++) {
      var value = valueScale(i);
      var height = value.height;
      var y = 400 - height;
      texts.push(<Group x={0} y={y}>
        <ARTText stroke="#000" font={{fontSize: 20}}>{i + ''}</ARTText>
        <Shape d="M0,0 L20,0 Z M20,0" stroke="#000"/>
      </Group>);
    }
    return texts;
  }

  render() {
    return <Surface width={440} height={420}>
      {this.getMarkers()}
      {this.getMonths()}
      <Group x={20} y={0} width={400} height={400}>
        <Shape d="M0,0 L0,400 Z M0,400" stroke="#000" strokeWidth={2}/>
        <Shape d="M0,400 L400,400 Z M400,400" stroke="#000" strokeWidth={2}/>
    {this.getRects()}
      </Group>
    </Surface>;
  }
}

var data = [];
for (var i = 1; i < 13; i++) {
  data.push({
    month: i,
    value: Math.floor(Math.random() * 10) + 1
  });
}
console.log('data', data);
React.render(<div style={{width: 500, margin: 'auto'}}>
  <Component data={data}/>
</div>, document.getElementById('__react-content'));
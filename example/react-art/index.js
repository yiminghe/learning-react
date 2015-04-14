/** @jsx React.DOM */

var React = require('react');
var ReactART = require('react-art');
var Group = ReactART.Group;
var ARTText = ReactART.Text;
var Shape = ReactART.Shape;
var Surface = ReactART.Surface;
var Rectangle = require('react-art/lib/Rectangle.art');
var d3 = require('d3');
var monthText=['','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Dec'];
var monthScale = d3.scale.linear().domain([0, 12]).range([0, 400 - 20]);
var valueScale = d3.scale.linear().domain([0, 10]).range([{
  color: '#add8e6',
  height: 0
}, {
  color: '#4169e1',
  height: 400
}]);


class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleMouseMove(d, e) {
    this.setState({
      tip: {
        content: monthText[d.month] + ' : ' + d.value,
        x: e.pageX,
        y: e.pageY
      }
    });
    console.log('mousemove ', d, e.pageX, e.pageY);
  }

  handleMouseOut() {
    this.setState({
      tip: null
    });
  }

  getRects() {
    return this.props.data.map((d)=> {
      var value = valueScale(d.value);
      var height = value.height;
      var y = 400 - height;
      var x = monthScale(d.month);
      return <Rectangle width={10} height={height} x={x} y={y}
        onMouseOut={this.handleMouseOut.bind(this)}
        onMouseMove={this.handleMouseMove.bind(this, d)}
        fill={value.color} key={d.month + ''}/>;
    });
  }

  getXAxis() {
    var months = [];
    for (var i = 1; i <= 12; i++) {
      var value = monthScale(i)-5;
      months.push(<Group x={value} y={400}>
        <ARTText stroke="#000" font={{fontSize: 10}}>{monthText[i]}</ARTText>
      </Group>);
    }
    return <Group x={20}>
      <Shape d="M0,400 L400,400 Z M400,400" stroke="#000" strokeWidth={2}/>{months}
    </Group>;
  }

  getYAxis() {
    var values = [];
    for (var i = 1; i <= 10; i++) {
      var value = valueScale(i);
      var height = value.height;
      var y = 400 - height;
      values.push(<Group y={y}>
        <ARTText stroke="#000" font={{fontSize: 20}}>{i + ''}</ARTText>
        <Shape d="M0,0 L20,0 Z M20,0" stroke="#000"/>
      </Group>);
    }
    return <Group>
      <Shape d="M20,0 L20,400 Z M20,400" stroke="#000" strokeWidth={2}/>{values}
    </Group>;
  }

  componentDidMount() {
    var rootNode = React.findDOMNode(this);
    this.rootOffset = rootNode.getBoundingClientRect();
  }

  componentDidUpdate() {
    this.componentDidMount();
  }

  getTip() {
    var tip = this.state.tip;
    if (!tip) {
      return;
    }
    return <div style={{
      position: 'absolute',
      border: '1px solid red',
      left: tip.x - this.rootOffset.left + 10,
      top: tip.y - this.rootOffset.top
    }}>{tip.content}</div>;
  }

  render() {
    var tip = this.getTip();

    return <div style={{width: 500, height: 420, position: 'relative'}}>
    {tip}
      <Surface width={500} height={420}>
      {this.getYAxis()}
      {this.getXAxis()}
        <Group x={20} y={0} width={400} height={400}>
    {this.getRects()}
        </Group>
      </Surface>
    </div>;
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
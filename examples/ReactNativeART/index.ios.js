/**
 * Copyright 2013 Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var Dimensions = require('Dimensions');
var windowWidth = Dimensions.get('window').width;
var windowHeight = Dimensions.get('window').height;

console.log(windowHeight, windowWidth);

var React = require('react-native');
var ReactART = require('ReactNativeART');
var {
  NavigatorIOS,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  } = React;

var Group = ReactART.Group;
var Shape = ReactART.Shape;
var Surface = ReactART.Surface;
var Transform = ReactART.Transform;
var ARTText = ReactART.Text;
var Rectangle = require('./Rectangle');

const d3 = require('d3');
const monthText = ['', 'Jan', 'Feb', 'Mar', 'Apr',
  'May', 'Jun', 'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Dec'];


class Bar extends React.Component {
  constructor(props) {
    // for label right and bottom
    super(props);
    this.gap = 20;
    this.monthScale = d3.scale.linear().domain([0, 12]).range([0, props.width - this.gap]);
    this.valueScale = d3.scale.linear().domain([0, 10]).range([{
      color: '#add8e6',
      height: 0,
    }, {
      color: '#4169e1',
      height: props.height - this.gap,
    }]);
    this.rectangleWidth = (props.width - this.gap) / 24;
  }

  getRects() {
    return this.props.data.map((d) => {
      const value = this.valueScale(d.value);
      const height = value.height;
      const y = this.props.height - height - this.gap;
      const x = this.monthScale(d.month) - this.rectangleWidth * 1.5;
      return (<Rectangle width={this.rectangleWidth} height={height} x={x} y={y}
                         fill={value.color} key={d.month + ''}/>);
    });
  }

  getXAxis() {
    const months = [];
    var height = this.props.height - this.gap;
    for (let i = 1; i <= 12; i++) {
      const value = this.monthScale(i) - this.rectangleWidth * 2;
      months.push((<Group x={value} y={height}>
        <ARTText stroke="#000" font={{fontSize: 10,fontFamily:"Arial"}}>{monthText[i]}</ARTText>
      </Group>));
    }
    var width = this.props.width - this.gap;
    return (<Group x={this.gap}>
      <Shape d={`M0,${height} L${width},${height} Z M${width},${height}`} stroke="#000" strokeWidth={2}/>
      {months}
    </Group>);
  }

  getYAxis() {
    const values = [];
    var gap = this.gap;
    var yHeight = this.props.height - this.gap;
    for (let i = 1; i <= 10; i++) {
      const value = this.valueScale(i);
      const height = value.height;
      const y = yHeight - height;
      values.push(<Group y={y}>
        <ARTText stroke="#000" font={{fontSize: 20,fontFamily:"Arial"}}>{i + ''}</ARTText>
        <Shape d={`M0,0 L${gap},0 Z M${gap},0`} stroke="#000"/>
      </Group>);
    }
    return (<Group>
      <Shape d={`M${gap},0 L${gap},${yHeight} Z M${gap},${yHeight}`} stroke="#000" strokeWidth={2}/>
      {values}
    </Group>);
  }

  render() {
    return (<Surface width={this.props.width} height={this.props.height}>
      {this.getYAxis()}
      {this.getXAxis()}
      <Group x={this.gap} y={0} style={{flex:1}} height={this.props.height-this.gap}>
        {this.getRects()}
      </Group>
    </Surface>);
  }
}

const data = [];

for (let i = 1; i < 13; i++) {
  data.push({
    month: i,
    value: Math.floor(Math.random() * 10) + 1,
  });
}

class ReactNativeART extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
        component: Bar,
        title: 'Bar Chart',
        passProps: { data: data },
      }}/>
    );
  }
}

class ReactNativeART2 extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Bar data={data} width={windowWidth-100} height={windowHeight/2}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeART', () => ReactNativeART2);

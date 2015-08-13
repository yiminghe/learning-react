## 一步步实现多选框

### 定义

多选框，英文 checkbox，浏览器原生提供的组件为 `<input type="checkbox" />`，实际应用中由于设计的主题风格不同，一般都不使用系统自带的组件而是由开发者实现.


### 分析功能

多选框主要的功能是可以实现并记忆选中状态并通知通知，支持的设备包括鼠标，键盘，触摸屏等。


### react 实现

#### api 设计

react 的 api 一般只是属性，属性可以分为数据属性和回调函数，对应于这个组件来说，应该包括 checked(当前是否选中)，defaultChecked(初始是否选中)以及回调 onChange 函数.
关于为什么区分 checked 和 defaultChecked 属性，可详细阅读 http://reactjs.cn/react/docs/forms.html 中的受限组件部分。

#### 使用例子

先把使用的例子写出来，后面一步步实现功能即可

```html
<script src="https://a.alipayobjects.com/??es5-shim/4.0.5/es5-shim.js,es5-shim/4.0.5/es5-sham.js,html5shiv/3.7.2/src/html5shiv.js,react/0.13.3/react.js,react/0.13.3/JSXTransformer.js"></script>
<div id="container"></div>
<script type="text/jsx">
    var Checkbox; //TODO
    
    var Test = React.createClass({
      getInitialState(){
        return {
          checked: false
        };
      },
      onChange(){
        this.setState({
          checked: !this.state.checked
        });
      },
      render(){
        return <div>
          <p>受限： <Checkbox checked={this.state.checked} /></p>
          <p>不受限： <Checkbox defaultChecked={true} onChange={this.onChange}/></p>
        </div>;
      }
    });
    React.render(<Test />, document.getElementById('container'));
</script>
```

例子中包含两个组件实例：

第一个为受限组件

```html
<Checkbox checked={this.state.checked} />
```

用户点击无法切换选中与非选中状态，这个组件的选中与非选中状态由属性控制。

第二个为非受限组件

```html
<Checkbox defaultChecked={true} onChange={this.onChange}/></p>
```

只设定了初始值，用户之后可以通过点击切换选中与非选中状态，并且通过 onChange 属性设定回调函数，当组件状态改变后，再根据这个组件的状态设置上面受限组件的状态。

#### 属性的默认初始值

checked 为受限属性所以不能设置默认值，多选框一般默认为不选中，所以 defaultChecked 为 false，同时设置 onChange 为空函数避免以后的频繁检测。
根据以上分析实现组件的 getDefaultProps 方法：

```js
var Checkbox = React.createClass({
  getDefaultProps() {
    return {
      defaultChecked: false,
      onChange(){}
    };
  }
});
```


#### 状态分析

checkbox 只有一个状态，表示该组件的选中与否，并且这个状态的初始值有两种方式来设定，如果当前组件指定了 checked 的属性，那么初始状态就取 checked 的属性值，否则就取 defaultChecked 的属性值. 根据以上分析实现组件的 getInitialState 方法

```js
var Checkbox = React.createClass({
  getDefaultProps() {
    return {
      defaultChecked: false,
      onChange(){}
    };
  },
  
  getInitialState() {
    var state = {};
    var props = this.props;
    if('checked' in props){
      state.checked = props.checked;
    } else {
      state.checked = props.defaultChecked;
    }
    return state;
  }
});
```

#### 界面描述

接着根据组件的状态描述组件的界面，这里就简单点处理，如果组件为选中状态则为背景色红，否则无背景色. 根据以上描述实现 render 方法：

```js
var Checkbox = React.createClass({
  getDefaultProps() {
    return {
      defaultChecked: false,
      onChange(){}
    };
  },
  
  getInitialState() {
    var state = {};
    var props = this.props;
    if('checked' in props){
      state.checked = props.checked;
    } else {
      state.checked = props.defaultChecked;
    }
    return state;
  },
  
  render() {
    var state = this.state;
    var style = {border:'1px solid red',display:'inline-block',width:100,height:100}
    if(state.checked){
      style.backgroundColor='red';
    }
    return <span style={style}></span>;
  }
});
```

#### 绑定事件

接下来处理组件的交互问题，需要绑定 dom 事件，然后根据组件是否受限来改变组件的状态，最后调用回调函数通知外部用户即可，这里演示下 click 事件，键盘事件同理（需格外设置 dom 的 tabIndex 属性）


```js
var Checkbox = React.createClass({
  getDefaultProps() {
    return {
      defaultChecked: false,
      onChange(){}
    };
  },
  
  getInitialState() {
    var state = {};
    var props = this.props;
    if('checked' in props){
      state.checked = props.checked;
    } else {
      state.checked = props.defaultChecked;
    }
    return state;
  },
  
  onClick() {
    var nextChecked = !this.state.checked; 
    if(!('checked' in this.props)){
      // 非受限
      this.setState({
        checked: nextChecked
      });
    }
    // 回调函数通知外部
    this.props.onChange(nextChecked);
  },
  
  render() {
    var state = this.state;
    var style = {border:'1px solid red',display:'inline-block',width:100,height:100}
    if(state.checked){
      style.backgroundColor='red';
    }
    return <span style={style} onClick={this.onClick}></span>;
  }
});
```

#### 还没有完

现在并没结束，我们知道在受限模式下，用户只能通过重新渲染来改变组件的属性进而改变组件的 ui 展示，那么当用户改变组件的属性后我们需要同步到组件的对应状态，
从而 render 根据状态来渲染 ui. react 中是通过定义 componentWillReceiveProps 来同步属性的更改到 状态，实现如下：

```js
var Checkbox = React.createClass({
  getDefaultProps() {
    return {
      defaultChecked: false,
      onChange(){}
    };
  },
  
  getInitialState() {
    var state = {};
    var props = this.props;
    if('checked' in props){
      state.checked = props.checked;
    } else {
      state.checked = props.defaultChecked;
    }
    return state;
  },
  
  componentWillReceiveProps(newProps){
    // 组件重新渲染了，属性可能有改变，同步属性到状态
    if('checked' in newProps){
      this.setState({
        checked: newProps.checked
      });
    }
  },
  
  onClick() {
    var nextChecked = !this.state.checked; 
    if(!('checked' in this.props)){
      // 非受限
      this.setState({
        checked: nextChecked
      });
    }
    // 回调函数通知外部
    this.props.onChange(nextChecked);
  },
  
  render() {
    var state = this.state;
    var style = {border:'1px solid red',display:'inline-block',width:100,height:100}
    if(state.checked){
      style.backgroundColor='red';
    }
    return <span style={style} onClick={this.onClick}></span>;
  }
});
```

### 结束

这样一个简单的组件就完成，当然优化和功能是永无止境的，比如如何实现只读功能，
如何配合原生的 dom label 标签等，有兴趣的可研究 [rc-checkbox](https://github.com/react-component/checkbox) 项目
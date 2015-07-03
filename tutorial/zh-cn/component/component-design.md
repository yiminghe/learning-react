# react 组件设计原则

## 职责清晰

多个组件协同完成一件事情，而不是一个组件替其他组件完成本该它自己完成的事情。例如

```
<Menu> // menu1
<MenuItem></MenuItem>
<SubMenu>
<Menu> // menu2
</Menu>
</SubMenu>
</Menu>
```

menu1 只应该关心当前 children 中谁是当前高亮项（active），而不应该关注 SubMenu 是否应该展开子菜单（SubMenu 应该由自己是否是 active 决定是否展开子菜单）


## 扁平访问

组件推荐使用状态来控制交互和显示，如果需要显示访问，也尽量实行扁平访问，即只可以调用其 children 的方法。例如

```
<Menu> // menu1
<MenuItem></MenuItem>
<SubMenu>
<Menu> // menu2
</Menu>
</SubMenu>
</Menu>
```

当 menu1 处理键盘事件时，应该事件转发给其 children 处理.

正确

menu:
```
children.forEach(function(c){
  c.handleKeyDown(e);
});
```

submenu:
```
handleKeyDown: function(e){
  if(e.keyCode ==''){
    this.refs.menu.setState({show:1});
  }
}
```

错误：

menu:
```
children.forEach(function(c){
  if(c.type===SubMenu){
    if(e.keyCode ==''){
      c.refs.menu.setState({show:1});
    }
  }
});
```

该示例也应用于第一条

## 信息冗余

尽量避免信息冗余，如果某个 state 可以由其他 state 计算得到，那么就删除这个 state，例如

错误

```
getInitialState: function(){
  return {
    fullName: this.props.firstName + this.props.lastName;
  }
}

render: function(){
  return {this.state.fullName}
}
```

正确

```
render: function(){
  return {this.props.firstName + this.props.lastName}
}
```

## api 尽量和已知概念保持一致

如果 api 可以和已知概念保持一致，那么就用已知的 api

错误

```
<Tabs activeKey="1">
<TabPane tab="title1" eventKey="2" />
<TabPane tab="title2" eventKey="1" />
</Tabs>
```

eventKey 用来唯一标示 tabs 的 tabpane，同时 tabs 通过 activeKey 来匹配 eventKey 来确定哪个 tabpane 是当前 active 的。

正确

```
<Tabs activeKey="1">
<TabPane key="2" />
<TabPane key="1" />
</Tabs>
```

我们可以复用 key 的 api，key 唯一标示了 tabs 的 某个 tabpane，并且对于后期更新也更高效

## 使用标签嵌套

尽量使用标签嵌套而不是属性配置。

错误：

```
<tabs panels={[{tab:'t1',pane:<a>1</a>}, {tab:'t2',pane:<a>2</a>}]}/>
```

正确

```
<Tabs>
<TabPane tab="title1" key="2"><a>1</a></TabPane>
<TabPane tab="title2" key="1"><a>2</a></TabPane>
</Tabs>
```

## 避免使用 ref

使用父组件的 state 控制子组件的状态而不是直接通过 ref 操作子组件

错误

```
{
  handleClick(){
    this.refs.x.setState({count:count});
  }

  render(){
    return <div onClick={this.handleClick}>
    <X ref='x'/>
    </div>
  }
}
```

正确

```
{
  handleClick(){
    this.setState({count:count});
  }

  render(){
    return <div onClick={this.handleClick}>
    <X count={this.state.count}/>
    </div>
  }
}
```

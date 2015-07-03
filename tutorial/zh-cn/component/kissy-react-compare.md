# kissy 与 react 组件编写异同

`react` 在传统组件架构的基础上增加了创新性的 `虚拟 dom` 和 `diff` 算法，减少了传统组件架构的手动局部渲染问题，并使用类似 html 的 `jsx` 语法来构建组件，配合极简的 api，概念很少，入门很快。

本文将介绍如何从传统的组件架构 KISSY 迁移到 react。示例组件为 `menu` 以及 `calendar/date-picker`

kissy menu:  https://github.com/kissyteam/menu
react menu:  https://github.com/react-component/menu

kissy date-picker: https://github.com/kissyteam/date-picker
react calendar: https://github.com/react-component/calendar

## 目录结构

以 `calendar/date-picker` 举例，打开 `lib` 目录可见，组织基本相同，calendar 包括日选择面板以及弹出的月，年，年代选择面板，由四个组件组成:
kissy 对应为 `date-picker.js` `decade-panel.js` `month-panel.js` `year-panel.js`
react 对应为 `Calendar.js` `DecadePanel.js` `MonthPanel.js` `YearPanel.js`

### 组件设计

#### API

kissy:

```js
new DatePicker({
 ...
}).render(container);

new Menu({
 ...
 children:[{
     new MenuItem(…)
}]
}).render(container)
```

react:

```js
React.render(<Calendar …/>, container);
React.render(<Menu …><MenuItem></MenuItem></Menu>,container)
```

api 有很大的相似性，都支持属性，组合等特性，但是 react 将 dom 和组件统一了起来，从而比 kissy 达到更强的一致性：

```js
React.render(<div><span>dom</span><Calendar …/></div>, container);
```

#### 状态与属性

kissy 实际上不区分状态与属性，都是通过 `attr` 来声明：https://github.com/kissyteam/date-picker/blob/2622151aa29ef0c3f2b7d1c541b91699fe105298/lib/date-picker.js#L492

因而需要文档可说明，哪些只能初始化 `config` 的，哪些可以后期 `set`。

而 react 通过 `props` 和 `state` 来区分可以 `config` 的属性以及后期可以 `set(setState)` 的属性。

#### 模版

kissy 的组件架构为传统的 `mvc` 架构，`v` 采用 `xtemplate` 模版，因此 kissy 有单独的 `xtpl` 目录用于存放组件的模版，例如

https://github.com/kissyteam/date-picker/blob/2622151aa29ef0c3f2b7d1c541b91699fe105298/lib/date-picker/xtpl/picker.xtpl

其中又有组件自身实现的一些命令从而打通模版与组件：https://github.com/kissyteam/date-picker/blob/2622151aa29ef0c3f2b7d1c541b91699fe105298/lib/date-picker/xtpl/picker.xtpl#L59

对应组件方法：https://github.com/kissyteam/date-picker/blob/2622151aa29ef0c3f2b7d1c541b91699fe105298/lib/date-picker.js#L271

而 react 实际上没有模版的概念，通过 `jsx` 实现了一个 `虚拟 dom` ，jsx 可以利用全部的 js 特性，和组件沟通也更顺畅，例如 react calendar 主要渲染 “模版” 的地方：

https://github.com/react-component/calendar/blob/a0d7d4e508ecbee676f56a60efa8b931df4aa098/lib/Calendar.js#L466

和组件沟通就顺畅很多： https://github.com/react-component/calendar/blob/a0d7d4e508ecbee676f56a60efa8b931df4aa098/lib/Calendar.js#L509

https://github.com/react-component/calendar/blob/a0d7d4e508ecbee676f56a60efa8b931df4aa098/lib/Calendar.js#L247

#### 局部刷新

kissy 本质上是 `observer/pub/watcher` 模式, 当属性通过 `set` 方法发生改变，用户需要自行定义改变 dom 的代码来局部刷新：https://github.com/kissyteam/date-picker/blob/2622151aa29ef0c3f2b7d1c541b91699fe105298/lib/date-picker.js#L390 十分繁琐，并且大多使用 innerHTML 造成大量 gc

而 react 通过 `setState` ，`diff` ， 以及 `批量更新` 机制，自动并高效得更新 dom，用户只需要关注 `render` 方法即可: https://github.com/react-component/calendar/blob/a0d7d4e508ecbee676f56a60efa8b931df4aa098/lib/Calendar.js#L40

#### 生命周期

react 和 kissy 都会有一些生命周期的 hook 函数可以定义，react 更加丰富

##### react ：
new hook：
- getDefaultProps()
- getInitialState()
- componentWillMount()
- render()
- componentDidMount()
- componentWillUnmount()

update hook:
- componentWillReceiveProps()
- shouldComponentUpdate()
- componentWillUpdate()
- render()
- componentDidUpdate()

##### kissy:
new hook
- initializer  -> getInitialState
- beforeCreateDom
- afterCreateDom
- beforeBindUI
- afterBindUI
- beforeRenderDom
- afterRenderDom -> componentDidMount
- destructor -> componentWillUnmount

常用的 react 都已经包含.

#### 事件

react 通过 `dom 事件全局代理` 以及模版内声明的方式达到了更少的原生事件注册，减少了内存占用，而 kissy 则是自动在组件跟节点进行绑定，如果需要内部节点事件则需要自行绑定

kissy: https://github.com/kissyteam/date-picker/blob/2622151aa29ef0c3f2b7d1c541b91699fe105298/lib/date-picker.js#L238

react: https://github.com/react-component/calendar/blob/a0d7d4e508ecbee676f56a60efa8b931df4aa098/lib/Calendar.js#L472

在组件方面 react 没有自定义事件的概念，也没有自定义事件的冒泡机制，组件事件实际上是通过 `callback` 传递来实现，不知道是优点还是缺点：https://github.com/react-component/menu/blob/45816af15fffb0c6e598602c289e39483fb1d6f7/lib/Menu.js#L162

而在 kissy 组件中 children 的自定义事件默认都会传递到 parent 上，触发 parent 的事件绑定，因此很容易就可以实现组件自定义事件的事件委托。

对于用户使用则无明显不同

kissy:

```js
var menu = new Menu({
   listeners:{
     “select”: function(){
     }
   },
   children:[{
      new MenuItem()
   }]
}).render(container);
```

react:

```js
React.render(<Menu onSelect={function(){}}><MenuItem></MenuItem></Menu>)
```

#### 组件方法

react 中由于 `render` 等都是虚拟 dom，取得组件实例需要通过在虚拟 dom 中配置 `ref` 属性：https://github.com/react-component/menu/blob/45816af15fffb0c6e598602c289e39483fb1d6f7/lib/Menu.js#L152

然后从组件的 `refs` map 中得到对应的组件实例后才能调用其方法：https://github.com/react-component/menu/blob/45816af15fffb0c6e598602c289e39483fb1d6f7/lib/Menu.js#L55

而 kissy 由于没有虚拟 dom 这一层，组件方法可以直接调用：https://github.com/kissyteam/menu/blob/af4d3628ff1bd4d262ffc944297af21ea8039cc4/lib/menu/control.js#L118

另外 react 不推荐组件的方法调用，推荐状态。而 kissy 若这么做，由于属性机制太弱，则得不偿失。

##### addChild/removeChild

react 就是不需要了，只要渲染 child 的个数有变化， react 会自动对这次没有出现的 child component 进行销毁，
这里需要注意的是需要指定 child 的 key 属性，用来区分前后两次不同的 child component，这也是自动化所带来的代价。

```js
React.render(<Menu><MenuItem key="1">1</MenuItem><MenuItem key="2">2</MenuItem></Menu>,container);
// remove MenuItem 1, call componentWillUnmount of MenuItem 1
React.render(<Menu><MenuItem key="2">2</MenuItem></Menu>,container);
```

#### 大小对比

react calendar (比 kissy date-picker 多了时间选择功能): rc-calendar/1.4.1/index-debug.js 41.5k

kissy date-picker: http://g.tbcdn.cn/kissy/5/0.2.0/date-picker-debug.js+  77.5k

menu 奇迹发生了，大小竟然一样大:

react menu: rc-menu/2.0.3/index-debug.js 23.3k

kissy menu: http://g.tbcdn.cn/kissy/5/0.2.0/menu-debug.js 23.3k


#### 生态圈/服务器端渲染

kissy 生态圈为 gallery，一般只能客户端线上 cdn combo 使用。
react 组件依托 npm，可以使用 npm 上的众多模块，配合 browserify/webpack 等工具可以完全离线开发，打包，并且可以在服务器端进行首屏渲染。

#### 总结

react 在吸收传统组件架构的基础上，通过自己的创新，大大提升了开发者的效率和使用体验，如果你仍然在用传统组件模式编码，我强烈建议你尽快切换到 react，人生苦短，活在当下 :)
而这篇文章我又多么希望一年前就有别人写给我看.


# js 编码规范

代码通过 jshint（在根目录运行 `npm run lint`），熟悉规范参见如下

## 具体书写规范

---

下面是一些常用注意点：


### 编码

统一用 utf-8


### 长度

长度不超过 80 个字符。别小看这一条规则，如果严格去遵循，你会发现代码变清晰了。而且，你一定能做到的。

参考:

1. pep8 为 79 个字符
2. npm 为 80 个字符
3. google 为 80 个字符


### 缩进

缩进使用 2个空格，组件内保持统一，不混用。禁用 tab。

参考：

1. npm 为 2 空格
2. pep8 为 4 空格
3. google 为 2 空格( gjslint 没规定)



### 花括号

#### 花括号不换行

好

````
if (foo) {
}
````

坏

````
if (foo)
{
}
````

**不允许一行判断，一律换行**

坏

````
if (foo) return;
````

###命名约定

1. 常量 UPPERCASE_WORD
2. 变量 camelName
3. 类名 CamelName


### 空格

#### 操作符之间需要空格

好

````
var x = y + z;
````

坏

````
var x=y+z
````

#### 只空一格

好

````
{
    a: 'short',
    looooongname: 'long'
}
````

坏

````
{
    a           : 'short',
    looooongname: 'long'
}
````

### 逗号与换行

建议用自然人的处理方法

````
{
   a: 'a',
   b: 'b',
   c: 'c'
}
````

不建议使用 npm 风格的逗号与换行，即

````
{
   a: 'a'
  ,b: 'b'
  ,c: 'c'
}
````


### 变量声明

首先，**变量在使用前必须声明**。

对于单 var 模式和多 var 模式，不做强行约定，但同一个文件里，风格必须一致。

## 文件命名

- js 模块采用 commonjs 格式，主体代码放在 lib 目录下，根目录 index.js 仅引用 lib 下相关文件
- lib 目录模块如果返回值是个类，则文件名首字母大写
- 测试用例文件名以 .spec.js 结尾
- 测试用例文件名推荐和 lib 下源码对应，比如 lib/Calendar.js 对应于 tests/Calendar.spec.js
- 测试用例入口文件名为 index.spec.js，推荐里面只 require 其他测试用例

## 代码格式

- log 使用 2.x debug 模块，不可以使用 console.log
 ```js
 var debug = require('debug'))('rc-menu');
 debug('xxx');
 ```
- 公共包通过 npm install 后，js 中可以 require node_modules 下的公共包 js，但不可以 require css
- 使用 propType 制定 react 组件属性的类型
- 只能 require('react') 不可以 require('react/addons') 以及 require('react/lib/xx')
- 禁止使用 jquery 等大而全的类库
- React 类必须用一个变量声明

Menu.js
```js
var React = require('react');
var Menu = React.createClass({
  propTypes: {
    active: React.PropTypes.bool
  }
});
module.exports = Menu;
```

- 组件根节点样式名默认为 rc- 加上小写组件名，组件名单词间以 - 分隔，允许通过 prefixCls 定制
- 组件内部的样式名都要以 prefixCls 为前缀
- 组件允许用户通过 className 定制样式名

```js
var Menu = React.createClass({
  render: function(){
    var prefixCls = this.props.prefixCls;
    var className = prefixCls || "rc-menu";
    if(this.props.className){
      className += ' '+this.props.className;
    }
    return (<div className={className}> <span className={prefixCls + "-title"}></span> TODO</div>);
  }
});
```

- 组件是 react-component 而不是 react-bootstrap，不要把一些bootstrap的样式生搬过来，例如

```js
var Dialog = React.createClass({
  render: function(){
    return <div className='modal-dialog rc-dialog'>
      <div className='rc-dialog-header modal-header'></div>
    </div>
  }
});
```

组件和 bootstrap css 绑定过紧，样式和 js 不一致，建议通过属性来解决：

```js
var Dialog = React.createClass({
  render: function(){
    var prefixCls = this.props.prefixCls;
    return <div className={prefixCls}>
      <div className={prefixCls + "-header"}></div>
    </div>
  }
});

<Dialog prefixCls="modal" />
```

## 参考

- https://github.com/aralejs/aralejs.org/wiki/UI-%E7%BB%84%E4%BB%B6%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F
- https://github.com/aralejs/aralejs.org/wiki/JavaScript-编码风格
- https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml

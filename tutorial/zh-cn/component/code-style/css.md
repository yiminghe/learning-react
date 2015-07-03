# css 源码规范


## 基础
- 样式采用 less 语法
- 建议直接用 bootstrap，bootstrap 没的自己写在 assets/bootstrap.less 中
- 如果有独立样式则以 rc 为命名空间
- 如果样式有依赖其他组件，需要建立对应的 js，例如 assets/bootstrap.js

```js
require('xx/assets/yy.css'); // depend other component's css
require('./bootstrap.css');
```

## 文件命名

－ less 文件名推荐和 js 文件名对应，例如 lib/TimePanel.js 对应 assets/bootstrap/TimePanel.less
－ index.less 等入口文件名小写，推荐里面只 import 对应的 less 源码

## 语义化

如 rc-tab、rc-nav，不要使用 red、left 等表象的词命名。

## 类名有前缀

```html
<div className="rc-dialog">
   <h2 class="rc-dialog-hd">dialog header</h2>
   <p class="rc-dialog-bd">dialog body</p>
</div>
```

子模块： {命名空间}-{模块名}-{子模块名} 常用模块名有：bd(body)，cnt(content)，hd(header)，text(txt)，img(images/pic)，title，item，cell 等， 词义表达组件要实现的功能。

上面的代码中，模块的名为 dialog，模块最外层使用 {命名空间}-{模块名} 的方式命名 Class。
模块子元素以在此基础上进行命名。如果不继承父级的类名，很容易造成命名冲突。

## 避免不必要的 CSS 选择符嵌套

Class 已经模块化命名，从类名上已经可以清晰的分辨元素的从属，一般情况下也不会造成类名冲突，没有必要再进行选择器嵌套，保持 css 结构清晰，提高渲染效率。特殊情况可以嵌套（如提高权重、主题之间代码隔离），但应避免过多层级。

```
/* 推荐写法 */
.rc-dialog {
    border: 1px solid #333;
}

.rc-dialog-hd {
    margin: 0;
    padding: 5px 10px;
    border-bottom: 1px solid #333;
    background-color: #CCC;
}

.rc-dialog-bd {
    margin: 10px;
}

/* 不推荐写法 */
.rc-dialog .rc-dialog-hd {}
.rc-dialog .rc-dialog-bd {}
```

## 状态

模块状态： {命名空间}-{模块名}-{状态描述} 常用状态有：hover, current, selected, disabled, focus, blur, checked, success, error 等

与 JS 交互时，在模块 HTML 结构的最外一层添加状态，而非给模块每个子元素单独添加元素。给最外层添加状态类以后，整个模块的样式都能控制，减少操作，提高性能。

```
<div className="rc-dialog rc-dialog-focused">
   <h2 class="rc-dialog-hd">dialog header</h2>
   <p class="rc-dialog-bd">dialog body</p>
</div>
```

## 去除浏览器前缀

不要加 `-webkit-` `-moz-` 等浏览器前缀，工具会自动添加.

## 统一风格

统一命名风格（使用相同名词命名不同组件的子元素）：如 rc-tab-hd, rc-modal-hd，便于理解。

## 进一步

BEM css 命名规划

## 参考

- http://aliceui.org/docs/rule.html
- http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml
- http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/

# js 注释规范

## 总原则

1. **As short as possible（如无必要，勿增注释）**。尽量提高代码本身的清晰性、可读性。
1. **As long as necessary（如有必要，尽量详尽）**。合理的注释、空行排版等，可以让代码更易阅读、更具美感。

总之，注释的目的是：**提高代码的可读性，从而提高代码的可维护性。**


## 什么时候需要添加注释

1. 某段代码的写法，需要注释说明 why 时：
```js
// Using loop is more efficient than `rest = slice.call(arguments, 1)`.
for (i = 1, len = arguments.length; i < len; i++) {
    rest[i - 1] = arguments[i];
}
```

2. 添加上注释，能让代码结构更清晰时：
```js
init: function(selector, context, rootjQuery) {
    var match, elem, ret, doc;

    // Handle $(""), $(null), or $(undefined)
    if ( !selector ) {
        ...
    }

    // Handle $(DOMElement)
    if ( selector.nodeType ) {
        ...
    }

    // The body element only exists once, optimize finding it
    if ( typeof selector === "string" ) {
        ...
     }
}
```

3. 有借鉴第三方代码，需要说明时：
```js
// Inspired by https://github.com/jquery/jquery/blob/master/src/core.js
function ready() {
    ...
}
```


## 文件起始处的约定

每个源码文件的开头为 /** @jsx React.DOM */ ，第二行保留为空：

```js
/** @jsx React.DOM */

// 源代码

```

注意点：

1. 文件头不添加作者信息，是因为更推崇团队和社区参与。author 和 contributors 信息，在 GitHub 上可以清晰看出来。（注意：该条规范，仅适用于通用组件。对于业务代码，请添加上作者信息，以便在出问题时，快速找到负责人。）
1. 文件最后空一行，可以保证在 combo 合并后，源码的层次清晰。


##  注释书写规范

1. 源码中的注释，推荐用英文。
1. 含有中文时，标点符号用中文全角。
1. 中英文夹杂时，英文与中文之间要用一个空格分开。
1. 注释标识符与注释内容要用一个空格分开：`// 注释` 与 `/* 注释 */`。


## JSDoc 注释

- 不推荐 JSDoc 式注释，推荐 Backbone 风格的注释。
- API 请通过 README 等文档表达清楚。
- 不写 JSDoc 类文档，可以让开发者在写代码时更专注于写代码，在写文档时则更专注于写文档。**让工作解耦，更专注。**


## 相关

- https://github.com/aralejs/aralejs.org/wiki/JavaScript-注释规范

# 如何写一个 react 组件
---

author: yiminghe@gmail.com

## 建立组件 git 库

- https://github.com/react-component

## 搭建脚手架

- 使用 https://github.com/react-component/generator-rc 搭建脚手架

### 目录结构

```
- .travis.yml
- examples
 - index.js
 - index.html
- lib
 - Component.js
- index.js
- tests
  - index.spec.js
- package.json
```

## 源码

- 在 lib 目录中写 js，在 assets 目录下写 less，在 tests 目录下写 测试用例，代码规范参考 [react 组件代码规范](./component-code-style.md).
- examples 中的 html 不可修改，通过 js 中的 jsx 渲染页面，通过 require css 引入 css
- 开发中用到其他公共库，通过 `npm install --save` 以及 `npm install --save-dev` 来安装
- 组件设计可参考 [react 组件设计原则](./component-design.md).

## 启用开源平台服务

### travis-ci

使用 github 账号登陆 travis 后访问 http://https://travis-ci.org/profile 开启对应 git 库

### coveralls.io

使用 github 账号登陆 coveralls 后访问 https://coveralls.io/repos/new 开启对应 git 库

### saucelabs.com

- 访问 https://saucelabs.com/opensauce 注册对应 npm 包名的账号，
- 以该账号登陆后，访问 https://docs.saucelabs.com/ci-integrations/travis-ci/
- 在库根目录执行 `gem install travis` (需要[设置 gem 镜像](https://ruby.taobao.org/)) 和上述网页中的两个 `travis encrypt` 命令
- 修改 .travis.yml 在 script 区域加入 `- npm run saucelabs`

## 开发调试

- 在项目根目录执行 `npm install`
- 在项目根目录执行 `npm start`
- 打开 `http://localhost:xxxx` 访问库, xxxx 为脚手架配置的网络端口
- 打开 `http://localhost:xxxx/examples/index.html` 查看示例
- 打开 `http://localhost:xxxx/tests/runner.html` 运行测试

## 支持 spm

- npm install spm -g
- 修改 package.json 将源码中用到的库，从 dependencies 字段复制到 spm 字段

```js
{
  "devDependencies":{
    "react": "0.12.x"
  },
  "spm":{
    "dependencies":{
      "react": "0.12.x"
    }
  }
}
```

## 浏览器支持版本

- ie8, ie8+, chrome, firefox 最新版
- 可适当渐进降级，如 css 动画可以不支持 ie8

## 功能要求

- 支持基本的键盘访问，最好支持 [WAI-ARIA](http://www.w3.org/TR/wai-aria/)

## 支持 HISTORY.md

- 通过在根目录运行 `npm run history` 生成 HISTORY.md
- 需要建立必要的 milestone，issue，label，参见： https://github.com/yiminghe/gh-history
- milestone 标题为语义化版本号，issue 属于某个 milestone，并且具备 label
- label 为枚举，包括
 - `new` 新增的属性、功能、方法、特性等等
 - `fixed` 修复 bug 和影响使用的性能问题等
 - `improved` 接口增强、健壮性和性能提升、代码优化、依赖模块升级等。
 - `changed` 涉及到兼容性变化的改动。

## 发布

- 在根目录运行 npm publish

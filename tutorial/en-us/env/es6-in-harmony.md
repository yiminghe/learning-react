# es6 to es5 support in react-tools harmony mode

react-tools@0.13.x

### let/const

`no`

```js
{
  let a = 1;
}
console.log(a);
```

### Destructuring

`partly`

support simple destructure

```js
var obj={x:1,y:2};
var {x,y}=obj;
var [x,...y]=[1,2,3,4];
```

does not support default parameter:

```js
var obj={x:1,y:2};
var {x=1,y=2}=obj;
```

### Default Function Parameter

`no`

```js
function f(x, y=12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
f(3) == 15
```

### Arrow Function

`yes`

```js
var x = (x1,x2)=>{
  console.log(x1,x2,this);
}
```

### Rest + Spread Function Parameter

`yes`

support rest and spread

```js
function f(x, ...y) {
  // y is an Array
  return x * y.length;
}
f(3, "hello", true) == 6
function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
f(...[1,2,3]) == 6
```

### Class

`yes`

```js
class X extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
}
```

### Module

`no`

```js
import x from "x"
export default x;
```

### Template String

`yes`/`raw bug`

simple:

```js
var y='1';
var x=`
${y}
`;
```

tag:
```js
function z(a){
  console.log(arguments);
  // raw bug
  a.raw[1] === '\\nx'; // false
}
var q=1;
z`xx ${q}
x`;
```

### for of

`no`

```js
for(s of [1,2,3,4]){
  console.log(s);
}
```

### Array Comprehension

`no`

```js
var a1 = [1, 2, 3, 4];
var a2 = [for (i of a1) i * 2];
console.log(a2);
```

### Enhanced Object Literals

`partly`

support:

```js
var obj = {
    // __proto__
    __proto__: theProtoObj,
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
     // Super calls
     return "d " + super.toString();
    }
};
```

does not support Computed (dynamic) property names:

```js
var obj = {
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
};
```

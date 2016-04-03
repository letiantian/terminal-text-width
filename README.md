# terminal-text-width
Get the number of columns occupied by specified text in terminal.

## Install
```
$ npm install terminal-text-width --save
```

## Usage

```js
var getTextWidth = require('terminal-text-width');
getTextWidth("hi")        //-> 2
getTextWidth("你好")       //-> 4
getTextWidth("안녕하세요")  //->10
```

## License
MIT
### (Res)ponse En(velope)
=========

Express middleware to automatically wrap responses in an envelope when query parameter `envelope` (overridable) is true.

```javascript
{
  "status": 404,
  "data": "Not Found",
  "headers": {...}
}
```

## Usage

```bash
$ npm install resvelope --save
```

```javascript
var express = require('express');
var app = express();

app.use(require('resvelope')({ //opts }));
```

## Options
- param: Set this equal to the desired query string parameter which will be used to determine if the response will be wrapped in an envelope. Default: `envelope`
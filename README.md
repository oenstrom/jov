# JOV

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/oenstrom/jov/blob/master/LICENSE)
[![status](https://img.shields.io/badge/status-unusable-orange.svg)](https://github.com/oenstrom/jov#status)

JOV is a JavaScript module for validating JavaScript objects.


## Installation

JOV is available as the `jov` package on [npm](https://www.npmjs.com/package/jov).

```bash
$ npm install --save jov
```


## Usage

```javascript
const jov = require("jov");

const schema = { username: new jov.string(true).required().min(3) };
const data = { username: "oenstrom" };

jov.validate(data, schema);
```
More info coming soon.


## API

### `JString(strict)`

- `.required()`
- `.min(minValue)`
- `.max(maxValue)`
- `.email()`
- `.alphanum()`


## Status

This module is in it's very early stages of development. I suggest not using it yet.


## License
JOV is [MIT licensed](https://github.com/oenstrom/jov/blob/master/LICENSE).

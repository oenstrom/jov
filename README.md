# JOV

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/oenstrom/jov/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/jov.svg)](https://www.npmjs.com/package/jov)
[![Scrutinizer](https://img.shields.io/scrutinizer/g/oenstrom/jov.svg)](https://scrutinizer-ci.com/g/oenstrom/jov/?branch=master)
[![Scrutinizer Coverage](https://img.shields.io/scrutinizer/coverage/g/oenstrom/jov.svg)](https://scrutinizer-ci.com/g/oenstrom/jov/?branch=master)
[![Scrutinizer Build](https://img.shields.io/scrutinizer/build/g/oenstrom/jov.svg)](https://scrutinizer-ci.com/g/oenstrom/jov/?branch=master)

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

jov.validate(data, schema, "json");
```
More info coming soon.


## API

### `JString(strict = false)`
*strict = true - makes the validation check the type of the key.*

- `.required()` *- Set the key to be required.*
- `.min(minValue)` *- Set a minimum required length.*
- `.max(maxValue)` *- Set a maxmium length.*
- `.email()` *- Set the key to only accept email format.*
- `.alphanum()` *- Set the key to only accept alphanumeric characters.*

### `validate(data, schema, format = "obj")`
***data** = the data to validate.*  
***schema** = the schema that **data** validates against.*  
***format** = the format to output error as. Available formats: "obj" and "json".*


## License
JOV is [MIT licensed](https://github.com/oenstrom/jov/blob/master/LICENSE).

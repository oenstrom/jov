"use strict";
const Base = require("./base");

class JString extends Base {
    constructor(strict = false) {
        super(strict);
        this.type = "string";
        return this;
    }

    validate(data, key) {
        let errorType = null;

        if (this.strict && typeof data[key] !== this.type) {
            errorType = "typeString";
        } else if (this.minValue && String(data[key]).length < this.minValue) {
            errorType = "minString";
        } else if (this.maxValue && String(data[key]).length > this.maxValue) {
            errorType = "maxString";
        }

        return errorType ? this.error(errorType, key, "Error message") : null;
    }


    email() {
        this.email = true;
        return this;
    }


    alphanum() {
        return this;
    }
}


module.exports = JString;

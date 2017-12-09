"use strict";

class JString {
    constructor() {
        this.type = "string";
        return this;
    }

    required() {
        this.required = true;
        return this;
    }

    min(minLength) {
        this.minLength = minLength;
        return this;
    }
}


module.exports = JString;

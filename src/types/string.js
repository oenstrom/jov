"use strict";
const Base = require("./base");

class JString extends Base {
    /**
     * JString constructor
     * @param {Boolean} strict Treat the type strictly.
     */
    constructor(strict = false) {
        super(strict);
        this.type = "string";
        return this;
    }


    /**
     * Validate the data.
     *
     * @param {Object} data The data to validate.
     * @param {Object} key The key of the data to validate.
     *
     * @returns {Object} As the error object.
     */
    validate(data, key) {
        let errorType = null;

        if (this.strict && typeof data[key] !== this.type) {
            errorType = "JString:strict";
        } else if (this.minValue && String(data[key]).length < this.minValue) {
            errorType = "JString:min";
        } else if (this.maxValue && String(data[key]).length > this.maxValue) {
            errorType = "JString:max";
        } else if (this.isEmail && !/^[^\s@<>]+@[^\s@<>]+$/.test(data[key])) {
            errorType = "JString:email";
        } else if (this.isAlphanum && !/^\w+$/.test(data[key])) {
            errorType = "JString:alphanum";
        }

        return errorType ? this.error(errorType, key) : null;
    }


    /**
     * Set the key to only accept email format.
     */
    email() {
        this.isEmail = true;
        return this;
    }


    /**
     * Set the key to only accept alphanumeric characters.
     */
    alphanum() {
        this.isAlphanum = true;
        return this;
    }
}


module.exports = JString;

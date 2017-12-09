"use strict";

class Base {
    constructor(strict = false) {
        this.strict = strict;
        return this;
    }


    /**
     * Return the error.
     *
     * @param {String} errorType The type of error
     * @param {String} keyName The key where there is error
     * @param {String} errorMsg The error message
     *
     * @returns {Object} As the error object
     */
    error(errorType, keyName, errorMsg) {
        return {
            error: {
                type: errorType,
                field: keyName,
                message: errorMsg
            }
        };
    }


    /**
     * Set the key to be required.
     */
    required() {
        this.isRequired = true;
        return this;
    }


    /**
     * Set the minimum value required for the field.
     * @param {*} minValue
     */
    min(minValue) {
        this.minValue = minValue;
        return this;
    }


    /**
     * Set the maximum value required for the field.
     * @param {*} maxValue
     */
    max(maxValue) {
        this.maxValue = maxValue;
        return this;
    }
}

module.exports = Base;

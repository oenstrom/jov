"use strict";

class Base {
    /**
     * Base constructor
     * @param {Boolean} strict Treat the type strictly.
     */
    constructor(strict = false) {
        this.strict = strict;
        return this;
    }


    format(format) {
        const args = Array.prototype.slice.call(arguments, 1);

        return format.replace(/{(\d+)}/g, (match, number) => {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match;
        });
    }


    /**
     * Return the error.
     *
     * @param {String} errorType The type of error
     * @param {String} keyName The key where there is error
     *
     * @returns {Object} As the error object
     */
    error(errorType, keyName) {
        const messages = {
            "Any:required": this.format("'{0}' is required and can't be omitted.", keyName),
            "JString:strict": this.format("'{0}' is not the correct type.", keyName),
            "JString:min": this.format("'{0}' has a minimum required length of '{1}'.", keyName, this.minValue),
            "JString:max": this.format("'{0}' has a maximum length of '{1}'.", keyName, this.maxValue),
            "JString:email": this.format("'{0}' needs to be a valid email.", keyName),
            "JString:alphanum": this.format("'{0}' only accepts alphanumeric characters.", keyName)
        };

        return {
            error: {
                type: errorType,
                field: keyName,
                message: messages[errorType]
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
     * Set the minimum value required for the key.
     * @param {*} minValue The minimum value for the key.
     */
    min(minValue) {
        this.minValue = minValue;
        return this;
    }


    /**
     * Set the maximum value required for the key.
     * @param {*} maxValue The maximum value for the key.
     */
    max(maxValue) {
        this.maxValue = maxValue;
        return this;
    }
}

module.exports = Base;

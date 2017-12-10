"use strict";
/**
 * Validate the data against the schema.
 *
 * @param {Object} data The data to validate.
 * @param {Object} schema The schema built of jov classes.
 * @param {String} format The format to return error as, "obj" or "json".
 */
const validate = (data, schema, format = "obj") => {
    let returnError = null;

    for (let key in schema) {
        if (!schema[key].isRequired && !data.hasOwnProperty(key)) {
            break;
        } else if (schema[key].isRequired && !data.hasOwnProperty(key)) {
            returnError = schema[key].error("Any:required", key, schema[key]);
            break;
        }

        returnError = schema[key].validate(data, key);
        if (returnError) {
            break;
        }
    }

    return format === "json" ? JSON.stringify(returnError, null, 4) : returnError;
};

module.exports = validate;

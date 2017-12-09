"use strict";

const validate = (data, schema, json = "obj") => {
    let returnError = null;

    for (let key in schema) {
        if (!schema[key].isRequired && !data.hasOwnProperty(key)) {
            break;
        } else if (schema[key].isRequired && !data.hasOwnProperty(key)) {
            returnError = schema[key].error("required", key, "Error message");
            break;
        }

        returnError = schema[key].validate(data, key);
        if (returnError) {
            break;
        }
    }

    return json === "json" ? JSON.stringify(returnError, null, 4) : returnError;
};

module.exports = validate;

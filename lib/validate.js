"use strict";
const validate = (data, schema, json = "obj") => {
    let errorType;
    let keyName;
    let errorMsg;

    for (let key in schema) {
        if (schema[key].required && !data.hasOwnProperty(key)) {
            errorType = "required";
            keyName = String(key);
            errorMsg = `'${keyName}' is required and can't be omitted.`;
            break;
        }

        if (schema[key].minLength && data[key].length < schema[key].minLength) {
            errorType = "minLength";
            keyName = String(key);
            errorMsg = `'${keyName}' has a required minimum length of '${schema[key].minLength}'`;
            break;
        }
    }

    const returnValue = {
        error: errorType ? {
            type: errorType,
            field: keyName,
            message: errorMsg
        } : null
    };

    return json === "json" ? JSON.stringify(returnValue, null, 4) : returnValue;
};

module.exports = validate;

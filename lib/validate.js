"use strict";
const validate = (data, schema, json = "obj") => {
    const returnValue = {
        error: {
            message: "Error msg!",
            field: "name",
            type: "min"
        }
    };

    return json === "json" ? JSON.stringify(returnValue, null, 4) : returnValue;
};

module.exports = validate;

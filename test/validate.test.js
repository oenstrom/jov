"use strict";
const validate = require("../lib/validate");
const JString = require("../lib/types/string");

test("test validate not required", () => {
    const data = { "username": "oenstrom" };
    const schema = { "test": {} };

    expect(validate(data, schema)).toBeNull();
});

test("test validate required", () => {
    const data = {};
    const schema = { "test": new JString().required() };

    expect(validate(data, schema)).toEqual({ error: {
        type: "Any:required",
        field: "test",
        message: "'test' is required and can't be omitted."
    }});
});

test("test validate using type validate", () => {
    const schema = { "test": new JString().alphanum() };
    const data   = { "test": "test(/)!" };
    const data2  = { "test": "test" };

    expect(validate(data, schema, "json")).toEqual(
        JSON.stringify({ error: {
            type: "JString:alphanum",
            field: "test",
            message: "'test' only accepts alphanumeric characters."
        }}, null, 4)
    );
    expect(validate(data2, schema)).toBeNull();
});

test("test multiple fields", () => {
    const schema = {
        username: new JString().min(3).max(3),
        password: new JString().min(6).max(100)
    };
    const data = { password: "test" };

    expect(validate(data, schema)).toEqual({ error: {
        type: "JString:min",
        field: "password",
        message: "'password' has a minimum required length of '6'."
    }});
});

"use strict";
const JString = require("../lib/types/string");

test("test instantiation of JString", () => {
    const string = new JString();

    expect(string).toBeInstanceOf(JString);
    expect(string.type).toBe("string");
});

test("test email()", () => {
    const string = new JString();

    expect(string.email()).toBe(string);
    expect(string.isEmail).toBeTruthy();
});

test("test alphanum()", () => {
    const string = new JString();

    expect(string.alphanum()).toBe(string);
    expect(string.isAlphanum).toBeTruthy();
});

describe("test JString.validate()", () => {
    test("test non strict", () => {
        const string = new JString();
        const data = { test: "" };

        expect(string.validate(data, "test")).toBeNull();
    });

    test("test strict", () => {
        const string = new JString(true);
        const data = { test: 5 };

        expect(string.validate(data, "test")).toEqual({ error: {
            type: "JString:strict",
            field: "test",
            message: "'test' is not the correct type."
        }});
    });

    test("test minValue", () => {
        const string = new JString().min(5);
        const data = { test: "test" };

        expect(string.validate(data, "test")).toEqual({ error: {
            type: "JString:min",
            field: "test",
            message: "'test' has a minimum required length of '5'."
        }});
    });

    test("test maxValue", () => {
        const string = new JString().max(3);
        const data = { test: "test" };

        expect(string.validate(data, "test")).toEqual({ error: {
            type: "JString:max",
            field: "test",
            message: "'test' has a maximum length of '3'."
        }});
    });

    test("test email", () => {
        const string = new JString().email();
        const data = { test: "test" };

        expect(string.validate(data, "test")).toEqual({ error: {
            type: "JString:email",
            field: "test",
            message: "'test' needs to be a valid email."
        }});
    });

    test("test alphanum", () => {
        const string = new JString().alphanum();
        const data = { test: "test()" };

        expect(string.validate(data, "test")).toEqual({ error: {
            type: "JString:alphanum",
            field: "test",
            message: "'test' only accepts alphanumeric characters."
        }});
    });
});

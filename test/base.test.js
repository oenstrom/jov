"use strict";
const Base = require("../src/types/base");

test("test instantiation of Base", () => {
    const string = new Base();

    expect(string).toBeInstanceOf(Base);
    //expect(string.type).toBe("base");
});

test("test required()", () => {
    const string = new Base();

    expect(string.required()).toBe(string);
    expect(string.isRequired).toBeTruthy();
});

test("test min()", () => {
    const string = new Base();

    expect(string.min(5)).toBe(string);
    expect(string.minValue).toBe(5);
});

test("test max()", () => {
    const string = new Base();

    expect(string.max(10)).toBe(string);
    expect(string.maxValue).toBe(10);
});

test("test error()", () => {
    const string = new Base();

    expect(string.error("Any:required", "test")).toEqual({ error: {
        type: "Any:required",
        field: "test",
        message: "'test' is required and can't be omitted."
    }});
});

const { test } = require("node:test");
const assert = require("node:assert");
const { greet } = require("../src/app");

test("greet should return correct message", () => {
    assert.strictEqual(greet("Mohit"), "Hello, Mohit!");
});
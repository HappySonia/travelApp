//let Jest able to understand the ES6 syntax by npm i regenerator-runtime -D & import the below
import "regenerator-runtime/runtime";

// Import the js file to test
import { updateUI } from "../src/client/js/formHandler.js"

describe("Testing the updateUI function defined", () => {
    test("Testing the updateUI() function is defined", () => {
        expect(updateUI).toBeDefined();
    })
});
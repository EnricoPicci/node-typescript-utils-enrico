"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const http_observable_1 = require("./http-observable");
describe('httpGetRequestAsObs function', () => {
    it('issues an http get request to wikipedia - returns an observable', () => {
        const uri = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=pentole&namespace=0&limit=10';
        http_observable_1.httpGetRequestAsObs(uri).subscribe(data => chai_1.expect(data.length).to.greaterThan(0), error => console.error(error));
    });
});
//# sourceMappingURL=http-observable.spec.js.map
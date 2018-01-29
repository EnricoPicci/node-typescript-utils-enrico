"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/bindNodeCallback");
const request = require("request");
exports.httpGetRequestAsObs = (uri) => {
    return requestGetAsObs(uri, { json: true });
};
// https://stackoverflow.com/questions/43462628/cannot-create-observable-from-observable-bindnodecallbackfs-readfile-in-typesc
const requestGetFunction = (uri, options, callback) => request.get(uri, options, callback);
const requestGetAsObs = Observable_1.Observable.bindNodeCallback(requestGetFunction, toBodyOnly);
function toBodyOnly(_res, _body) {
    return _body;
}
//# sourceMappingURL=http-observable.js.map
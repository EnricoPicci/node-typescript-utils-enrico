
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/bindNodeCallback';
import * as request from 'request';

export const httpGetRequestAsObs = (uri: string) => {
    return requestGetAsObs(uri, { json: true });
}
// https://stackoverflow.com/questions/43462628/cannot-create-observable-from-observable-bindnodecallbackfs-readfile-in-typesc
const requestGetFunction = (uri: string, 
                            options: {}, 
                            callback: (err: Error, _res, body) => void) => request.get(uri, options, callback);
const requestGetAsObs = Observable.bindNodeCallback(requestGetFunction, toBodyOnly);

export const httpPostRequestAsObs = (uri: string, body: any) => {
    return requestPostAsObs(uri, { json: true, body});
}
// https://stackoverflow.com/questions/43462628/cannot-create-observable-from-observable-bindnodecallbackfs-readfile-in-typesc
const requestPostFunction = (uri: string, 
                            options: any, 
                            callback: (err: Error, _res, body) => void) => request.post(uri, options, callback);
const requestPostAsObs = Observable.bindNodeCallback(requestPostFunction, toBodyOnly);



function toBodyOnly(_res, _body) {
    return _body;
}

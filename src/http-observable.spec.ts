
import { expect } from 'chai';
import 'mocha';

import {httpGetRequestAsObs, httpPostRequestAsObs} from './http-observable'

describe('httpGetRequestAsObs function', () => {
    
    it('issues an http get request to wikipedia - returns an observable', done => {
        const uri = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=pentole&namespace=0&limit=10';
        let serviceCallResult;
        httpGetRequestAsObs(uri).subscribe(
            data => serviceCallResult = data,
            error => console.error(error),
            () => {
                if (serviceCallResult.length > 0) {
                    return done()
                } else {
                    console.error(serviceCallResult);
                    return done(new Error('serviceCallResult empty'));
                }
            }
        )
    });

});

describe('httpPostRequestAsObs function', () => {
    
    it('issues an http post request to https://reqres.in/ - returns an observable', done => {
        const uri = 'https://reqres.in/api/users';
        const name = 'John';
        const job = 'dev';
        const user = {name, job};
        let serviceCallResult;
        httpPostRequestAsObs(uri, user).subscribe(
            data => serviceCallResult = data,
            error => console.error(error),
            () => {
                if (serviceCallResult.name === name && serviceCallResult.job === job) {
                    return done()
                } else {
                    console.error(serviceCallResult);
                    return done(new Error('serviceCallResult empty'));
                }
            }
        )
    });

});

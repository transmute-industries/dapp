
require('es6-promise').polyfill();
require('isomorphic-fetch');

// http://ti-acs-swarmagents.southcentralus.cloudapp.azure.com:8080
let bioid_api_base = 'http://example.com';

export const enroll = () => {
    let url = bioid_api_base + '/api/v0/bioid/enrollment'
    return fetch(url, {
        method: 'POST',
    })
        .then((response: any) => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
}

export default {
    enroll
}
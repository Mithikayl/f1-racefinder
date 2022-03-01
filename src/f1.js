const axios = require('axios')

export function getData(year) {
    const url = `https://ergast.com/api/f1/${year}.json`;
    const promise = axios.get(url);
    console.log(promise);
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
}

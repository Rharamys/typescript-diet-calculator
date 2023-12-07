import fetch from 'node-fetch';

const url: string = 'https://api.agify.io/';

interface IAPIOptions {
	method: string,
	headers?: {
		"X-RapidAPI-Key": string,
		"X-RapidAPI-Host": string
	}
}
const options: IAPIOptions = {
	method: 'GET'
  };

let name = null;

process.argv.forEach(function (val, index, array) {
    if (index == 2) {
        name = val;
    }
});

if (name) {
    fetch(url + '?name=' + name, options)
    .then(async (res) => console.log(await res.json()))
    .catch((err: any) => console.error('error: ' + err));
} else {
    console.error('Error: No name provided.')
}

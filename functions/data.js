const getData = require ('./helpers/getData')

exports.handler = async (event) => {
    if (event.httpMethod === 'GET'){
        return await getData(event);
    };
};
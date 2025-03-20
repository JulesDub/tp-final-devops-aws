const moment = require('moment-timezone');

exports.handler = async (event) => {
    const date = moment().tz("Europe/Paris").format('HH:mm');
    const response = {
        statusCode: 200,
        body: JSON.stringify(`Hello World ! Ici [Ton Prénom et Nom], à ${date}`),
    };
    console.log("Hi there");
    return response;
};

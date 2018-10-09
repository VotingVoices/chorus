let SurveyDAO = require('../dao/SurveyDAO');

function generateResponseBody(message) {
    console.log(message);
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'content-type': 'text/plain'
        },
        body: message
    };
}

exports.handler = function (event, context, callback) {
    if (event.hasOwnProperty("body")) {
        try {
            let request = JSON.parse(event.body);
            let surveyDAO = new SurveyDAO();
            surveyDAO.saveSurvey(request);
        } catch (error) {
            callback(null, generateResponseBody(error.message));
        }
    } else {
        callback(null, generateResponseBody("Post request is empty"));
    }

    callback(null, generateResponseBody(JSON.parse(event.body).contact + " is saved"));
};
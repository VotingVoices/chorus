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
    if (event && event.hasOwnProperty("body")) {
        try {
            let request = JSON.parse(event.body);
            console.log("Received request: " + JSON.stringify(request));

            let surveyDAO = new SurveyDAO();
            surveyDAO.saveSurvey(request, false);
        } catch (error) {
            callback(null, generateResponseBody(error.message));
        }
    } else {
        callback(null, generateResponseBody("Post request is empty"));
    }

    callback(null, generateResponseBody(event.body + " is saved"));
};
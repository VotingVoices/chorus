let SurveyDAO = require('../dao/SurveyDAO');

function generateResponseBody(result, message) {
    console.log(message);
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            result: result,
            message: message
        })
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
            callback(null, generateResponseBody("Error", error.message));
        }
    } else {
        callback(null, generateResponseBody("Error", "Post request is empty"));
    }

    callback(null, generateResponseBody("Success", event.body + " is saved"));
};

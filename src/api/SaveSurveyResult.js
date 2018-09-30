let SurveyDAO = require('../dao/SurveyDAO');

exports.handler = function (event, context, callback) {
    if (event.hasOwnProperty("body")) {
        let request = JSON.parse(event.body);
        let surveyDAO = new SurveyDAO();
        try {
            surveyDAO.saveSurvey(request);
        } catch (error) {
            callback(error);
        }
    } else {
        callback("Post request is empty");
    }

    callback(null, {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'content-type': 'text/plain'
        },
        body: JSON.parse(event.body).email + " is saved"
    });
};
let SurveyDAO = require('../dao/SurveyDAO');

exports.handler = function (event, context, callback) {
    if (event.hasOwnProperty("body")) {
        let request = JSON.parse(event.body);
        let surveyDAO = new SurveyDAO();
        surveyDAO.saveSurvey(request);
    } else {
        callback("Post request is empty");
    }

    callback(null, {
        statusCode: '200',
        body: event.body + 'is saved'
    });
};
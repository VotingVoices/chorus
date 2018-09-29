let CategoryDAO = require('../dao/CategoryDAO');

exports.handler = function (event, context, callback) {
    if (event.hasOwnProperty("body")) {

        let request = JSON.parse(event.body);
        let categoryDAO = new CategoryDAO('Category');

        categoryDAO.saveCategory(request);
    } else {
        callback("Post request is empty");
    }

    callback(null, {
        statusCode: '200',
        body: event.body + 'is saved'
    })
};
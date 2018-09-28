
let Category = require('./Category');

exports.handler = function (event, context, callback) {
    let category = new Category();

    category.convertEventToCategory(event);

    callback(null, {
        statusCode: '200',
        body: 'The converted category is ' + JSON.stringify(category)
    })
};
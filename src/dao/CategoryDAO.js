let AWS = require('aws-sdk');
let Category = require('../model/Category');

module.exports = class CategoryDAO {
    constructor() {
        AWS.config.update({region: 'us-west-2'});
        this.tableClient = new AWS.DynamoDB({apiVersion: '2012-10-08'});
        this.tableName = process.env.CATEGORY_TABLE;
    }

    saveCategory(category) {
        category = Category.getInstance(category);
        let parameter = {
            TableName: this.tableName,
            Item: {
                'id': {S: category.getId()},
                'category': {S: category.getCategory()}
            }
        };

        this.tableClient.putItem(parameter, function (error) {
            if (error) {
                console.log(error, error.stack);
                throw "The item cannot be saved";
            } else {
                console.log(data);
            }
        });

    }
};
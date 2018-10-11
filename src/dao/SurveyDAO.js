let AWS = require('aws-sdk');
let Survey = require('../model/Survey');

module.exports = class SurveyDAO {
    constructor() {
        AWS.config.update({region: 'us-west-2'});
        this.tableClient = new AWS.DynamoDB({apiVersion: '2012-10-08'});
        this.tableName = process.env.SURVEY_TABLE;
    }

    saveSurvey(input, requireValidation) {
        let surveyDAO = this;
        if (requireValidation === true) {
            let survey = Survey.getInstance(input);
        } else {
            let survey = input;
        }
        survey = SurveyDAO._includeTimeToItem(survey);
        let dynamoItem = SurveyDAO._convertToDynamoDBItem(survey);

        console.log("Item to be saved: " + JSON.stringify(dynamoItem));
        let parameter = {
            TableName: surveyDAO.tableName,
            Item: dynamoItem
        };

        surveyDAO.tableClient.putItem(parameter, function (error, data) {
            if (error) {
                console.log(error, error.stack);
                throw "The item cannot be saved: " + error.message;
            } else {
                console.log(data);
            }
        });

    }

    static _convertToDynamoDBItem(normalItem) {
        return AWS.DynamoDB.Converter.marshall(normalItem, {
            convertEmptyValues: true,
            wrapNumbers: true
        })
    }

    static _includeTimeToItem(normalItem) {
        let item = normalItem;
        item.dateTime = new Date().toString();
        return item;
    }
};
let AWS = require('aws-sdk');
let Survey = require('../model/Survey');

module.exports = class SurveyDAO {
    constructor() {
        AWS.config.update({region: 'us-west-2'});
        this.tableClient = new AWS.DynamoDB({apiVersion: '2012-10-08'});
        this.tableName = process.env.SURVEY_TABLE;
    }

    saveSurvey(input) {
        let surveyDAO = this;
        let survey = Survey.getInstance(input);
        let dynamoItem = {};
        for (let key in survey) {
            if (survey.hasOwnProperty(key) && survey[key] !== null) {
                let attributeValue = SurveyDAO._getAttributeToDynamoItem(survey, key);
                if (attributeValue) {
                    dynamoItem[key] = attributeValue;
                }
            }
        }
        console.log(JSON.stringify(dynamoItem));
        let parameter = {
            TableName: surveyDAO.tableName,
            Item: dynamoItem
        };

        this.tableClient.putItem(parameter, function (error, data) {
            if (error) {
                console.log(error, error.stack);
                throw "The item cannot be saved";
            } else {
                console.log(data);
            }
        });

    }

    static _getAttributeToDynamoItem(surveyItem, attributeKey) {
        if (surveyItem.hasOwnProperty(attributeKey)) {
            if (surveyItem[attributeKey] === null) {
                return undefined;
            } else {
                if (Array.isArray(surveyItem[attributeKey])) {
                    return {
                        L: surveyItem[attributeKey]
                    }
                } else {
                    return {
                        S: surveyItem[attributeKey]
                    }
                }
            }
        } else {
            return undefined;
        }
    }
};
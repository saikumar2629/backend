const AWS = require("aws-sdk");

const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    const body = JSON.parse(event.body);

    const params = {
        TableName: "students",
        Item: {
            id: Date.now().toString(),
            name: body.name
        }
    };

    await dynamodb.put(params).promise();

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            message: "Student Added"
        })
    };
};

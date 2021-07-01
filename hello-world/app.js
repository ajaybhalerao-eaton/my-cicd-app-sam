// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
const request = require('request');
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {
    // try {
    //     // const ret = await axios(url);
    //     response = {
    //         'statusCode': 200,
    //         'body': JSON.stringify({
    //             message: 'hello world',
    //             // location: ret.data.trim()
    //         })
    //     }
    // } catch (err) {
    //     console.log(err);
    //     return err;
    // }

    try{

        
        request.get('https://jsonplaceholder.typicode.com/todos/1', function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        return response.json();    
    });
    }catch (err) {
        console.log(err);
        return err;
    }

    // return response
};

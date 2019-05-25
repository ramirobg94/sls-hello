'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${event.queryStringParameters && event.queryStringParameters.name || 'World'}`,
      input: event,
    }, null, 2),
  };
  
};
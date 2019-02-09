const respondJSON = (request, response, status, object) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(object));
  response.end();
};

const respond = (request, response, status, content, type) => {
  //set status code (200 success) and content type
  response.writeHead(status, { 'Content-Type': type });
  //write the content string or buffer to response
  response.write(content);
  //send the response to the client
  response.end();
};

const success = (request, response, params, acceptedTypes) => {
  const responseJSON = {
    message: 'This is a successful response',
  };
    
    if (acceptedTypes[0] === 'text/xml') {
	//create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseJSON.message}</message>`;
    responseXML = `${responseXML} </response>`;    

	//return response passing out string and content type
    return respond(request, response,200, responseXML, 'text/xml');
  }
respondJSON(request, response, 200, responseJSON,  acceptedTypes);
    
    

};

const badRequest = (request, response, params, acceptedTypes) => {
  const responseJSON = {
    message: 'This request has the required parameters',
  };
  if (!params.valid || params.valid !== 'true') {
    responseJSON.message = 'Missing valid query parameter set to true';
    responseJSON.id = 'badRequest';
      
      
      if (acceptedTypes[0] === 'text/xml') {
        //create a valid XML string with name and age tags.
        let responseXML = '<response>';
        responseXML = `${responseXML} <message>${responseJSON.message}</message>`;
        responseXML = `${responseXML} </response>`;    

        //return response passing out string and content type
        return respond(request, response,400, responseXML, 'text/xml');
    }
      
      
      
    return respondJSON(request, response, 400, responseJSON);
  }
    
    
    if (acceptedTypes[0] === 'text/xml') {
	//create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseJSON.message}</message>`;
    responseXML = `${responseXML} </response>`;    

	//return response passing out string and content type
    return respond(request, response,200, responseXML, 'text/xml');
  }
    

  return respondJSON(request, response, 200, responseJSON);
};

const notFound = (request, response, params, acceptedTypes) => {
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };
    if (acceptedTypes[0] === 'text/xml') {
	//create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseJSON.message}</message>`;
    responseXML = `${responseXML} </response>`;    

	//return response passing out string and content type
    return respond(request, response,404, responseXML, 'text/xml');
  }
  respondJSON(request, response, 404, responseJSON);
};

const unauthorized = (request, response, params, acceptedTypes) => {
  const responseJSON = {
    message: 'You are logged in',
  };
    
  if (!params.loggedIn || params.loggedIn !== 'yes') {
    responseJSON.message = 'Missing loggedIn query parameter';
    responseJSON.id = 'badRequest';
      
      
      if (acceptedTypes[0] === 'text/xml') {
	//create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseJSON.message}</message>`;
    responseXML = `${responseXML} </response>`;    

	//return response passing out string and content type
    return respond(request, response,401, responseXML, 'text/xml');
  }
      
    return respondJSON(request, response, 401, responseJSON);
  }
    
    
    if (acceptedTypes[0] === 'text/xml') {
	//create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseJSON.message}</message>`;
    responseXML = `${responseXML} </response>`;    

	//return response passing out string and content type
    return respond(request, response,200, responseXML, 'text/xml');
  }
  return respondJSON(request, response, 200, responseJSON);
};

const forbidden = (request, response,params, acceptedTypes) => {
  const responseJSON = {
    message: 'You do not have permission to view this content',
  };
    
    if (acceptedTypes[0] === 'text/xml') {
	//create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseJSON.message}</message>`;
    responseXML = `${responseXML} </response>`;    

	//return response passing out string and content type
    return respond(request, response,403, responseXML, 'text/xml');
  }

  respondJSON(request, response, 403, responseJSON);
};

const internal = (request, response,params, acceptedTypes) => {
  const responseJSON = {
    message: 'The server has encountered an error, try again',
  };
    if (acceptedTypes[0] === 'text/xml') {
	//create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseJSON.message}</message>`;
    responseXML = `${responseXML} </response>`;    

	//return response passing out string and content type
    return respond(request, response,500, responseXML, 'text/xml');
  }
  respondJSON(request, response, 500, responseJSON);
};

const notImplemented = (request, response,params, acceptedTypes) => {
  const responseJSON = {
    message: 'The request method is not supported by server',
  };
    if (acceptedTypes[0] === 'text/xml') {
	//create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseJSON.message}</message>`;
    responseXML = `${responseXML} </response>`;    

	//return response passing out string and content type
    return respond(request, response,501, responseXML, 'text/xml');
  }
  respondJSON(request, response, 501, responseJSON);
};


module.exports = {
  success,
  badRequest,
  unauthorized,
  notFound,
  forbidden,
  internal,
  notImplemented,
};

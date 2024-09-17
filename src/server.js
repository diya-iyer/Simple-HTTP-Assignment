const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');
const imgHandler = require('./imageResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, respose) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, respose);
      break;
    case '/page2':
      htmlHandler.getPage2(request, respose);
      break;
    case '/hello':
      textHandler.getHello(request, respose);
      break;
    case '/time':
      textHandler.getTime(request, respose);
      break;
    case '/helloJSON':
      jsonHandler.getHelloJSON(request, respose);
      break;
    case '/timeJSON':
      jsonHandler.getTimeJSON(request, respose);
      break;
    case '/dankmemes':
      imgHandler.getImage(request, respose);
      break;
    case '/rich-client':
      htmlHandler.getRichClient(request, respose);
      break;
    default:
      htmlHandler.getIndex(request, respose);
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});

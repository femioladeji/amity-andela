const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

if (process.env.NODE_ENV === 'production') {
    // Change the cwd to server to mimic running directly
    process.chdir('server');
    // Only require inside the if block so we don't run the server code twice
    // in development
    const runServer = require('./server/dist').runServer;
    // Just run the server
    runServer(process.env.PORT || 8080);
}
else {
    console.log('the main index.js');
    const app = express();
    app.use('', proxy({
        target: 'http://localhost:8080/',
        logLevel: 'warn', // Keep the logs clean
        ws: true, // Proxy websockets too
        router: {
            // Anything to /api goes to our backend
            'localhost:8000/api': 'http://localhost:3001'
        }
    }));
    app.listen(process.env.PORT || 8000, () => {
        console.log('full stack dev app running on ', process.env.PORT || 8000)
    });
}
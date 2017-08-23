import path from 'path';
import express from 'express';

const app = express();

// API endpoints go here!


// Serve the built client
app.use(express.static(path.resolve(__dirname, '../../client/dist')));

app.get('/api/test', (req, res) => {
    res.send('this is a test');
});

app.get('/test', (req, res) => {
    res.send('another one');
});

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../../client/dist', 'index.html');
    res.sendFile(index);
});

let server;
function runServer(port=3001) {
    return new Promise((resolve, reject) => {
        server = app.listen(port, () => {
            console.log('server ready on ', port);
            resolve();
        }).on('error', reject);
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer
};
const app = require('./app');

const listenPort = process.env.PORT || 3000;

app.listen(listenPort, () => console.info(`Running on port ${listenPort}`));

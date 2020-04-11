import * as express from 'express';

const app = express();

app.use(function(req, res) {
    res.end('hello');
})

const port = process.argv[2] || process.env.PORT || 2020;

app.listen(port, function () {
    console.log("Listening on", port);
})

export default app;

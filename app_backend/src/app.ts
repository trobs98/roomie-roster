import Express from "express";

const app = Express();
const port = 3100;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    return console.log(`Express is listeng at http://localhost:${port}`);
});
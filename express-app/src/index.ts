import express from 'express';

export const app = express();

console.log("index file ran")
app.use(express.json())

function sum(a: number, b: number) {
    return a + b;
}

app.post('/sum', (req, res) => {

    // @ts-ignore
    const a = parseInt(req.headers["a"]);
    // @ts-ignore
    const b = parseInt(req.headers["b"]);

    res.status(200).json({ data: sum(a, b) })
});

export default app;

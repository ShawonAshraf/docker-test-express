import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({
    message: 'hey there docker!',
    status: '200',
  });
});

app.get('/status', (req, res) => {
  res.send({
    status: '200',
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at * ${port}`);
});

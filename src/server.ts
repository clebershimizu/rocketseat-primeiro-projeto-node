import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

routes.post('/users', (request, response) => {
  const { name, email } = request.body;
  const user = {
    name,
    email,
  };

  response.json(user);
});

app.listen(3333, () => {
  console.log('Server started on port 3333.');
});

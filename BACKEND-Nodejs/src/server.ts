import express from 'express';
import { v4 as uuid } from 'uuid';
import cors from 'cors'

// Create express server
const app = express();

app.use(cors({ origin: '*'}))

// Create port
const port = process.env.PORT || 3000;
// Create express json
app.use(express.json());

interface User {	
  id: string;
  name: string;
  email: string;
}

const user: User[] = []

// Tipos de parâmetros
// Query params: request.query (Filtros, ordenação, paginação, ...)
// /users?perPage=3

// Route params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// HTTP Methods (GET, POST, PUT, DELETE)
app.get('/users', (req, res) => { 
  // const page = req.query;
  return res.json(user);
});

app.post('/users', (req, res) => { 
  // receber os dados do novo usuaário
  const { name, email } = req.body;
  // criar um novo usuário
  const newUser = {
    id: uuid(),
    name,
    email
  };
  // adicionar o novo usuário no array
  user.push(newUser);
  // retornar o usuário criado
  return res.json(newUser);
});

app.put('/users/:id', (req, res) => { 
 // receber os dados do usuário
  const { id } = req.params;
  const { name, email } = req.body;

  // localizar o usuario na base de dados
  const index = user.findIndex(user => user.id === id);

  // verificar se o usuário existe
  if (index < 0) {
    return res.status(404).json({ error: 'User not found' });
  }

  // alterar os dados do usuário
  user[index].name = name;
  user[index].email = email;

  // retornar os dados do usuário alterado
  return res.json(user[index]);
});

app.delete('/users/:id', (req, res) => { 
  // receber os dados do usuário
  const { id } = req.params;

  // localizar o usuario na base de dados
  const index = user.findIndex(user => user.id === id);

  // verificar se o usuário existe
  if (index < 0) {
    return res.status(404).json({ error: 'User not found' });
  }

  // deletar o usuário
  user.splice(index, 1);

  // retornar o usuário deletado
  return res.status(204).send();
});


app.listen(port, () => {
    console.log('Server started on port ' + port);
}
);

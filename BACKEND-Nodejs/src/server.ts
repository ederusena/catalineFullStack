import express from 'express';

// Create express server
const app = express();
// Create port
const port = process.env.PORT || 3000;
// Create express json
app.use(express.json());

// Tipos de parâmetros
// Query params: request.query (Filtros, ordenação, paginação, ...)
// /users?perPage=3

// Route params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// HTTP Methods (GET, POST, PUT, DELETE)
app.get('/users', (req, res) => { 
  const page = req.query;

  return res.json(page);
});

app.post('/users', (req, res) => { 
  const body = req.body;
  console.log(body);
  
  return res.json({ message: 'Criando usuário'});
});

app.put('/users/:id', (req, res) => { 
  const params = req.params;
  console.log(params);

  return res.json({ message: 'Atualizando usuário'});
});

app.delete('/users', (req, res) => { 
  return res.json({ message: 'Delete usuário'});
});


app.listen(port, () => {
    console.log('Server started on port ' + port);
}
);

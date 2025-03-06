import express from "express";
const app = express();
app.use(express.json());

const coisas = [
  { id: 1, nome: "Coisa 1", descricao: "Descrição da coisa 1" },
  { id: 2, nome: "Coisa 2", descricao: "Descrição da coisa 2" },
];

function buscarID(id) {
  return coisas.filter((coisa) => coisa.id == id);
}

function buscarIndex(id) {
  return coisas.findIndex((coisa) => coisa.id == id);
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/coisas", (req, res) => {
  res.status(200).send(coisas);
});

app.get("/coisas/:id", (req, res) => {
  res.json(buscarID(req.params.id));
});

app.post("/coisas", (req, res) => {
  coisas.push(req.body);
  res.status(201).send("Coisa cadastrada com sucesso!");
});

app.delete("/coisas/:id", (req, res) => {
  coisas.splice(buscarIndex(req.params.id), 1);
  res.status(200).send("Coisa deletada com sucesso!");
});

export default app;

module.exports = (app) => {
  app.get("/atendimentos", (req, res) =>
    res.send("você está na rota de atendimentos e fazendo um GET")
  );

  app.post("/atendimentos", (req, res) => {
    console.log("req.body", req.body);
    res.send("você está na rota de atendimentos e fazendo um POST");
  });
};

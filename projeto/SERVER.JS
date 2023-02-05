const Express = require('express');
const App = Express();
const path = require('path');
const Rotas = require('./src/ServidorRotas/Rotas')


App.use(Express.static(path.join(__dirname, 'build')))
App.use("/", Express.json(),Express.urlencoded(),  Rotas)


App.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//#region Express Connection
App.listen('3000', (erros) => {

    if (erros)
      console.log(erros)
    else
      console.log("Porta ok" )

  })
//#endregion
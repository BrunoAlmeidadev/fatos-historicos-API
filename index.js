const express = require('express');
const { servicoBuscarFatoPorAno, servicoValidaAno } = require('./servico');
const app = express();

app.get('/fatos-historicos', (req, res)  => {
    let anoFato = req.query.ano;
    if(servicoValidaAno(anoFato))
    {
        let fato = servicoBuscarFatoPorAno(anoFato);
        res.json({fato : fato});
    }
    else
    {
        res.status(400).json({erro:'Parâmetro ano inválido'});
    }
});
   

app.listen(8080, () => {
    console.log("Servidor rodando na porta: 8080");
});
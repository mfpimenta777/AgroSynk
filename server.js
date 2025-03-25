require('dotenv').config();
const express = require('express');
const pool = require('./db');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express(); // ⚠️ Criação do app deve vir antes!

app.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
  });

// Configurar CORS
app.use(cors({
    origin: '*',  // Permite qualquer origem
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

// Middleware para processar JSON
app.use(bodyParser.json());

// Rota para cadastrar usuário na tabela tb_user
app.post('/register', async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO tb_user (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
            [nome, email, senha]
        );
        res.json({ success: true, user: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Erro ao cadastrar usuário' });
    }
});

// Iniciar o servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

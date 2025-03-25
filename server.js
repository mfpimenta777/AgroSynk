const express = require('express');
const pool = require('./db'); // Certifique-se de que este arquivo está configurado corretamente
const bcrypt = require('bcrypt');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Rota para autenticar o usuário
app.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    try {
        const result = await pool.query('SELECT * FROM tb_user WHERE email = $1', [email]);

        if (result.rows.length > 0) {
            const user = result.rows[0];

            // Comparar a senha fornecida com a senha armazenada no banco de dados
            const senhaValida = await bcrypt.compare(senha, user.senha);

            if (senhaValida) {
                res.json({ success: true, message: 'Login bem-sucedido!' });
            } else {
                res.status(401).json({ success: false, message: 'Credenciais inválidas.' });
            }
        } else {
            res.status(404).json({ success: false, message: 'Usuário não encontrado.' });
        }
    } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
        res.status(500).json({ success: false, message: 'Erro no servidor.' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
    
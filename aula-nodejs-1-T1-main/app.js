// Servidor HTTP do Repertorio da Turma
const express = require('express');
const player = require('./karaoke/player');
const { Parte } = require('./karaoke/parte');
const musicaDAO = require('./DAO/MusicaDAO');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// A interface publica fica em public/index.html.
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// Cadastra a musica de demonstracao no catalogo em memoria.
// Assim, a playlist da interface tem pelo menos uma musica para consultar.
if (musicaDAO.listarTodas().length === 0) {
    const musicaInicial = musicaDAO.inserir(player.musica.nome, player.musica.artista);
    musicaInicial.partes = player.musica.partes;
}

// API utilizada pela interface web.
app.get('/api/musicas', (req, res) => {
    return res.status(200).json(musicaDAO.listarTodas());
});

app.get('/api/musicas/:id', (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        return res.status(400).json({ erro: 'ID de musica invalido.' });
    }

    const musica = musicaDAO.buscarPorId(id);

    if (!musica) {
        return res.status(404).json({ erro: 'Musica nao encontrada.' });
    }

    return res.status(200).json(musica);
});

// Rotas antigas da atividade de player no terminal, mantidas para compatibilidade.
app.get('/musicas/:id', (req, res) => {
    return res.status(200).json(player.musica);
});

app.get('/musicas/:id/partes/:parte', (req, res) => {
    const parteIndex = Number(req.params.parte);

    if (!Number.isInteger(parteIndex) || parteIndex < 0 || parteIndex >= player.musica.partes.length) {
        return res.status(404).json({ msg: 'Parte nao existe!' });
    }

    return res.status(200).json(player.musica.partes[parteIndex]);
});

let execucoesConcluidas = 0;

app.get('/musicas/:id/play', (req, res) => {
    player.play()
        .then(() => {
            console.log(`Execucao ${++execucoesConcluidas} terminou.`);
        })
        .catch((error) => {
            console.error('Erro no player:', error.message);
        });

    return res.status(202).json({
        msg: `Musica ${player.musica.nome} enviada para execucao.`
    });
});

// Adiciona uma parte a musica que esta no player.
app.post('/musicas/:id/partes', (req, res) => {
    const { letra, tempoEspera, tag } = req.body;

    if (
        typeof letra !== 'string' || !letra.trim() ||
        typeof tag !== 'string' || !tag.trim() ||
        tempoEspera === undefined || tempoEspera === null || tempoEspera === ''
    ) {
        return res.status(400).json({
            erro: 'Campos obrigatorios: letra, tempoEspera e tag.'
        });
    }

    const tempo = Number(tempoEspera);
    if (!Number.isFinite(tempo) || tempo <= 0) {
        return res.status(400).json({
            erro: 'tempoEspera deve ser um numero maior que zero.'
        });
    }

    try {
        const parteAdd = new Parte(letra.trim(), tempo, tag.trim());
        player.musica.addParte(parteAdd);
        return res.status(201).json({ parteAdd });
    } catch (error) {
        return res.status(400).json({ erro: error.message });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}.`);
});

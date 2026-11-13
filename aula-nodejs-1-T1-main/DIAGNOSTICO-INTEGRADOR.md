# Diagnostico inicial — Integrador 2026

Este arquivo e um roteiro de trabalho. Ele nao substitui as explicacoes, implementacoes e testes que a estudante precisa desenvolver e apresentar.

## O que ja existe no codigo

- Servidor Express em `app.js`.
- Classes `Musica` e `Parte` na pasta `karaoke/`.
- Um player com musica de demonstracao em `karaoke/player.js`.
- Um DAO de musicas em memoria em `DAO/MusicaDAO.js`.
- Interface inicial em `public/index.html` e estilos em `public/estilo.css`.

## Pontos que precisam ser desenvolvidos e conferidos

- [ ] Fazer a interface carregar a lista de musicas a partir do servidor.
- [ ] Permitir selecionar uma musica e atualizar a area do player.
- [ ] Implementar o cadastro de musica pela interface.
- [ ] Implementar a edicao de nome e artista.
- [ ] Implementar a exclusao com confirmacao.
- [ ] Validar campos obrigatorios e apresentar mensagens compreensiveis.
- [ ] Conectar a aplicacao ao banco Supabase e conferir a persistencia depois de reiniciar o servidor.
- [ ] Conferir se o player continua funcionando com as musicas carregadas do banco.
- [ ] Criar e executar testes para os fluxos principais.
- [ ] Atualizar o README com instalacao, configuracao, execucao, banco de dados e testes.
- [ ] Fazer o deploy e testar a versao publicada.

## Observacoes tecnicas

- `public/player.js` ainda tem tarefas pendentes nas funcoes de carregar playlist, escolher musica e tocar.
- O DAO atual guarda os dados em memoria; isso nao e persistencia em banco.
- `app.js` foi organizado para nao executar operacoes de demonstracao do DAO ao iniciar o servidor.
- A rota `GET /musicas/:id` ainda devolve a musica do player sem localizar o registro pelo identificador informado.
- O README atual descreve uma atividade de modulos Node.js, nao o funcionamento deste karaoke.

## Seguranca

- O arquivo `.env` esta no `.gitignore`.
- Copie `.env.example` para `.env` apenas no ambiente local.
- Nunca publique senhas, tokens ou chaves secretas no repositorio.
- Use a chave publica/publishable com as politicas de seguranca do banco (RLS) configuradas. Nunca exponha uma chave `service_role` ou secret no navegador.

## Como executar localmente

Dentro da pasta `aula-nodejs-1-T1-main`:

```bash
npm install
npm start
```

Depois, abra `http://localhost:3000` no navegador.

## Como trabalhar neste roteiro

Implemente um item por vez, teste-o e anote o que aprendeu. Antes de considerar uma etapa concluida, confira o comportamento no navegador e no terminal.

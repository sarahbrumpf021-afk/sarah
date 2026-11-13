# O Repertório da Turma

Aplicação de karaokê desenvolvida em Node.js e Express como projeto integrador de Programação III.

## Tecnologias

- Node.js (versão 20 ou superior)
- Express
- JavaScript no navegador
- Supabase (integração ainda pendente de configuração e validação)

## Requisitos

- Node.js 20 ou superior
- npm

## Instalação e execução local

1. Entre nesta pasta do projeto:

   ```bash
   cd aula-nodejs-1-T1-main
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor:

   ```bash
   npm start
   ```

4. Acesse no navegador:

   ```text
   http://localhost:3000
   ```

Durante o desenvolvimento, também é possível usar `npm run dev` para iniciar o servidor com reinicialização automática quando os arquivos mudarem.

## Estrutura principal

- `app.js`: servidor Express e rotas HTTP.
- `karaoke/musica.js`: classe que representa uma música.
- `karaoke/parte.js`: classe que representa uma parte da música.
- `karaoke/player.js`: música de demonstração e execução do player no terminal.
- `DAO/MusicaDAO.js`: operações de listagem, busca, cadastro, edição e remoção em memória.
- `public/index.html`: estrutura da interface web.
- `public/estilo.css`: estilos da interface.
- `public/player.js`: comportamento do player no navegador.

## Configuração do Supabase

O modelo de variáveis está em `.env.example`. Quando a integração com o Supabase for configurada:

1. Crie um arquivo local chamado `.env` nesta pasta.
2. Preencha as variáveis com os dados do projeto Supabase.
3. Mantenha o arquivo `.env` apenas no ambiente local: ele está listado no `.gitignore`.

Nunca publique senhas, tokens ou chaves secretas. A chave usada em aplicações no navegador deve ser a chave pública apropriada, com as políticas de RLS configuradas no banco. Não use uma chave `service_role` no navegador.

## Testes

O projeto possui o comando `npm test`, configurado para executar testes com o test runner nativo do Node.js. Os testes dos fluxos da aplicação ainda precisam ser escritos e executados.

## Estado do desenvolvimento

Este repositório ainda está em desenvolvimento. A interface inicial e o servidor Express existem, mas os fluxos abaixo precisam ser implementados e testados antes de considerar o projeto concluído:

- carregar a playlist pela API e selecionar uma música;
- executar a música selecionada no player do navegador;
- cadastrar, editar e excluir músicas pela interface;
- validar os formulários e apresentar mensagens de erro;
- integrar a persistência com o Supabase;
- testar a persistência após reiniciar o servidor;
- criar e executar testes automatizados;
- configurar e verificar o deploy.

Consulte `DIAGNOSTICO-INTEGRADOR.md` para acompanhar os pontos pendentes. Marque uma etapa como concluída somente depois de implementá-la e conferir seu funcionamento.

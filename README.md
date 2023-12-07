# AplicativoMobile
Esse projeto foi um trabalho feito para minha faculdade.

<h1>Passo a passo para iniciar servidor</h1>
<p>Primeiramente, com os arquivos do repo "ServidorAppMobile" (https://github.com/DanyAxeDev/ServidorAppMobile.git) baixados, abrimos o terminal (Visual Studio Code ou qualquer outro IDE) na pasta onde está o projeto, e inserimos "npm start". Com isso, nosso servidor foi iniciado</p>
<p>Agora, precisamos do ngrok para criar um domínio com requisições HTTPS (requisições HTTP não são permitidas em smartphones). Para isso, vamos instalar o ngrok acessando este link: https://ngrok.com/download</p>
<p>Após isso, precisamos criar uma conta no ngrok, e para isso, basta acessar esse link: https://dashboard.ngrok.com/login</p>
<p>Com uma conta, ele nos dará um Authtoken, na aba "Your Authtoken", então basta acessar a aba e inserir a chave, digitando no terminal o comando: </p>
<p><b>ngrok config add-authtoken SUA CHAVE</b></p>
<p>Após isso, basta digitar no terminal o comando:</p>
<p><b>ngrok http 3000</b></p>
<p>Com isso, nosso servidor está rodando e num domínio com requisições HTTPS. Agora, basta iniciar o projeto mobile</p>

<h1>Utilizando o mongoDB</h1>
<p>Para trabalharmos com o banco de dados MongoDB, devemos baixar e instalar a versão gratuita no endereço https://www.mongodb.com/try/download/community.</p>
<p>Ao final da instalação, teremos o banco de dados instalado como um serviço, além de um aplicativo para gerência com o nome MongoDB Compass.</p>
<p>Com o serviço ativo, vamos abrir o gerenciador e clicar diretamente na opção Connect, abrindo uma conexão com o servidor de forma local. Efetuada a conexão, vamos criar um banco de dados com o nome "Academia", contendo uma coleção denominada "Atividades", mas sem marcar a opção Capped Collection, pois isso impediria a remoção de registros.</p>

# Planos para o futuro
<li>
  <ol>Terminar tela de financeiro, adicionando métodos para efetuar pagamentos e visualizar faturas pendentes</ol>
  <ol>Terminar tela de treinos, adicionando modelos de treinos prontos, recolhidos através de uma API. E uma tela para treinos personalizados, que fornecerá exercicios para o usuário montar seu próprio treino</ol>
  <ol>Melhorar o sistema de login, utilizando tokens de acesso</ol>
</li>

# AplicativoMobile

<h1>Passo a passo para iniciar servidor</h1>
<p>Primeiramente, com os arquivos do repo "ServidorAppMobile" baixados, abrimos o terminal (Visual Studio Code ou qualquer outro IDE) na pasta onde está o projeto, e inserimos "npm start". Com isso, nosso servidor foi iniciado</p>
<p>Agora, precisamos do ngrok para criar um domínio com requisições HTTPS (requisições HTTP não são permitidas em smartphones). Para isso, vamos instalar o ngrok acessando este link: https://ngrok.com/download</p>
<p>Após isso, precisamos criar uma conta no ngrok, e para isso, basta acessar esse link: https://dashboard.ngrok.com/login</p>
<p>Com uma conta, ele nos dará um Authtoken, na aba "Your Authtoken", então basta acessar a aba e inserir a chave, digitando no terminal o comando: </p>
<p><b>ngrok config add-authtoken SUA CHAVE</b></p>
<p>Após isso, basta digitar no terminal o comando:</p>
<p><b>ngrok http 3000</b></p>
<p>Com isso, nosso servidor está rodando e num domínio com requisições HTTPS. Agora, basta iniciar o projeto mobile</p>

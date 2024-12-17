const express = require('express');

const app = express();

app.post('/webhook', express.json({type: 'application/json'}), (request, response) => {

  response.status(202).send('Accepted');

  const githubEvent = request.headers['x-github-event'];

  if (githubEvent === 'ping') {
    console.log('GitHub sent the ping event\n');
  }else if (githubEvent === 'push') {
    console.log('GitHub sent the push event\n');
    try{
      const data = request.body; //data == dados em Inglês
      const name = data.repository.owner.name;  //nome de usuário GitHub que fez a modificação (push)
      const message = data["commits"][0]["message"]; //mensagem do commit
      const date = data["commits"][0]["timestamp"]; // data do push
      const repository = data.repository.name; //nome do repositório

      console.log(`|Usuário ${name} fez um ${githubEvent} em ${date}|\n|  Mensagem: ${message}|\n|Repositório: ${repository}|`);
    }catch (error){
      console.log("Deu ruim");
    }
  }else {
    console.log(`Unhandled event: ${githubEvent}`);
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

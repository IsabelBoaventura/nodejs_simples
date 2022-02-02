# nodejs_simples

# Integração do Node com o Estilo

Usando:
 * node - versão 16.13.2;
 * npm - versão 8.1.2;
 * chocolatey - versão 0.10.15;

Seguindo as orientações do site:

	https://stackabuse.com/guide-to-handlebars-templating-engine-for-node/

Criada a pasta vazia onde irá ser adicionado o exemplo: `stackabuse`;

Aberto o prompt de comando dentro da pasta e digitado o comando:
	#### `npm init -y` 

Com isto foi gerado o arquivo 'package.json' dentro contendo as informações do projeto.
Por enquanto apenas isto:
<pre>
{
  "name": "stackabuse",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
</pre>

Instalando as bibliotecas express e express-handlebars

#### `npm install --save express express-handlebars`

Criando os arquivos e pastas como indicado no artigo
.

├── app.js

└── views

	├── home.handlebars
	
    	└── layouts
        	
		└── main.handlebars
       
       
 Seguindo as orientações do site,  apresenta erro  com o código:  
 <pre>
 app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
</pre>

Node informa que `exphbs` não é uma função.

Para corrigir esta situação foi realizada a tentativa de upgrade da versão do node para 10.16.1, sem sucesso!

## Dando certo!!

Modificado o código original do sistema para:
<pre>
const express = require('express');
const { engine } = require ('express-handlebars');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.get('/', (req, res) => {
    res.render('main');
});

app.listen(3000);

</pre>

Conforme orientação deste site: 

  https://stackoverflow.com/questions/69962757/typeerror-handlebars-is-not-a-function
  
Página apresentando as informações conforme o site de teste.

# Finalizando

Até a parte onde o 'post' só tem um item de cada,  funciona, quando o post tem mais de um item  começa a apresentar erro.

Como esta parte era para fazer adicionar o estilo, até aqui esta bom e Funcionado.

Retornar depois para adicionar mais itens e fazer ele funcionar com mais itens e corretamente.




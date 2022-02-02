const express = require('express');
const { engine } = require ('express-handlebars');

const app = express();

/*
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
*/

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.get('/', (req, res) => {
    //res.render('main');
	res.render('home', {
        post: 
			{
				author: 'Janith Kasun 01/02/2021 2227',
				image: 'https://picsum.photos/150/150',
				comments: [ 'This is the first comment',
                'This is the second comment',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec fermentum ligula. Sed vitae erat lectus.'
           ]
			
            }
		
	});
});

app.listen(3000, () => {
    console.log('o web server esta trabalhando na porta  3000');
});
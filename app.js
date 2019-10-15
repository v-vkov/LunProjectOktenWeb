const path = require('path'),
      express = require('express'),
      hBars = require('express-handlebars');
      
const app = express();
const port = 3000;
const db = require('./dataBase').getInstance();
db.setModels();

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.engine('.hbs', hBars({
    extname: '.hbs', 
    defaultLayout: null
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

const {userRouter, houseRouter} = require('./router');

app.get('/', (req, res) => res.render('main'));
app.get('/login', (req, res) => res.render('login'));
app.get('/sign', (req, res) => res.render('sign'));
app.get('/gethouse', (req, res) => res.render('gethouse'));

app.use('/users', userRouter);
app.use('/houses', houseRouter);

app.all('*', (req, res) => {
    res.render('nfound');
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

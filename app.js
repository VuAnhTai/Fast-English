var express = require('express');
var exphbs = require('express-handlebars');
var exphbs_section = require('express-handlebars-sections');
var path = require('path');

var app = express();

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: 'views/layouts/',
    helpers: {
    	section: exphbs_section()
    }
}));
app.set('view engine', 'hbs');

app.use(express.static(
    path.resolve(__dirname, 'public')
));

// app.get('/category/', (req, res) => {
//     categoryRepo.loadAll().then(rows => {
//         var vm = {
//             categories: rows
//         };
//         res.render('category/index', vm);
//     });
// });

app.get('', (req, res) => {
    res.render('home');
});

app.listen(3002, () => {
    console.log('server running on port 3000');
});
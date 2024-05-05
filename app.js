const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Импортируем роутеры
const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games'); 
const categoriesRoute = require('./routes/categories'); 
const usersRouter = require('./routes/users'); 

const PORT = 3000;
const app = express();

app.use(
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRoute,
    gamesRouter,
    categoriesRoute,
    usersRouter
  );  

app.listen(PORT, () => {
    // Если всё работает, консоль покажет, какой порт приложение слушает
    console.log(`App listening on port ${PORT}`)
})

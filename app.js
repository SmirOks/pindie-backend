const express = require('express');
const path = require('path');


// Импортируем роутеры
const mainRoute = require('./routes/main');
//const gamesRouter = require('./routes/games'); 

const PORT = 3000;
const app = express();

// Теперь клиент имеет доступ только к публичным файлам
app.use(express.static(path.join(__dirname, 'public'))); 
// Запускаем
app.use(mainRoute); 

app.listen(PORT, () => {
    // Если всё работает, консоль покажет, какой порт приложение слушает
    console.log(`App listening on port ${PORT}`)
})

// Создаём роут для запросов пользователей 
const usersRouter = require('express').Router();

// Импортируем вспомогательные функции
const {findAllUsers,createUser} = require('../middlewares/users');
const {sendAllUsers,sendUserCreated} = require('../controllers/users');

// Обрабатываем GET-запрос с роутом '/users'
usersRouter.get('/users', findAllUsers, sendAllUsers);

usersRouter.post(
    "/users",
    findAllUsers,
    createUser,
    sendUserCreated
  );
// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;
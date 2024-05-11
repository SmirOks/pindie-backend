// Файл middlewares/games.js

// Импортируем модель
const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  // По GET-запросу на эндпоинт /games найдём все документы категорий
  // и с помощью метода populate запросим данные о связанных
  // категориях и пользователях
  req.gamesArray = await games.find({}).populate("categories").populate("users");
  next();
};

const createGame = async (req, res, next) => {
  console.log("POST /games");
  try {
    console.log(req.body);
    req.game = await games.create(req.body);
    next();
  } catch (error) {
    res.status(400).send("Error creating game");
  }
};
// Экспортируем функцию поиска всех игр
module.exports = {findAllGames,createGame};
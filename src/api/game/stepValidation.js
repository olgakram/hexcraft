'use strict';

const Hex = require('./hex.js');

module.exports = function(game, step, error) {
  if (game.player1.id !== step.userId && game.player2.id !== step.userId) {
    return error('Неправильный пользователь!', 1);
  }

  if (game.gameSteps.length % 2 !== 0 && step.userId === game.player1.id) {
    return error('Не ваш ход!', 2);
  }

  let user = (game.player1.id === step.userId)? 'player1' : 'player2';
  if (Hex.findByIndex(game.Map.MapData, step.old.i, step.old.j).cellstate !== user) {
    return error('Вы не владеете фигурой!', 3);
  }

  let destination = Hex.findByIndex(game.Map.MapData, step.current.i, step.current.j);
  if (destination && destination.cellstate !== 'empty') {
    return error('Обнаружены коллизии!', 4);
  }

  let neighborsNeighbors = Hex.findNeighborsNeighbors(game.Map.MapData, step.old.i, step.old.j);
  if (!Hex.findByIndex(neighborsNeighbors, step.current.i, step.current.j)) {
    return error('Превышено расстояние!', 5);
  }

};
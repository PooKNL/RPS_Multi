// src/games/game/game-model.js

'use strict';

// game-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  playerId: { type: String, required: false},
  playerChoice: { type: String, required: false},
  isWinner: { type: Boolean, required: false}
});

const gameSchema = new Schema({
  title: { type: String, required: true },
  players:[playerSchema],
  score: { type: Number, required: false },
  timer: { type: Number, required: false},
  readyToPlay: { type: Boolean, required: false},
  inSession: { type: Boolean, required: false},
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const gameModel = mongoose.model('game', gameSchema);

module.exports = gameModel;

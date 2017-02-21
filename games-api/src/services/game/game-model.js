// src/games/game/game-model.js

'use strict';

// game-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const choiceSchema = new Schema({
  gameChoice: { type: String, required: true },
})

const playerSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
  name: { type: Schema.Types.ObjectId, ref: 'user' },
  Choice1: { type: String, required: false},
  Choice2: { type: String, required: false},
  isWinner: { type: Boolean, required: false}
});

const gameSchema = new Schema({
  title: { type: String, required: true},
  playerOne: playerSchema,
  playerTwo: playerSchema,
  choice:[choiceSchema],
  winner: { type: Boolean, required: false },
  readyToPlay: { type: Boolean, required: false},
  inSession: { type: Boolean, required: false},
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
  userId: { type: Schema.Types.ObjectId, ref: 'user' }
});

const gameModel = mongoose.model('game', gameSchema);

module.exports = gameModel;

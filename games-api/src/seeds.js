// src/seeds.js

const feathers = require('feathers-client');
const authentication = require('feathers-authentication');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const host = 'http://localhost:3030';
const app = feathers()
  .configure(feathers.hooks())
  .configure(feathers.authentication({
    type: 'local'
  }))
  .configure(rest(host).superagent(superagent));

// services
const userService = app.service('users');
const gameService = app.service('games');


const user = [
  {
  name: 'Thanos Scorpyking',
  email: 'thanos@stubborn.com',
  password: 'abcd1234'
  },
  {
  name: 'RJ',
  email: 'rj@annoying.com',
  password: 'abcd1234'
  },
  {
  name: 'Bert',
  email: 'bert@stubborn.com',
  password: 'abcd1234'
  },
  {
  name: 'Frits',
  email: 'frits@annoying.com',
  password: 'abcd1234'
  }
    ]


const games = [
  {
  title: "Game 1",
  players: [
    {userId: "58a987c2bd272a276c3c6c82"},
    {userId: "58a987c2bd272a276c3c6c83"}
  ],
  readyToPlay: true,
  inSession: false
  },

  {
  title: "Game 2",
  players: [
    {userId: "58a987c2bd272a276c3c6c84" },
    {userId: "58a987c2bd272a276c3c6c85" }
  ],
  readyToPlay: true,
  inSession: false
  }
]


// Seed the user and game!
userService.create(user)
  .then((result) => {
    console.log('User created, authenticating as user...');

    app.authenticate({
      type: 'local',
      email: user.email,
      password: user.password,
    }).then((result) => {
      console.log('Authenticated, seeding games...');

      games.map((game) => {
        gameService.create(Object.assign({}, game, { token: result.token }))
          .then((result) => {
            console.log('Game seeded...');
          }).catch((error) => {
            console.error('Error seeding game!', error);
          });
      })
    }).catch((error) => {
      console.error('Error authenticating!', error);
    });
  })
  .catch((error) => {
    console.error('Error creating user!', error);
  });

'use strict'

module.exports = function(hook) {
  return hook.app.service("games").get(hook.id)
    .then((game) => {
      if (hook.data.joinType === 'join') {
        console.log('JOINTYPE')
        if ( game.players.length === 1 && hook.params.user._id != game.players[0].userId ) {
          console.log('VALIDATED')
        let data = {};

        data['$addToSet'] = { players: {
          userId: hook.params.user._id,
          name: hook.params.user.name,
        }
        //set gamestatus to
        };

        hook.data = data;
      }
      else {
        console.log('player already part of game or game already full')
      }
    }

  })
}

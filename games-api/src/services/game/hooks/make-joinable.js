'use strict'

module.exports = function(options) {
  return function(hook) {
    return hook.app.service('games').get(hook.id)
      .then((game) => {
        if (game.creatorId === hook.params.user._id) {
          console.log('You are the creator and already in the game');
        else if
          const action = hook.data.join ? '$addToSet' : '$pull';
          let data = {};
          data[action] = { joinedBy: hook.params.user._id };
          hook.data = data;
          console.log(hook.data);
        else {
          console.log("Wha' happened?")
        }
        }
      })
  }
}

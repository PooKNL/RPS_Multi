'use strict'

module.exports = function(options){
  return function(hook) {
  return hook.app.service('games').get(hook.id)
    .then((game) => {
        if (hook.data.joinType === 'join') {
          let data = {};
          data.playerTwo = {
            name: hook.params.user.name,
            userId: hook.params.user._id
          };

          hook.data = data;
        }
        else {

        }
    })
  }
}

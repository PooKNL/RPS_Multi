'use strict'

module.exports = function(hook) {
    console.log("Works")
    return hook.app.service("games").get(hook.id)
      .then((game) => {

        console.log("Whammy")
        if (hook.data.joinType === 'join') {
          let data = {};
          data.playerTwo = {
            name: hook.params.user.name,
            userId: hook.params.user._id
          };
          console.log(hook.params.user)
          console.log("#####################")
          console.log("username:", hook.params.user.name, "user id", hook.params.user._id)
          hook.data = data;
        }
        else {
          console.log('Game is full or user is already joined')
        }
      }
    )
  }

'use strict';

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    const user = hook.params.user;

    hook.data.userId = user._id;

    hook.data.players = [{
      userId: user._id,
    }];

    hook.data.playerOne = {
      userId: user._id,
      name: user._id,
      }

  };
};

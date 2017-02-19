'use strict';

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    const choice1 = hook.data.choice2;
    const choice2 = hook.data.choice2;

  const getWinner(choice1, choice2) {
        let result = '';
        if (choice1 === choice2) {
            result = 'DRAW';
        } else {
            switch (choice1) {
            case 'ROCK':
                result = (choice2 === 'SCISSORS') ? 'WINNER' : 'LOSER';
                break;
            case 'SCISSORS':
                result = (choice2 === 'PAPER') ? 'WINNER' : 'LOSER';
                break;
            case 'PAPER':
                result = (choice2 === 'ROCK') ? 'WINNER' : 'LOSER';
                break;
            default:
                result = 'DRAW';
                break;
            }
        }
        hook.data.result = result
    }

}

'use strict';

const defaults = {};

const getWinner = (choice1, choice2) => {
    let result = '';
    if (choice1 === choice2) {
        return result = 'DRAW';
    } else {
        switch (choice1) {
        case 'ROCK':
            return result = (choice2 === 'SCISSORS') ? 'Player 1 wins!' : 'Player 2 wins!';
            break;
        case 'SCISSORS':
            return result = (choice2 === 'PAPER') ? 'Player 1 wins!' : 'Player 2 wins!';
            break;
        case 'PAPER':
            return result = (choice2 === 'ROCK') ? 'Player 1 wins!' : 'Player 2 wins!';
            break;
        default:
            return result = 'DRAW';
            break;
        }

    }

}


module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    const choice1 = hook.data.choice1;
    const choice2 = hook.data.choice2;

    getWinner('SCISSORS', 'PAPER')
    hook.data.result = result

    console.log(result)
  }
}

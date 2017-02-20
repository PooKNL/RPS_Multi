import API from '../../middleware/api'
export const CREATE_GAME = 'CREATE_GAME'

export default (newGame) => {
  return {
    type: CREATE_GAME,
    payload: newGame
  }
}

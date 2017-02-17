export const SAVE_GAME = 'SAVE_GAME'

export default (saveGame) => {
  return {
    type: SAVE_GAME,
    payload: saveGame
  }
}

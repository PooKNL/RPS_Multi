export const SAVE_RECIPE = 'SAVE_RECIPE'

export default (saveRecipe) => {
  return {
    type: SAVE_RECIPE,
    payload: saveRecipe
  }
}

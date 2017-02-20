import API from '../../middleware/api'
import loadError from '../load/error'
import loadSuccess from '../load/success'
import loading from '../loading'

const api = new API()
const games = api.service('games')

export const GAME_CREATED = 'GAME_CREATED'

export default (title) => {
  return (dispatch) => {
    dispatch(loading(true))

    // create game in database
    api.app.authenticate()
    .then(() => {

      games.create({ title: title }) // with what?

      // then => go to reducer to change state
      .then((response) => {
        dispatch(loadSuccess())
        // history.push to the created game
      })

      // catch => there was an error
      .catch((error) => {
        dispatch(loadError(error))
      })

      // then => clean up loading spinner
      .then(() => {
        dispatch(loading(false))
      })
    })
  }
}

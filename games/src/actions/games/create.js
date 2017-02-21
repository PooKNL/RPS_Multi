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

    api.app.authenticate()
    .then(() => {

      games.create({ title: title })

      .then((response) => {
        dispatch(loadSuccess())

      })

      .catch((error) => {
        dispatch(loadError(error))
      })

      .then(() => {
        dispatch(loading(false))
      })
    })
  }
}

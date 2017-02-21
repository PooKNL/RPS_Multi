import API from '../../middleware/api'
import loadError from '../load/error'
import loadSuccess from '../load/success'
import loading from '../loading'
import { history } from '../../store'

export const JOINED_GAME = 'JOINED_GAME'

const api = new API()
const games = api.service('games')

export default (gameId) => {
  return (dispatch) => {
    dispatch(loading(true))

    api.app.authenticate()

    .then(() => {
      games.patch(gameId, { joinType: 'join' })

      .then((response) => {
        dispatch(loadSuccess())
        dispatch({
          type: JOINED_GAME,
          payload: response
        })
        const gameLink = `/games/${response._id}`
        history.push(gameLink)
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

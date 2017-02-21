
import loadError from '../load/error'
import loadSuccess from '../load/success'
import loading from '../loading'
import {history} from '../../store'
import API from '../../middleware/api'

export const JOINED_GAME = 'JOINED_GAME'

const api = new API()
const games = api.service('games')

export default(gameId) => {
  console.log('Loading.....Loading...', gameId)
  return(dispatch) => {
    dispatch(loading(true))

    api.app.authenticate()

    .then(() => {
      console.log('authenticated', gameId)
      games.patch(gameId, { joinType: 'join' })
      .then((response) => {
        console.log('this worked as well')
        dispatch(loadSuccess())
        dispatch({
          type: JOINED_GAME,
          payload: response,
        })
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

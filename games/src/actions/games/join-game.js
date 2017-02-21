import API from '../../middleware/api'
const api = new API()
const games = api.service('games')

export default (games, user) => {
  const joined = game.joinedBy.filter((join) => (join === user._id)).length > 0
  api.app.authenticate()
    .then(() => {
      games.patch(game._id, { joined: !joined })
    })
    .catch((error) => {
      console.error(error)
      // e.g. redirect to sign in!
    })

  return { type: 'JOINED_GAME' }
}

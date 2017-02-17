export const APP_LOADING = 'LOADING'
export const APP_DONE_LOADING = 'DONE_LOADING'

export default (loading) => {
  if (loading) return { type: APP_LOADING}
  return { type APP_DONE_LOADING}
  }


//   return bool ? { type: APP_LOADING } : { type: APP_DONE_LOADING }
// }

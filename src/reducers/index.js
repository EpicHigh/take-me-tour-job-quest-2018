export default (state = '', action) => {
  switch (action.type) {
    case 'FETCH':
      return action.joke
    default:
      return state
  }
}

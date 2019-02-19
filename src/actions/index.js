import axios from 'axios'

const addTheJokes = joke => ({ type: 'FETCH', joke })
export const fetchTheJokes = ({
  firstName = 'Hired',
  lastName = 'Me'
} = {}) => {
  return async dispatch => {
    const {
      data: {
        value: { joke }
      }
    } = await axios.get(
      `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
    )
    dispatch(addTheJokes(joke))
  }
}

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTheJokes} from '../actions'
import {Form} from '../components/Forms'
import {Caution, GlobalStyle, Text} from '../styles'

class App extends Component {
  addTheJoke = e => {
    e.preventDefault()
    this.props.onFetchClick(e.target.firstname.value, e.target.lastname.value)
    e.target.firstname.value = ''
    e.target.lastname.value = ''
  }
  render() {
    const { joke } = this.props
    return (
      <>
        <GlobalStyle />
        <Form useFetch={this.addTheJoke} />
        <Text>
          {joke ? joke : 'Pleases enter to get some joke from Chuck Norris.'}
        </Text>
        <Caution joke={joke}>
          *A button is disappear, don't worry just press the ENTER
        </Caution>
      </>
    )
  }
}

const mapStateToProps = state => {
  return { joke: state.joke }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchClick: (firstName, lastName) => {
      dispatch(fetchTheJokes({ firstName, lastName }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

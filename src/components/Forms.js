import React from 'react'
import {Button, Margin, Paper, Title} from '../styles'

export const Form = props => (
  <Paper onSubmit={e => props.useFetch(e)}>
    <Margin>
      <label htmlFor="firstname">Firstname: </label>
      <Title
        type="text"
        required
        id="firstname"
        name="firstname"
        maxLength="30"
      />
    </Margin>
    <label htmlFor="lastname">Lastname: </label>
    <Title type="text" required id="lastname" name="lastname" maxLength="30" />
    <Button type="submit">Fetch</Button>
  </Paper>
)

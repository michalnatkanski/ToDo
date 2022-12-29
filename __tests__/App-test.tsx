import React from 'react'
import { render } from '@testing-library/react-native'

import App from '../App'

describe('With React Testing Library', () => {
  it('Shows "Hello world!"', () => {
    render(<App />)
  })
})
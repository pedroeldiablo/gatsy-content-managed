import React from 'react'
import renderer from 'react-test-renderer'

import Header from '../header'

describe('Header', () => {
  const id = 'test'
  const name = 'myInput'
  const value = 'selected'
  const label = 'hello'
  const data = jest.fn()

  const props = {
    id,
    name,
    value,
    label,
    data,
    checked: false,
  }

  it('renders correctly', () => {
    const tree = renderer.create(<Header {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

import React from 'react'
import styled, { css } from 'styled-components'

const getColor = props => {
  console.log('Evaluated', props.isActive)
  console.log('Evaluated', props)
  if (props.isActive) {
    return 'red'
  }
  return 'white'
}

console.log(getColor)

const ButtonComponent = styled.button`
${console.log(getColor)}
  background: ${getColor};
  padding: 1rem;
`

const DivStyle = styled.div`
  /* background: ${getColor}; */
`

export const Button = (props: ButtonProps) => {
  // console.log('What are the children?', children)
  const { text } = props
  console.log('What are the props?', props)
  console.log(props.isActive)
  return (
    <ButtonComponent {...props}>
      <div>What is going on here? {text}</div>
      <DivStyle>{`What is going on here? ${props.isActive}`}</DivStyle>
    </ButtonComponent>
  )
}

interface ButtonProps {
  text: string
  // eslint-disable-next-line react/require-default-props
  isActive?: boolean
}

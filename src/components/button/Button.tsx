import React from 'react'
import styled from 'styled-components'

const getColor = props => {
  if (props.isActive) {
    return 'red'
  }
  return 'white'
}

const ButtonComponent = styled.button`
  background: ${getColor};
  padding: 1rem;
`

const DivStyle = styled.div`
  background: ${getColor};
`

export const Button = (props: ButtonProps) => {
  const { text } = props
  return (
    <ButtonComponent {...props}>
      <div>What is going on here? {text}</div>
      <DivStyle {...props}>{`What is going on here? ${
        props.isActive ? 'This what active looks like' : 'Nothing set'
      }`}</DivStyle>
    </ButtonComponent>
  )
}

interface ButtonProps {
  text: string
  // eslint-disable-next-line react/require-default-props
  isActive?: boolean
}

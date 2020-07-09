import styled from 'styled-components'
import { space, color, layout } from 'styled-system'

export const Box = styled.div(
  {
    boxSizing: 'border-box',
    minwidth: 0,
  },
  space,
  color,
  layout
)

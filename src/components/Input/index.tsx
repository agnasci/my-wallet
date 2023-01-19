import React, { InputHTMLAttributes } from 'react'

import { Container } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = ({ ...rest }) => {
  return <Container {...rest} />
}

export default Input

import PropTypes from 'prop-types'
import { Container } from './styles'

export const Textarea = ({ value, ...rest }) => {
  return (
    <Container {...rest}>
      {value}
    </Container>
  )
}

Textarea.propTypes = {
  value: PropTypes.string
}
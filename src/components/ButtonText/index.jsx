import PropTypes from 'prop-types'

import { Container } from './styles'

export const ButtonText = ({ title, isActive = false, ...rest }) => {
  return (
    <Container
      type="button"
      $isactive={isActive.toString()}
      {...rest}
    >
      {title}
    </Container>
  )
}

ButtonText.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

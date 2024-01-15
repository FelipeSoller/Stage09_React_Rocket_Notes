import PropTypes from 'prop-types';
import { Container } from './styles'

export const Button = ({ title, loading = false }) => {
  return(
    <Container
      type='button'
      disabled={loading}
    >
      { loading ? 'Carregando...' : title }
    </Container>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool
};
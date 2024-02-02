import PropTypes from 'prop-types';
import { Container } from './styles'

export const Button = ({ title, loading = false, onClick }) => {
  return(
    <Container
      type='button'
      disabled={loading}
      onClick={onClick}
    >
      { loading ? 'Carregando...' : title }
    </Container>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onClick: PropTypes.func
};
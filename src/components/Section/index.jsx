
import PropTypes from 'prop-types';

import { Container } from './styles'

export const Section = ({ title, children }) => {
  return (
    <Container>
      <h2>{ title }</h2>
      { children }
    </Container>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired
};
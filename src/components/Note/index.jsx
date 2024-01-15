import PropTypes from 'prop-types'

import { Tag } from '../Tag'

import { Container } from './styles'

export const Note = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}

Note.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    tags: PropTypes.array
  }).isRequired
}
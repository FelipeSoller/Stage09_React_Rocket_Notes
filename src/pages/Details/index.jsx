import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Header } from '../Header'
import { Container, Links } from './styles'
export const Details = () => {
  return (
    <Container>
      <Header></Header>
      <Section title='Useful links'>
        <Links>
          <li>
            <a href='#'>Link 1</a>
          </li>
          <li>
            <a href='#'>Link 2</a>
          </li>
          <li>
            <a href='#'>Link 3</a>
          </li>
        </Links>
      </Section>
      <Button title='Back' />
    </Container>
  )
}
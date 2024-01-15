import { Header } from '../Header'

import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'

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

      <Section title='Tags'>
        <Tag title='Node.JS' />
        <Tag title='Express' />
        <Tag title='JavaScript' />
      </Section>
      <Button title='Back' />
    </Container>
  )
}
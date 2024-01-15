import { Header } from '../Header'

import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Container, Links, Content } from './styles'

export const Details = () => {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title={'Delete note'}/>

          <h1>
            React Fundamentals
          </h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos cupiditate molestiae enim. Alias error aut distinctio fugiat, ab illo nostrum accusantium, saepe quos mollitia fuga, perspiciatis porro debitis animi voluptates.
          </p>
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
        </Content>
      </main>
    </Container>
  )
}
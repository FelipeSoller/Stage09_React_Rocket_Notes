import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

export const Home = () => {
  return (
    <Container>
      <Brand>
        <h1>React Rocket Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="All" isActive={true} /></li>
        <li><ButtonText title="React" /></li>
        <li><ButtonText title="Node.JS" /></li>
      </Menu>

      <Search>
        <Input placeholder="Search by title" />
      </Search>

      <Content>
        <Section title="My Notes">
          <Note data={{ title: 'React Native', tags: [{ id: '1', name: 'Javascript' }, { id: '2', name: 'React' }]}} />
        </Section>
      </Content>

      <NewNote to='/new' >
        <FiPlus />
        Create a note
      </NewNote>
    </Container>
  )
}
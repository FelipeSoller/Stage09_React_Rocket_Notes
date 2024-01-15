import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>React Rocket Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="All" $isactive={true} /></li>
        <li><ButtonText title="React" /></li>
        <li><ButtonText title="Node.JS" /></li>
      </Menu>

      <Search>

      </Search>

      <Content>

      </Content>

      <NewNote>
        <FiPlus />
        Create a note
      </NewNote>
    </Container>
  )
}
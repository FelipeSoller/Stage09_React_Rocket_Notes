import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'

import { Container, Form } from './styles'

export const New = () => {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Create note</h1>
            <Link to="/">back</Link>
          </header>

          <Input placeholder="Title" />
          <TextArea placeholder="Description" />

          <Section title="Useful links">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem isNew placeholder="New link" />
          </Section>

          <Section title="Tags">
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem isNew placeholder="New tag" />
            </div>
          </Section>

          <Button title="Save" />
        </Form>
      </main>
    </Container>
  )
}
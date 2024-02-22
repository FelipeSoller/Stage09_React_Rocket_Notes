import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'

import { Container, Form } from './styles'
import { useState } from 'react'

export const New = () => {
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const handleAddLink = () => {
    setLinks(prevState => [
      ...prevState,
      newLink
    ])

    setNewLink('')
  }

  const handleRemoveLink = (deleted) => {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

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
            {links.map((link, index) => {
              return (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              )
            })}
            <NoteItem isNew placeholder="New link" value={newLink} onChange={e => setNewLink(e.target.value)} onClick={handleAddLink} />
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
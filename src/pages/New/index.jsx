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

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

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

  const handleAddTag = () => {
    setTags(prevState => [
      ...prevState,
      newTag
    ])

    setNewTag('')
  }

  const handleRemoveTag = (deleted) => {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
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
              {tags.map((tag, index) => {
                return (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                )
              })}
              <NoteItem isNew placeholder="New tags" value={newTag} onChange={e => setNewTag(e.target.value)} onClick={handleAddTag}/>
            </div>
          </Section>

          <Button title="Save" />
        </Form>
      </main>
    </Container>
  )
}
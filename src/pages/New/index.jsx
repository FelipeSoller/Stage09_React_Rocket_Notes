import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
import { api } from '../../service/api'

import { Container, Form } from './styles'
import { useState } from 'react'
import { ButtonText } from '../../components/ButtonText'

export const New = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

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

  const handleNewNote = async () => {
    if(!title) {
      return alert('The title is required')
    }

    if(newLink) {
      return alert('You must click in + to add a new link')
    }

    if(newTag) {
      return alert('You must click in + to add a new tag')
    }

    await api.post('/notes', {
      title,
      description,
      tags,
      links
    })

    alert('Note created successfully!')
    navigate(-1)
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Create note</h1>
            <ButtonText onClick={handleBack} title="Back" />
          </header>

          <Input placeholder="Title" onChange={e => setTitle(e.target.value)} />
          <TextArea placeholder="Description" onChange={e => setDescription(e.target.value)} />

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

          <Button title="Save" onClick={handleNewNote}/>
        </Form>
      </main>
    </Container>
  )
}
import { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'

import { api } from '../../service/api'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

export const Home = () => {
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState([])
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])


  const handleTagSelected = (tagName) => {
    if(tagName === 'all') {
      return setTagsSelected([])
    }

    const alreadySelected = tagsSelected.includes(tagName)

    if(alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)

      setTagsSelected(filteredTags)
    } else {
      setTagsSelected(prevState => [...prevState, tagName])
    }
  }

  useEffect(() => {
    const fetchTags = async () => {
      const response = await api.get('tags')

      setTags(response.data)
    }

    fetchTags()
  }, [])

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)

      setNotes(response.data)
    }

    fetchNotes()
  }, [search, tagsSelected])


  return (
    <Container>
      <Brand>
        <h1>React Rocket Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="All" onClick={() => handleTagSelected('all')} isActive={tagsSelected.length === 0} />
        </li>
        {tags.map(tag => (
          <li key={String(tag.id)}>
            <ButtonText title={tag.name} onClick={() => handleTagSelected(tag.name)} isActive={tagsSelected.includes(tag.name)} />
          </li>
        ))}
      </Menu>

      <Search>
        <Input placeholder="Search by title" onChange={e => setSearch(e.target.value)} />
      </Search>

      <Content>
        <Section title="My Notes">
          {
            notes.map(note => (
              <Note
                key={String(note.id)}
                data={note}
              />
            ))
          }
        </Section>
      </Content>

      <NewNote to='/new' >
        <FiPlus />
        Create a note
      </NewNote>
    </Container>
  )
}
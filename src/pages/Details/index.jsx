import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { api } from '../../service/api'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Container, Links, Content } from './styles'

export const Details = () => {
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  const handleRemove = async () => {
    const confirm = window.confirm('Are you sure?')

    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNotes()
  }, [params.id])

  return (
    <Container>
      <Header />
      {
        data && <main>
        <Content>
          <ButtonText title={'Delete note'} onClick={() => handleRemove(data)}/>

          <h1>
            {data.title}
          </h1>

          <p>
            {data.description}
          </p>
          <Section title='Useful links'>
            <Links>
              {data.links && data.links.map(link => (
                <li key={String(link.id)}>
                  <a href={link.url} target='_blank' rel="noreferrer">{link.url}</a>
                </li>
              ))}
            </Links>
          </Section>

          <Section title='Tags'>
            {data.tags && data.tags.map(tag => (
              <Tag key={String(tag.id)} title={tag.name} />
            ))}
          </Section>
          <Button title='Back' onClick={handleBack}/>
        </Content>
        </main>
      }
    </Container>
  )
}
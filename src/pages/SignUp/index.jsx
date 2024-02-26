import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { api } from '../../service/api'

import { Container, Form, Background } from './styles'
import { ButtonText } from '../../components/ButtonText'

export const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      return alert('Please enter all fields.')
    }

    try {
      await api.post('/users', { name, email, password })

      alert('User created!')
      navigate(-1)
    } catch (error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert('SignUp failed! Try again.')
      }
    }
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <Container>
      <Background />

      <Form>
        <h1>React Rocket Notes</h1>
        <p>Applicatioon to write and save your notes</p>

        <h2>Sign Up</h2>

        <Input
          placeholder="Name"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Register" onClick={handleSignUp}/>

        <ButtonText onClick={handleBack} title="Back to Sign In" />
      </Form>
    </Container>
  )
}
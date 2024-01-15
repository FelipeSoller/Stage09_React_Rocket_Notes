import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Background, Container, Form } from './styles'

export const SignIn = () => {
  return (
    <Container>
      <Form>
        <h1>React Rocket Notes</h1>
        <p>Applicatioon to write and save your notes</p>

        <h2>Sign In</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
        />

        <Button title="Enter" />

        <a href="#">Sign Up</a>
      </Form>

      <Background />
    </Container>
  )
}
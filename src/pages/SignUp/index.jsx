import { FiMail, FiLock, FiUser } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from './styles'

export const SignUp = () => {
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
        />

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

        <Button title="Register" />

        <a href="#">Back to Sign In</a>
      </Form>
    </Container>
  )
}
import { Button } from '../../components/Button'
import { Container } from './styles'
export const Details = () => {
  return (
    <Container>
      <h1>Details</h1>
      <Button title='Entrar' loading/>
      <Button title='Cadastrar' />
      <Button title='Voltar' />
    </Container>
  )
}
import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles"

export const Header = () => {
  return (
    <Container>
      <Profile to='/profile'>
        <img
          src="https://github.com/felipesoller.png"
          alt="Github profile avatar"
        />

        <div>
          <span>Welcome</span>
          <strong>Felipe Soller</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
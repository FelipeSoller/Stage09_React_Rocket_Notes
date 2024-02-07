import { RiShutDownLine } from "react-icons/ri"

import { useAuth } from "../../hooks/auth"

import { Container, Profile, Logout } from "./styles"

export const Header = () => {
  const { signOut } = useAuth()

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

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
import { RiShutDownLine } from "react-icons/ri"

import { useAuth } from "../../hooks/auth"
import { api } from "../../service/api"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Container, Profile, Logout } from "./styles"
import { useNavigate } from "react-router-dom"

export const Header = () => {
  const { signOut, user } = useAuth()
  const navigation = useNavigate()

  const handleSignOut = () => {
    navigation('/')
    signOut()
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder


  return (
    <Container>
      <Profile to='/profile'>
        <img
          src={avatarUrl}
          alt="User profile avatar"
        />

        <div>
          <span>Welcome</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
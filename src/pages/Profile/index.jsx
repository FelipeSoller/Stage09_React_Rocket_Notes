import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/auth'
import { api } from '../../service/api';

import { Container, Form, Avatar } from "./styles";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export const Profile = () => {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const handleUpdateProfile = async () => {
    const updatedUser = {
      name,
      email,
      password,
      new_password: newPassword
    }

    await updateProfile({ user: updatedUser, avatarFile })
  }

  const handleChangeAvatar = (event) => {
    const file = event.target.files[0]

    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
            src={avatar}
            alt="User avatar"
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input
          placeholder="Name"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Current password"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Input
          placeholder="New password"
          type="password"
          icon={FiLock}
          onChange={e => setNewPassword(e.target.value)}
        />

        <Button title="Save" onClick={handleUpdateProfile}/>
      </Form>
    </Container>
  )
}
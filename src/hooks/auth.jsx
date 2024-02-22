import { createContext, useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"

import { api } from "../service/api"

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({})

  const signIn = async ({ email, password }) => {
    try {
      const response = await api.post('sessions', { email, password})
      const { user, token } = response.data

      localStorage.setItem('@RocketNotes:user', JSON.stringify(user))
      localStorage.setItem('@RocketNotes:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ user, token })

    } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert('Login failed! Try again.')
      }
    }
  }

  const signOut = () => {
    localStorage.removeItem('@RocketNotes:user')
    localStorage.removeItem('@RocketNotes:token')

    setData({})
  }

  const updateProfile = async ({ user, avatarFile }) => {
    try {
      if(avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)

        const response = await api.patch('/users/avatar', fileUploadForm)
        user.avatar = response.data.avatar
      }

      await api.put('/users', user)

      localStorage.setItem('@RocketNotes:user', JSON.stringify(user))

      setData({ user, token: data.token })

      alert('Profile updated successfully')
    } catch (error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert('Profile cannot be updated! Try again.')
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('@RocketNotes:user')
    const token = localStorage.getItem('@RocketNotes:token')

    if(user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        user: JSON.parse(user),
        token
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, signOut, updateProfile, user: data.user }}>
      { children }
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }

AuthProvider.propTypes = {
  children: PropTypes.element
}


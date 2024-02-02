import { createContext, useContext, useState } from "react"
import PropTypes from "prop-types"

import { api } from "../service/api"

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({})

  const signIn = async ({ email, password }) => {
    try {
      const response = await api.post('sessions', { email, password})
      const { user, token } = response.data

      api.defaults.headers.Authorization = `Bearer ${token}`

      setData({ user, token })


    } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert('Login failed! Try again.')
      }
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
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


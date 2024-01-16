import { BrowserRouter } from 'react-router-dom'

import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'

export const Routes = () => {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  )
}
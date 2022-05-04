import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoute = () => {
  const jwt = localStorage.getItem('jwt')
  return (
    jwt ? <Outlet /> : <Navigate to='/login' />
  )
}
export { PrivateRoute }
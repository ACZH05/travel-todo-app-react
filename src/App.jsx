import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Checklist from './pages/Checklist'
import Bucketlist from './pages/Bucketlist'
import ErrorPage from './pages/ErrorPage'
import useLocalStorage from 'use-local-storage'
import { AuthContext } from './Contexts/AuthContext'
import RequireAuth from './components/RequireAuth'
import SectionAuth from './components/SectionAuth'
import { UsersContext } from './Contexts/usersContext'

function Layout() {
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand>Travel Plan App</Navbar.Brand>
          <Nav className='me-auto'>
            <SectionAuth>
              <Nav.Link href='/'>Checklist</Nav.Link>
              <Nav.Link href='/bucketlist'>Bucket list</Nav.Link>
            </SectionAuth>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default function App() {
  const [token, setToken] = useLocalStorage("token", null)
  const [users, setUsers] = useLocalStorage("users", [])
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <UsersContext.Provider value={{ users, setUsers}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<RequireAuth><Checklist /></RequireAuth>} />
              <Route path='bucketlist' element={<RequireAuth><Bucketlist /></RequireAuth>} />
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
              <Route path='*' element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UsersContext.Provider>
    </AuthContext.Provider>
  )
}

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

function Layout() {
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand>Travel Plan App</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Checklist</Nav.Link>
            <Nav.Link href='/bucketlist'>Bucket list</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default function App() {
  const [token, setToken] = useLocalStorage("token", null)
  return (
    <AuthContext.Provider value={{ token, setToken }}>
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
    </AuthContext.Provider>
  )
}

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Checklist from './pages/Checklist'

function Layout() {
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand>Travel Plan App</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link>Checklist</Nav.Link>
            <Nav.Link>Bucketlist</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='checklist' element={<Checklist />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

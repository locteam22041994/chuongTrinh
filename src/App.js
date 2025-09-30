import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import MenuAntd from './component/MenuAntd'
function App() {
  return (
    <>
      <div className='flex gap-5'>
        <Routes>
          <Route path='/*' element={<MenuAntd />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App

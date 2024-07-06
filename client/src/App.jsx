
import './App.css'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProductPage from './pages/ProductPage'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SuccessPage from './pages/SuccessPage'

function App() {
  const user = useSelector((state)=> state.user.currentUser);

  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/products/:category' element={<ProductList/>}/>
      <Route path='/product/:id' element={<ProductPage/>}/>
      <Route path='/cart' element={<Cart/>}/>

      <Route path='/login' element={user? <Navigate to="/"/> : <Login/>}/>
      <Route path='/register' element={ user? <Navigate to="/"/> : <Register/>}/>

      <Route path='/success' element={<SuccessPage/>}/>
    
    </Routes>
  )
}

export default App

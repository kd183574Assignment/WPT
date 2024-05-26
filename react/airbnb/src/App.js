import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home'
import UserDetails from './screens/UserDetails'
import Users from './screens/Users'
import Properties from './screens/Properties'
import AddProperty from './screens/AddProperty'
import PropertyDetails from './screens/PropertyDetails'
import Bookings from './screens/Bookings'


// import Login from './screens/Login';
// import 

function App() {
  return (
    <div className='cantainer'>
      <Routes>
        <Route path='' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='properties' element={<Properties/>}></Route>
        <Route path='property-details' element={<PropertyDetails/>}></Route>
        <Route path='add-property' element={<AddProperty/>}></Route>
        <Route path='users' element={<Users />} />
        <Route path='user-details' element={<UserDetails />} />
        <Route path='bookings' element={<Bookings />} />
      </Routes>
      <ToastContainer/> 

    </div>
  )
}

export default App;

// import React from 'react'
// // import Navbar from './components/Navbar/Navbar'
// import Navbar from './components/Navbar'
// import { Route, Routes, useLocation } from 'react-router-dom'
// import Home from './pages/Home'
// import Footer from './components/Footer'
// import AllRooms from './pages/AllRooms'
// import RoomDetails from './pages/RoomDetails'
// import MyBooking from './pages/MyBooking'
// import HotelReg from './components/HotelReg'
// import LayOut from './pages/HotelOwmer/LayOut'
// import Dashboard from './pages/HotelOwmer/Dashboard'
// import AddRoom from './pages/HotelOwmer/AddRoom'
// import ListRoom from './pages/HotelOwmer/ListRoom'

// const App = () => {
//   const isOwnerPath = useLocation().pathname.includes("owner")

//   return (
//     <div>
//       {!isOwnerPath && <Navbar />}
//       <div className="min-h-[70vh]">
//         {false && <HotelReg />}
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/rooms' element={<AllRooms />} />
//           <Route path='/rooms/:id' element={<RoomDetails />} />
//           <Route path='/my-booking' element={<MyBooking />} />
//           <Route path='/owner' element={<LayOut />} >
//             <Route index element={<Dashboard />} />
//             <Route path='add-room' element={<AddRoom />} />
//             <Route path='list-room' element={<ListRoom />} />

//           </Route>
//         </Routes>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default App





import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
import MyBooking from './pages/MyBooking'
import HotelReg from './components/HotelReg'
import LayOut from './pages/HotelOwmer/LayOut'
import Dashboard from './pages/HotelOwmer/Dashboard'
import AddRoom from './pages/HotelOwmer/AddRoom'
import ListRoom from './pages/HotelOwmer/ListRoom'

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner")

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className="min-h-[70vh]">
        {false && <HotelReg />}
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/rooms' element={<AllRooms />} /> */}
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path='/my-booking' element={<MyBooking />} />
          <Route path='/owner' element={<LayOut />}>
            <Route index element={<Dashboard />} />
            <Route path='add-room' element={<AddRoom />} />
            <Route path='list-room' element={<ListRoom />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App


import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { Navigate, useNavigate } from 'react-router-dom'

const FeatureDestination = () => {
    const navigate= useNavigate()
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-16'>
      {/* <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>Featured Destinations</h2>
        <p className='text-gray-500 text-base md:text-lg mt-2'>Discover your perfect getaway</p>
      </div> */}
      <Title title='Featured Destinations' subTitle=' Discoveer Our handpicked selection of exceptional properties around the world, offering unparalledled lurury and unforgaettable experiences.'/>

      <div className='flex flex-wrap items-center justify-center gap-6'>
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <div key={room._id} className='w-full sm:w-[300px] md:w-[300px] lg:w-[250px] bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl'>
            <HotelCard room={room} index={index} />
          </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}} className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>
         View All Destinations
      </button>
    </div>
  )
}

export default FeatureDestination




//  import React from 'react'
// import { roomsDummyData } from '../assets/assets'
// import HotelCard from './HotelCard'

// const FeatureDestination = () => {
//   return (
//     <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
//       <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
//         {roomsDummyData.slice(0, 4).map((room, index)=>(
//             <HotelCard key={room._id} room={room} index={index}/>
//         ))}
//       </div>
//     </div>
//   )
// }
// export default FeatureDestination


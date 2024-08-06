

//  import Images
import React from 'react'
import banner from '../assets/images/banner.jpg'

function Home(){
    return (
      <React.Fragment>

        {/* Home Banner */}
        <div>
          <div className="relative">
            <img
              src={banner}
              alt=""
              className="h-[500px] w-full object-right sm:object-center object-cover "
            />
            <div className="absolute top-40 start-10 sm:start-[20rem] md:start-[30rem] lg:start-[40rem] xl:start-[50rem]">
              <p className="text-3xl font-bold text-white">
                Discover endless possibilities. <br /> Explore the future.
              </p>
              <button className="bg-black text-white font-semibold px-5 py-2 rounded-md mt-6 hover:bg-gray-800">
                View Products
              </button>
            </div>
          </div>
        </div>

        {/* Trending Products goes here */}
        <div className='flex flex-wrap gap-5 mt-10 ml-10 '>
            <div  className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-[140px] sm:w-[250px]'>
              <img src={banner} alt="" className='h-[200px] sm:h-[250px] w-[200px] sm:w-[250px] object-cover hover:scale-105 transition-scale duration-300'/>
              <div className='p-3 flex flex-col gap-2 w-full mt-3'>
                <h3 className='text-sm sm:text-lg font-semibold text-slate-700 line-clamp-1'>Product Name</h3>
                <p className='text-xs sm:text-sm text-gray-600 line-clamp-2'>Product Description</p>
                
                  <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                    <p className='text-red-600 line-through text-sm'>200/=</p>
                    <p className='text-green-600 font-semibold'>100/=</p>
                  </div>
                    <p className='font-semibold'>100/=</p>
              </div>
            </div>
        </div>

        <div className='flex flex-wrap gap-5 mt-10 ml-10 '>
            <div  className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-[140px] sm:w-[250px]'>
              <img src={banner} alt="" className='h-[200px] sm:h-[250px] w-[200px] sm:w-[250px] object-cover hover:scale-105 transition-scale duration-300'/>
              <div className='p-3 flex flex-col gap-2 w-full mt-3'>
                <h3 className='text-sm sm:text-lg font-semibold text-slate-700 line-clamp-1'>Product Name</h3>
                <p className='text-xs sm:text-sm text-gray-600 line-clamp-2'>Product Description</p>
                
                  <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                    <p className='text-red-600 line-through text-sm'>200/=</p>
                    <p className='text-green-600 font-semibold'>100/=</p>
                  </div>
                    <p className='font-semibold'>100/=</p>
              </div>
            </div>
        </div>

        {/* Trending Products ends here */}
      </React.Fragment>
    );
}

export default Home


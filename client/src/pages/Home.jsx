

//  import Images
import React from 'react'
import hero from '../assets/images/banner.jpg'

function Home(){
    return (
      <React.Fragment>

        {/* Home Banner */}
        <div>
          <div className="relative">
            <img
              src={hero}
              alt=""
              className="h-[500px] w-full object-right sm:object-center object-cover "
            />
            <div className="absolute top-40 start-10 sm:start-[22rem] md:start-[32rem] lg:start-[42rem] xl:start-[52rem]">
              <p className="text-3xl font-bold text-white">
                Welcome To Our Store
              </p>
              <button className="bg-black text-white font-bold px-5 py-2 rounded-md mt-6 hover:bg-gray-800">
                View Products
              </button>
            </div>
          </div>

          
        </div>

        {/* Trending Products goes here */}

    <div className="max-w-6xl mx-auto p-2">
        <div className='text-center mt-10'>
          <h1 className='text-3xl font-bold mt-2 text-[#3d52a0] font-serif'>Trending Products</h1>
        </div>



        <div className='flex flex-wrap gap-5 mt-10 '>
            <div  className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-10 sm:w-16'>
              <img src={hero} alt="" className='h-12 sm:h-16 w-12 sm:w-16 object-cover hover:scale-105 transition-scale duration-400'/>
              <div className='p-3 flex flex-col gap-2 w-full mt-3'>
                <h3 className='text-sm sm:text-lg font-bold text-slate-800 line-clamp-1'>Product Name</h3>
                <p className='text-xs sm:text-sm text-gray-600 line-clamp-2'>Product Description</p>
                
                  <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                    <p className='text-red-600 line-through text-sm'>200/=</p>
                    <p className='text-green-600 font-bold'>100/=</p>
                  </div>
                    <p className='font-bold'>100/=</p>
              </div>
            </div>
        </div>

      
         {/* Trending Products ends here */}


        {/* Offer Products Section Start Here */}
        <div className='text-center mt-16 border-t pt-10'>
          <h1 className='text-3xl font-bold mt-2 text-[#3d52a0] font-serif'>Offer Products</h1>
        </div>
        <div className='flex flex-wrap gap-5 mt-10'>
            <div  className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-10 sm:w-16' >
              <img src={hero} alt="" className='h-16 sm:h-16 w-16 sm:w-16 object-cover hover:scale-105 transition-scale duration-400'/>
              <div className='p-3 flex flex-col gap-2 w-full mt-3'>
                <h3 className='text-sm sm:text-lg font-bold text-slate-800 line-clamp-1'>Offer Product Name</h3>
                <p className='text-xs sm:text-sm text-gray-600 line-clamp-2'>Offer Product Description</p>
                
                  <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                    <p className='text-red-800 line-through text-sm'>100/=</p>
                    <p className='text-green-800 font-bold'>200/=</p>
                  </div>
                    <p className='font-bold'>100/=</p>
              </div>
            </div>
        </div>

    {/* Offer Products Section Ends Here */}

        </div>
      </React.Fragment>
    );
}

export default Home


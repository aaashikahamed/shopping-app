

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
              className="h-[450] w-full object-right sm:object-center object-cover "
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

    <div className="max-w-7xl mx-auto p-2">
        <div className='text-center mt-10'>
          <h1 className='text-3xl font-bold mt-2 text-[#3d52a0] font-serif'>Products</h1>
        </div>



        <div className='flex flex-wrap gap-4 mt-9 '>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={hero} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>


        </div>


      
         {/* Trending Products ends here */}


        {/* Offer Products Section Start Here */}
        <div className='text-center mt-16 border-t pt-10'>
          <h1 className='text-3xl font-bold mt-2 text-[#3d52a0] font-serif'>Offer Products</h1>
        </div>
        <div className='flex flex-wrap gap-5 mt-10'>
        <div className='flex flex-wrap gap-4 mt-9 '>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={hero} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>

        </div>
        </div>
    {/* Offer Products Section Ends Here */}

        </div>
      </React.Fragment>
    );
}

export default Home


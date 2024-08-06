

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
        <div className=" flex flex-wrap gap-5 mt-10">
            <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-9 sm:w-16 '>

            </div>
        </div>
      </React.Fragment>
    );
}

export default Home


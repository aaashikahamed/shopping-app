import React from "react";
import image from '../assets/images/banner.jpg'

function Product(){
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="p-3">
                <h1 className='text-3xl font-bold pb-3 border-b'>Product Details</h1>
                <div className="flex flex-col  gap-5 mt-5 overflow-hidden md:flex-row">
    
                    <div className="flex md:flex-1  flex-col   gap-2 w-full sm:h-[640px] sm:ml-9 sm:flex-row  md:ml-0 md:h-full  md:flex-col  lg:w-[24rem]  lg:flex-none  ">
    
                        <div className="relative">
                            <img src={image} alt='' className="w-full sm:h-[480px] lg:w-[400px] md:h-full sm:order-2 md:order-1 "/>
                            { (
                                <span className="bg-orange-600 text-white font-bold rounded-2xl text-center text-xs absolute px-2 py-1 start-3 top-3 z-10">HOT</span>
                            )}
                        </div>
    
                        <div className="flex sm:flex-col md:flex-row gap-2 overflow-x-auto sm:order-2 md:order-2 custom-scrollbar">
                            { (
                                <img src={image} alt="product images"  className="w-16 sm:w-32 lg:w-20" />
                            )}
                        </div>
    
                    </div>
    
                    <div className="mt-4 flex-1 max-w-xl sm:ml-9 md:ml-0">
                        <h3 className="text-2xl font-bold text-slate-800">Product Name</h3>
                        { (
                            <div className="text-xl mt-7 flex gap-3 items-center font-bold">
                                <p className="text-lg text-red-600 line-through mt-1">Rs. 100</p>
                                <p>Rs. 50</p>
                            </div>
                        )} <p className="text-xl mt-7 font-bold">Rs. 150 </p>
                        
                        
                        <div className="flex flex-col gap-3 mt-7 w-48 ">
                            <span className="p-2 border bg-[#3a50a1] text-white font-bold rounded-md cursor-pointer hover:bg-[#4b5fa7] flex items-center justify-center gap-1" >Add to Cart</span>
            
                        </div>
    
                        <div className="mt-7">
                            <p className="text-lg">Product Description</p>
                            <p className="text-slate-600">Product Description</p>                     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
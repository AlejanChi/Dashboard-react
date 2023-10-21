import {LuX} from "react-icons/lu"
import Product from "./Product"
import { useEffect, useState } from "react";
function Cart({val, func}){
    let scrn = (screen.height - 184)+"px";
    const cartStructure = <div className={`lg:col-span-2 fixed lg:right-0 lg:w-[23%] ${val?"right-0":"-right-full"} top-0 w-full h-full z-10 bg-gray-800 flex flex-col gap-4 transition-all`}>
        <div className="relative text-white w-full h-screen">
            <LuX onClick={func} className="absolute top-4 ml-4 p-4 box-content text-xl hover:bg-gray-600 rounded-full lg:hidden"/>
            <h1 className="text-2xl font-bold mt-20 mx-10 lg:mt-8">Orders #159686794</h1>
            <div className="flex items-center gap-2 mt-2 mx-10 flex-wrap">
                <button className="border border-gray-400 bg-blue-500 p-2 rounded-xl">
                    Dine 
                </button>
                <button className="border border-gray-400 p-2 rounded-xl">
                To Go
                </button>
                <button className="border border-gray-400 p-2 rounded-xl">
                    Delivery
                </button>
            </div>
            <div className="grid grid-cols-6 pl-10 pt-6">
                <h5 className="col-span-4">Item</h5>
                <h5>Qty</h5>
                <h5>Prc</h5>
            </div>
            <div className={`h-[400px] md:h-[800px] lg:h-[${scrn}] overflow-y-scroll scrollbar-hide pl-6 pr-2 mt-6 gap-4 flex flex-col pb-[600px]`}>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
            {/* Submit payment */}
            <div className="bg-gray-900 w-full absolute bottom-0 right-0 p-8 text-white">
                <div className="grid grid-cols-6 gap-4">
                    <span className="col-span-5">Discount</span>
                    <span>$0</span>
                    <span className="col-span-5">Subtotal</span>
                    <span>$0</span>
                    <button className="bg-blue-500 col-span-6 h-10 rounded-md text-lg uppercase hover:bg-blue-300">Submit</button>
                </div>
            </div>
    </div>

    return cartStructure
}

export default Cart
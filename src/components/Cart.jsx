import {LuX} from "react-icons/lu"
import Product from "./Product"
import { useState } from "react";
function Cart(props){

    const [showCart, setShowCart] = useState(props);
    const toggleCart = () => {
        setShowCart(!showCart);
    }
    const cartStructure = <div className={`lg:col-span-2 fixed lg:static ${showCart?"right-0":"-right-full"} top-0 w-full h-full z-10 bg-gray-800 flex flex-col gap-4`}>
        <div className="relative text-white w-full h-screen">
            <LuX onClick={toggleCart} className="absolute top-4 ml-4 p-4 box-content text-2xl hover:bg-gray-600 rounded-full lg:hidden"/>
            <h1 className="text-2xl font-bold mt-20 mx-10">Orders #159686794</h1>
            <div className="flex items-center gap-4 mt-2 mx-10 flex-wrap">
                <button className="border border-gray-400 bg-blue-500 p-3 rounded-xl">
                    Dine in
                </button>
                <button className="border border-gray-400 p-3 rounded-xl">
                To Go
                </button>
                <button className="border border-gray-400 p-3 rounded-xl">
                    Delivery
                </button>
            </div>
            <div className="grid grid-cols-6 pl-10 pt-6">
                <h5 className="col-span-4">Item</h5>
                <h5>Qty</h5>
                <h5>Prc</h5>
            </div>
            <div className="h-[400px] overflow-y-scroll scrollbar-hide pl-6 pr-2 mt-6 gap-4 flex flex-col pb-48">
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
            <div className="bg-gray-900 w-full sticky bottom-0 right-0 p-8 text-white">
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
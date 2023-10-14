import { LuTrash } from "react-icons/lu"
function Product(){
    return <div className="grid gap-3 grid-cols-6 bg-gray-900 p-4 rounded-xl">
    <img src="comida.png" className="w-11 h-11 object-cover"/>
    <div className="col-span-3">
        <h5>Lorem ipsum</h5>
        <p>$2,29</p>
    </div>
    <div className="bg-gray-700 rounded-xl flex items-center text-lg justify-center border border-gray-300">
        <span>5</span>
    </div>
    <div className="flex items-center text-lg justify-center ">
        <span>$2,29</span>
    </div>
    <div className="col-span-5">
        <form action="#">
        <input type="text" className="bg-gray-700 rounded-xl w-full border border-gray-200 h-10 p-4 text-white" placeholder="Item"/>

        </form>
    </div>
    <div>
        <button className="border-2 border-blue-500 h-10 w-full rounded-md text-blue-500 text-xl hover:text-white hover:bg-blue-500 hover:border-white flex justify-center items-center"><LuTrash/></button>
    </div>
</div>
}

export default Product
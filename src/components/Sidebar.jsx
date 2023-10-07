import {GoHome} from 'react-icons/go'
import {LuPieChart, LuBell, LuBaggageClaim} from 'react-icons/lu'

function Sidebar(){
    return <div className="bg-gray-800 fixed left-0 top-0 w-28 h-full">
        <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">Logo</h1> 
        <ul className=" pl-4 ">
            <li className="bg-gray-700 p-4 rounded-bl-xl rounded-tl-xl">
                <a href="#" className="bg-blue-500 rounded-lg block p-4 text-white justify-center"><GoHome className='text-2xl'/></a>
            </li>
            <li className=" p-4 rounded-bl-xl rounded-tl-xl">
                <a href="#" className="hover:bg-blue-500 text-blue-500 hover:text-white rounded-lg block p-4 justify-center transition-colors"><LuPieChart className='text-2xl'/></a>
            </li>
            <li className=" p-4 rounded-bl-xl rounded-tl-xl">
                <a href="#" className="hover:bg-blue-500 text-blue-500 hover:text-white rounded-lg block p-4 justify-center transition-colors"><LuBell className='text-2xl'/></a>
            </li>
            <li className=" p-4 rounded-bl-xl rounded-tl-xl">
                <a href="#" className="hover:bg-blue-500 text-blue-500 hover:text-white rounded-lg block p-4 justify-center transition-colors"><LuBaggageClaim className='text-2xl'/></a>
            </li>
        </ul>
    </div>
}

export default Sidebar
import Sidebar from "./components/Sidebar.jsx"
import {LuArrowUpNarrowWide, LuPlusCircle, LuBookmark, LuSearch, LuArrowBigUp} from "react-icons/lu"
import {GoPerson } from "react-icons/go"
import { useState } from "react"
import Card from "./components/Card.jsx"
import Cart from "./components/Cart.jsx"
import { datos } from "../data.json"
// import Articulos from "./backend/getData.jsx"


console.log(datos.map(dato => dato))


function App(){
  // const {products} = useGLobalState();
  const top = ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  const toggleMenu = () =>{
    setShowMenu(!showMenu);
    setShowOrder(false);
  }
  const toggleOrders = () =>{
    setShowOrder(!showOrder);
    setShowMenu(false);
  }
  
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  return <div className="bg-gray-700 w-full min-h-screen">
    {/* sidebar */}
    <Sidebar showMenu={showMenu}/>
    {/* CABECERA DEL MAIN */}
    <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8">
      <div className="lg:col-span-6 p-8">
        <header className="mb-4">
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <div>
              <h1 className="text-white text-2xl font-bold">
                Lorem ipsum
              </h1>
              <p className="text-gray-200 text-justify">
                January 5 - 2023
              </p>
            </div>
          <form action="#">
            <div className="w-full relative">
              <LuSearch className="absolute text-white top-1/2 -translate-y-1/2 left-3 text-2xl"/>
              <input type="text" placeholder="Search" className="bg-gray-800 rounded-2xl w-full text-white pl-14 py-4 pr-2 outline-none"/>
            </div>
          </form>
          {/* OPCIONES DE VISTA */}
          </div>
          <nav className="flex text-white items-center justify-between border-b lg:justify-start pt-4 lg:gap-4">
            <a href="#" className="py-2 text-blue-500 text-lg pr-4">Hot dishes</a>
            <a href="#" className="py-2 pr-4">Cold dishes</a>
            <a href="#" className="py-2 pr-4">Soup</a>
            <a href="#" className="py-2">Deserts</a>
          </nav>

          <div className="flex text-white items-center justify-between pl-8 py-5">
            <h2>Choose Dish</h2>
            <select name="" id="" className="bg-gray-800 rounded-xl p-2">
              <option value="#" selected>Dine in</option>
              <option value="#">To Go</option>
              <option value="#">Delivery</option>
            </select>
          </div>
        </header>

      

        {/* CUERPO PRINCIPAL */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-20 lg:grid-cols-3 pb-28">

          {/* CARD */}

            {datos.map((dato, i)=>(
              <Card key={i} nombre={dato.nombre} desc={dato.descripcion}></Card>
            ))}
       
          
          
        </div>
        <button className={`fixed p-3 lg:bottom-4 bottom-20 lg:left-32 bg-gray-900 text-white text-3xl rounded-xl hover:bg-blue-500 z-20 ${showOrder||showMenu?'hidden':''}`} onClick={top}><LuArrowBigUp/></button>
      </div>
{/* CARRITO */}
<Cart val={showOrder} func={toggleOrders}/>
    </main>
    <div className="bg-gray-800 lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-300 py-4 px-3 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
      <button><LuBookmark/></button>
      <button onClick={toggleMenu}><LuArrowUpNarrowWide/></button>
      <button><LuPlusCircle/></button>
      <button onClick={toggleOrders}><GoPerson/></button>
    </div>
  </div>
}

export default App
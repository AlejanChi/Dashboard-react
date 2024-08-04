function Card({nombre, desc}){
 
    const cardStructure = <div className="bg-gray-800 items-center flex flex-col p-9 rounded-xl">
    <img src="comida.png" className="w-50 h-40 object-cover -mt-24 hover:shadow-2xl rounded-full transition-shadow"/>
    <div className="text-white text-center flex flex-col gap-3">
      <h3 className="text-2xl">
        {nombre}
      </h3>
      <p className="text-xs">
       {desc}       
      </p>
      <span className="text-gray-400">  
      </span>
      <p className="text-gray-300">20 units available</p>
    </div>
  </div>;
  

    return (cardStructure)
    
}

export default Card
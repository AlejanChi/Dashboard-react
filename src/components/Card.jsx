function Card(){
    const cardStructure = <div className="bg-gray-800 items-center flex flex-col p-9 rounded-xl">
    <img src="comida.png" className="w-50 h-40 object-cover -mt-24 hover:shadow-2xl rounded-full transition-shadow"/>
    <div className="text-white text-center">
      <h3 className="text-2xl">Lorem ipsum</h3>
      <p className="text-justify">
        Lorem ipsum dolor
      </p>
      <span className="text-gray-400">2.29</span>
      <p className="text-gray-300">20 units available</p>
    </div>
  </div>;
  

    return (cardStructure)
    
}

export default Card
"use client"
import { RiTicketLine } from "react-icons/ri";

interface Props{
    ventas:string
    clientes:string 
}

const BoxReport = ({ventas,clientes}:Props) => {

  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3">
            {/* Card */}
            <div className="bg-secondary-900 p-8 rounded-xl">
                <div className=" flex items-center justify-between mb-4">    
                    <div>        
                            <h1 className="text-gray-400 text-xl">Ventas: </h1>              
                    </div>
                    <div>
                            <RiTicketLine className="text-2xl bg-pink-500/10 text-pink-500 p-2 box-content rounded-xl"/> 
                    </div>
                </div>
                
                <div>
                    <h1 className="text-4xl text-white">&euro; {ventas}</h1>
                    <h1 className="text-4xl text-white">&euro; {clientes}</h1>
                </div>             
            </div>
        </div>
    </div>
  )
}

export default BoxReport
import Image from 'next/image'
import Fondo from '@/public/logo.svg'

export function SubteSelector() {
  return (
    <div className='m-5 h-[95%] bg-[#323332] rounded-t-[30px] rounded-b-[20px]'>
      <div className="bg-[#fed300] w-full h-[70px] rounded-t-[20px]">
        <Image className='w-[60px] h-[60px] ml-10' alt="Logo" height={50} width={50} src={Fondo}></Image>
      </div>
      <div>
        <h1 className='text-white font-black pl-4 pt-5 pb-5 border-b border-b-gray-500 w-[90%] ml-5'>Seleccione la Linea</h1>
      </div>
      <div className='m-9 flex'>
        <button className="h-12 w-12 bg-[#00b0dd] hover:bg-[#0090b8] rounded-full cursor-pointer  font-black text-white">A</button>
        <button className="h-12 w-12 ml-3 bg-[#ee2234] hover:bg-[#c61c2b] rounded-full cursor-pointer  font-black text-white">B</button>
        <button className="h-12 w-12 ml-3 bg-[#0068b5] hover:bg-[#00579a] rounded-full cursor-pointer  font-black text-white">C</button>
        <button className="h-12 w-12 ml-3 bg-[#08876b] hover:bg-[#066f59] rounded-full cursor-pointer  font-black text-white">D</button>
        <button className="h-12 w-12 ml-3 bg-[#6b197f] hover:bg-[#551464] rounded-full cursor-pointer  font-black text-white">E</button>
        <button className="h-12 w-12 ml-3 bg-[#fed300] hover:bg-[#e6bd00] rounded-full cursor-pointer font-black text-[#56565b]">H</button>
      </div>
    </div>
  )
}

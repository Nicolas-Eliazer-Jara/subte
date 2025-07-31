import Image from 'next/image'
import Fondo from '@/public/logo.svg'

export function Nav() {
  return (
    <div className='m-5 h-[95%] bg-[#323332] rounded-t-[30px] rounded-b-[20px]'>
      <div className="bg-[#fed300] w-full h-[70px] rounded-t-[20px]">
        <Image className='w-[60px] h-[60px] ml-10' alt="Logo" height={50} width={50} src={Fondo}></Image>
      </div>
      <div>
        <h1 className='text-white font-black pl-4 pt-5 pb-5 border-b-1 border-b-gray-500 w-[90%] ml-5'>Seleccione la Linea</h1>
      </div>
        <div className='m-9 flex flex-col'>
            <button className="h-12 w-12  py-2 mt-4 px-4 bg-[#00b0dd] hover:bg-[#008cdd] rounded-[100%] font-black text-white">A</button>
            <button className="h-12 w-12  py-2 mt-4 px-4 bg-[#ee2234] hover:bg-[#ee2234] rounded-[100%] font-black text-white">B</button>
            <button className="h-12 w-12  py-2 mt-4 px-4 bg-[#0068b5] hover:bg-[#0068b5] rounded-[100%] font-black text-white">C</button>
            <button className="h-12 w-12  py-2 mt-4 px-4 bg-[#08876b] hover:bg-[#08876b] rounded-[100%] font-black text-white">D</button>
            <button className="h-12 w-12  py-2 mt-4 px-4 bg-[#6b197f] hover:bg-[#6b197f] rounded-[100%] font-black text-white">E</button>
            <button className="h-12 w-12  py-2 mt-4 px-4 bg-[#fed300] hover:bg-[#fed300] rounded-[100%] font-black text-[#56565b]">H</button>
        </div>
    </div>
  )
}

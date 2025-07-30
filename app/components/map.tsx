import Image from 'next/image'
import Mapa from '@/public/Mapa.jpg'
export function  Map() {
    return (
      <div className='m-5 rounded-[20px]'>
        <Image className=' rounded-[20px] w-full h-screen object-cover' src={Mapa} height={900} width={900}></Image>
      </div>
    )
  }
  
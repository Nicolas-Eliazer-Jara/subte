import Image from 'next/image'
import Fondo from '@/public/logo.svg'
import { useSubteData } from '@/app/hook/useSubteData';

interface Props {
  selectedRouteId: string;
  setSelectedRouteId: (id: string) => void;
}

export function SubteSelector({ selectedRouteId, setSelectedRouteId }: Props) {
  const { filteredData, loading } = useSubteData(selectedRouteId);

  return (
    <div className='m-5 h-[95%] bg-[#323233] rounded-t-[30px] rounded-b-[20px]'>
      <div className="bg-[#ffd513] w-full h-[70px] rounded-t-[20px]">
        <Image className='w-[60px] h-[60px] ml-10' alt="Logo" height={50} width={50} src={Fondo} />
      </div>

      <h1 className='text-white font-black pl-4 pt-5 pb-5 border-b border-b-gray-500 w-[90%] ml-5'>
        Seleccione la Línea
      </h1>

      <div className='m-9 flex'>
        {['A', 'B', 'C', 'D', 'E', 'H'].map((line) => (
          <button
            key={line}
            onClick={() => setSelectedRouteId(line)}
            className={`h-12 w-12 ml-3 rounded-full cursor-pointer font-black text-white ${
              selectedRouteId === line ? 'ring-4 ring-white' : ''
            }`}
            style={{ backgroundColor: getColor(line) }}
          >
            {line}
          </button>
        ))}
      </div>

      <div className='p-5 text-white'>
        {loading && <p>Cargando...</p>}
        {!loading && Array.isArray(filteredData) && filteredData.length > 0 && (
          <div>
            <p className='font-bold'>Nombre: {filtered[0].route_long_name}</p>
            <p>Descripción: {filtered[0].route_desc}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Función para devolver el color por línea
function getColor(line: string) {
  const colors: Record<string, string> = {
    A: '#00b0dd',
    B: '#ee2234',
    C: '#0068b5',
    D: '#08876b',
    E: '#6b197f',
    H: '#fed300',
  };
  return colors[line] || '#888';
}

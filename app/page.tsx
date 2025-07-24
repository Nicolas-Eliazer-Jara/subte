import {Nav} from './components/nav'
import {Map} from './components/map'

export default function Home() {
  return (
   <div className=" flex">
       <div className="bg-gray-400 w-3/9 h-screen">
            <Nav></Nav>
       </div>

       <div className="bg-amber-50 w-5/9 h-screen">
            <Map></Map>
       </div>
   </div>
  );
}
